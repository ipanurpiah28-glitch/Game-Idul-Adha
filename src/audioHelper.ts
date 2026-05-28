class AudioHelper {
  private ctx: AudioContext | null = null;
  private musicInterval: any = null;
  private bgmNodes: AudioNode[] = [];
  public isMusicPlaying = false;
  public soundEnabled = true;

  constructor() {
    // AudioContext will be initialized on user interaction
  }

  private initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play a quick button tap/bloop sound
  public playClick() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.initContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      console.warn('Audio click error:', e);
    }
  }

  // Play a correct response sound (joyful major chord)
  public playCorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6

      notes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + index * 0.04);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + index * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.04 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.04);
        osc.stop(now + index * 0.04 + 0.4);
      });
    } catch (e) {
      console.warn('Audio correct error:', e);
    }
  }

  // Play an incorrect response sound (sad cartoon sliding buzzer)
  public playWrong() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();

      // Lower buzzer
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(120, now + 0.3);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      // Slightly detuned oscillator for thickness
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(177, now);
      osc2.frequency.linearRampToValueAtTime(117, now + 0.3);

      gain2.gain.setValueAtTime(0.12, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc.start();
      osc2.start();
      osc.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch (e) {
      console.warn('Audio wrong error:', e);
    }
  }

  // Synthesize Cow Moo "Moo-oo"
  public playCowSound() {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      // Base carrier oscillator (low pitch)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Cow sounds are heavy, rich in harmonics, starts low, slightly goes lower, then decays
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.7);
      osc.frequency.linearRampToValueAtTime(75, now + 1.2);

      // Low frequency pitch vibrato for realistic throat sound
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(7, now); // 7Hz trembling
      lfoGain.gain.setValueAtTime(3.5, now); // vibrato depth (Hz)
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      // Bandpass formant filter to sound like an "Oh" or "Oo" vowel
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.frequency.exponentialRampToValueAtTime(280, now + 1.0);
      filter.Q.setValueAtTime(3, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.15); // fade in
      gain.gain.linearRampToValueAtTime(0.2, now + 0.6); // sustain
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2); // fade out

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start();
      osc.start();
      
      lfo.stop(now + 1.35);
      osc.stop(now + 1.35);

      this.playClick(); // Tiny visual spark click
    } catch (e) {
      console.warn('Cow sound synth error:', e);
    }
  }

  // Synthesize Goat Bleat "Baaaa-aa-aa"
  public playGoatSound() {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Middle pitch sawtooth is good for sheep/goats
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.8);

      // Fast trembling Vibrato (LFO) for "baaa-aa-aa" goat bleat effect
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(14, now); // Very fast trembling 14Hz
      lfoGain.gain.setValueAtTime(25, now); // high vibrato depth (Hz) to wobble pitch
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      // Formant frequency
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(950, now);
      filter.frequency.linearRampToValueAtTime(800, now + 0.8);
      filter.Q.setValueAtTime(2, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.22, now + 0.08); // fast attack
      // Pulsing gain using LFO is also possible, but fast pitch tremble is usually sufficient
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start();
      osc.start();

      lfo.stop(now + 0.9);
      osc.stop(now + 0.9);
    } catch (e) {
      console.warn('Goat sound synth error:', e);
    }
  }

  // Synthesize Camel Grunt/Gurgle
  public playCamelSound() {
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Very low throat noise
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(70, now);
      osc.frequency.linearRampToValueAtTime(55, now + 0.9);

      // LFO for throat growl
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(18, now); // 18Hz growling fluctuation
      lfoGain.gain.setValueAtTime(15, now); 
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);
      filter.Q.setValueAtTime(4, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      lfo.start();
      osc.start();

      lfo.stop(now + 1.0);
      osc.stop(now + 1.0);
    } catch (e) {
      console.warn('Camel sound synth error:', e);
    }
  }

  // Fanfare completion sound (royal celebration arpeggio)
  public playFanfare() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.initContext();
      const now = ctx.currentTime;
      
      const chord = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C Major scale sweep
      
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.6);
      });
    } catch (e) {
      console.warn('Fanfare sound error:', e);
    }
  }

  // Smooth peaceful background music (BGM)
  // Plays an endless sequence of soft, modal, rhythmic bell-like tones
  public startBGM() {
    if (this.isMusicPlaying) return;
    try {
      const ctx = this.initContext();
      this.isMusicPlaying = true;

      // An Islamic melodic scale (Hijaz / Phrygian Dominant or peaceful pentatonic)
      // C, D, E, G, A
      const scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
      let step = 0;

      const playMusicStep = () => {
        if (!this.isMusicPlaying || !this.soundEnabled) return;
        const now = ctx.currentTime;

        // Choose nice harmonic notes based on a simple repeating pattern
        // High soft bell tone
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Elegant peaceful bell melody
        const index = [0, 4, 2, 5, 3, 6, 4, 7, 3, 5, 2, 4][step % 12];
        const freq = scale[index] * ([0, 1, 3, 7].includes(step % 8) ? 1 : 2); // octaves

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.04, now + 0.1); // soft bell strike
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8); // long delay decay

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.0);

        // Gentle sub-bass base pad to make it warm (on step 0 and 4)
        if (step % 4 === 0) {
          const bassOsc = ctx.createOscillator();
          const bassGain = ctx.createGain();
          bassOsc.type = 'triangle';
          bassOsc.frequency.setValueAtTime(scale[step % 3 === 0 ? 0 : 2] / 2, now); // 1 octave down
          
          bassGain.gain.setValueAtTime(0, now);
          bassGain.gain.linearRampToValueAtTime(0.05, now + 0.4);
          bassGain.gain.exponentialRampToValueAtTime(0.001, now + 2.8);

          bassOsc.connect(bassGain);
          bassGain.connect(ctx.destination);
          bassOsc.start(now);
          bassOsc.stop(now + 3.0);
        }

        step++;
      };

      // Play first step immediately
      playMusicStep();

      // Schedule subsequent steps every 1.5 seconds
      this.musicInterval = setInterval(playMusicStep, 1500);
    } catch (e) {
      console.warn('BGM error:', e);
    }
  }

  public stopBGM() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  public toggleBGM() {
    if (this.isMusicPlaying) {
      this.stopBGM();
    } else {
      this.startBGM();
    }
    return this.isMusicPlaying;
  }
}

// Single active instance
export const audioHelper = new AudioHelper();
export default audioHelper;
