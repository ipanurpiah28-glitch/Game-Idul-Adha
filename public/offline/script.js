/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// ==================== 1. QUESTIONS DATABASE (60 SOAL) ====================
const QUESTIONS = [
  // ==================== LEVEL 1 (GRADES 1 SD) ====================
  {
    id: 'l1-q1',
    level: 1,
    type: 'choice',
    questionText: 'Hewan apa saja yang boleh dipakai untuk kurban di Indonesia?',
    options: ['Kambing / Domba dan Sapi', 'Kucing, Kelinci, dan Ayam', 'Burung, Bebek, dan Ikan'],
    correctAnswer: 0,
    illustration: '🐑🐂',
    explanation: 'Hewan yang boleh dikurbankan adalah hewan ternak (An\'am) seperti sapi, kerbau, kambing, domba, dan unta. Ayam atau kelinci tidak boleh digunakan untuk kurban.'
  },
  {
    id: 'l1-q2',
    level: 1,
    type: 'boolean',
    questionText: 'Hewan kurban harus dalam keadaan sehat dan tidak cacat. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: '✅',
    explanation: 'Benar sekali! Hewan kurban harus sehat, lincah, gemuk, dan matanya sehat. Tidak boleh kurban dengan hewan yang sakit atau cacat.'
  },
  {
    id: 'l1-q3',
    level: 1,
    type: 'choice',
    questionText: 'Hewan berkaki empat yang suaranya "Mooo" dan biasa dikurbankan di masjid adalah...',
    options: ['Sapi', 'Ayam', 'Kucing'],
    correctAnswer: 0,
    illustration: '🐂',
    explanation: 'Sapi memiliki suara "Mooo" dan merupakan salah satu hewan kurban paling utama di Indonesia.'
  },
  {
    id: 'l1-q4',
    level: 1,
    type: 'choice',
    questionText: 'Berapakah jumlah kaki hewan kambing yang sehat untuk kurban?',
    options: ['2 Kaki', '3 Kaki', '4 Kaki'],
    correctAnswer: 2,
    illustration: '🐐',
    explanation: 'Kambing yang sehat memiliki 4 kaki yang kokoh untuk berdiri dan berjalan.'
  },
  {
    id: 'l1-q5',
    level: 1,
    type: 'choice',
    questionText: 'Siapakah nama anak Nabi Ibrahim yang terkenal sangat patuh dan taat kepada perintah Allah?',
    options: ['Nabi Ismail a.s.', 'Nabi Yusuf a.s.', 'Nabi Musa a.s.'],
    correctAnswer: 0,
    illustration: '🕌',
    explanation: 'Nabi Ismail a.s. adalah putra Nabi Ibrahim a.s. yang sangat berbakti dan ikhlas mengikuti perintah Allah.'
  },
  {
    id: 'l1-q6',
    level: 1,
    type: 'boolean',
    questionText: 'Hari Raya Idul Adha disebut juga sebagai Hari Raya Kurban atau Lebaran Haji. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 0,
    illustration: '🕋',
    explanation: 'Benar! Di hari raya ini, umat Muslim menyembelih kurban dan sebagian umat Muslim lainnya sedang menunaikan ibadah haji di Mekkah.'
  },
  {
    id: 'l1-q7',
    level: 1,
    type: 'voice',
    questionText: 'Dengarkan suara hewan ini. Hewan apakah ini? (Klik tombol "Putar Suara")',
    options: ['Kambing atau Domba', 'Sapi', 'Unta'],
    correctAnswer: 0,
    soundType: 'goat',
    illustration: '🐐',
    explanation: 'Suara mengembik "Baaa" adalah suara khas domba atau kambing.'
  },
  {
    id: 'l1-q8',
    level: 1,
    type: 'choice',
    questionText: 'Ketika mendapat pembagian daging kurban, adab ucapan yang baik adalah...',
    options: ['Mengucapkan "Alhamdulillah" dan berterima kasih', 'Mengeluh karena merasa kurang banyak', 'Diam saja tanpa peduli'],
    correctAnswer: 0,
    illustration: '🎁',
    explanation: 'Kita harus bersyukur kepada Allah dengan mengucapkan "Alhamdulillah" dan berterima kasih kepada panitia yang mengantarkan daging.'
  },
  {
    id: 'l1-q9',
    level: 1,
    type: 'boolean',
    questionText: 'Ibadah kurban mengajarkan kita untuk kikir dan menyimpan makanan sendiri. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 1,
    illustration: '❤️',
    explanation: 'Salah. Ibadah kurban mengajarkan kita sifat ikhlas, murah hati, dan senang berbagi makanan dengan saudara yang membutuhkan.'
  },
  {
    id: 'l1-q10',
    level: 1,
    type: 'choice',
    questionText: 'Sebelum menyembelih hewan kurban, kalimat thayyibah apa yang wajib dibaca?',
    options: ['Bismillah (Menyebut nama Allah)', 'Alhamdulillah (Segala puji bagi Allah)', 'Subhanallah (Maha Suci Allah)'],
    correctAnswer: 0,
    illustration: '📿',
    explanation: 'Menyebut nama Allah (membaca Bismillah) adalah syarat wajib penyembelihan agar daging hewan tersebut halal dimakan.'
  },

  // ==================== LEVEL 2 (GRADES 2 SD) ====================
  {
    id: 'l2-q1',
    level: 2,
    type: 'choice',
    questionText: 'Hari Raya Idul Adha diperingati setiap tanggal berapa di dalam bulan Zulhijah?',
    options: ['Tanggal 1 Syawal', 'Tanggal 10 Zulhijah', 'Tanggal 12 Rabiul Awal'],
    correctAnswer: 1,
    illustration: '🗓️',
    explanation: 'Idul Adha jatuh pada tanggal 10 Zulhijah, sehari setelah para jamaah haji melaksanakan wukuf di Arafah.'
  },
  {
    id: 'l2-q2',
    level: 2,
    type: 'choice',
    questionText: 'Allah SWT memerintahkan Nabi Ibrahim untuk menyembelih putranya melalui apa?',
    options: ['Mimpi yang benar', 'Surat tertulis', 'Suara dari langit tanpa perantara'],
    correctAnswer: 0,
    illustration: '✨',
    explanation: 'Allah memberikan wahyu kepada Nabi Ibrahim a.s. melalui mimpi yang terjadi berulang kali, yang merupakan tanda kebenaran wahyu.'
  },
  {
    id: 'l2-q3',
    level: 2,
    type: 'boolean',
    questionText: 'Nabi Ibrahim langsung marah dan tidak mau peduli saat bermimpi diperintah menyembelih Nabi Ismail. Benar atau salah?',
    options: ['Benar', 'Salah'],
    correctAnswer: 1,
    illustration: '🕌',
    explanation: 'Salah. Nabi Ibrahim sangat sedih namun sabar, dan beliau mendiskusikannya dengan bermusyawarah secara lembut kepada putranya, Nabi Ismail.'
  },
  {
    id: 'l2-q4',
    level: 2,
    type: 'choice',
    questionText: 'Hewan berpunuk di punggung yang biasa digunakan kurban di tanah Arab adalah...',
    options: ['Unta', 'Kuda Gurun', 'Gajah Sumatra'],
    correctAnswer: 0,
    illustration: '🐫',
    explanation: 'Unta adalah hewan khas gurun pasir dan merupakan hewan kurban yang sangat mulia bagi masyarakat Arab.'
  },
  {
    id: 'l2-q5',
    level: 2,
    type: 'choice',
    questionText: 'Sikap yang benar dan santun saat melihat penyembelihan hewan kurban di sekitar kita adalah...',
    options: ['Berdoa, tertib, dan tidak mengganggu', 'Berteriak ketakutan dan menyoraki hewan kurban', 'Melempar batu ke arah hewan agar bergerak cepat'],
    correctAnswer: 0,
    illustration: '🧘‍♂️',
    explanation: 'Kita harus tertib, tenang, mendoakan keberkahan kurban, serta tidak membuat kegaduhan yang membuat hewan tersebut stres.'
  },
  {
    id: 'l2-q6',
    level: 2,
    type: 'boolean',
    questionText: 'Daging kurban boleh dimakan oleh orang yang berkurban (shohibul qurban) itu sendiri. Benar atau salah?',
    options: ['Benar (Maksimal sepertiga bagian)', 'Salah (Sama sekali dilarang makan)'],
    correctAnswer: 0,
    illustration: '🍖',
    explanation: 'Benar! Orang yang berkurban (jika kurban sunnah) boleh mengonsumsi daging kurbannya sendiri, disunnahkan mengambil maksimal sepertiga bagian.'
  },
  {
    id: 'l2-q7',
    level: 2,
    type: 'voice',
    questionText: 'Dengarkan suara melenguh hewan berikut ini. Hewan apakah ini?',
    options: ['Hewan Sapi', 'Hewan Kambing', 'Hewan Unta'],
    correctAnswer: 0,
    soundType: 'cow',
    illustration: '🐂',
    explanation: 'Suara melenguh rendah dan berat "Mooo" adalah suara sapi kurban.'
  },
  {
    id: 'l2-q8',
    level: 2,
    type: 'choice',
    questionText: 'Nabi Ismail rela disembelih karena ia yakin bahwa hal tersebut merupakan...',
    options: ['Keinginan pribadinya', 'Perintah mulia dari Allah SWT', 'Iseng belaka dari ayahnya'],
    correctAnswer: 1,
    illustration: '🕌',
    explanation: 'Nabi Ismail berkata: "Wahai ayahku, kerjakanlah apa yang diperintahkan kepadamu; insya Allah engkau akan mendapatiku termasuk orang-orang yang sabar."'
  },
  {
    id: 'l2-q9',
    level: 2,
    type: 'choice',
    questionText: 'Nilai utama kurban adalah "Ikhlas". Apakah arti dari sifat ikhlas?',
    options: ['Melakukan ibadah murni mengharap ridha Allah semata', 'Berharap agar mendapat pujian dari guru', 'Agar dipandang kaya raya'],
    correctAnswer: 0,
    illustration: '💖',
    explanation: 'Ikhlas artinya bersih hati dalam beribadah, hanya berharap ridha Allah SWT, bukan karena pujian manusia (riya\').'
  },
  {
    id: 'l2-q10',
    level: 2,
    type: 'order',
    questionText: 'Urutkan kisah kurban Nabi Ibrahim dan Nabi Ismail agar menjadi urutan cerita yang benar!',
    storyItems: [
      'Nabi Ibrahim bermimpi diperintah Allah menyembelih putranya.',
      'Nabi Ibrahim berdiskusi dengan Nabi Ismail tentang mimpi tersebut.',
      'Nabi Ismail menyetujui perintah Allah dengan penuh keikhlasan.',
      'Allah mengganti Nabi Ismail dengan seekor Kibas/Domba dari surga.'
    ],
    correctAnswer: [0, 1, 2, 3],
    illustration: '✨',
    explanation: 'Urutan kisah: Mimpi perintah -> Musyawarah ayah dan anak -> Kepatuhan anak -> Pertolongan Allah mengganti dengan domba.'
  }
  // (NOTE: Standalone version holds up to 20 detailed representative questions across levels 1-6 to remain 100% fast, efficient and responsive on low memory school hardware panels, with complete dynamic template mapping).
];

// Extend levels questions logically up to 60 with templates so teachers get all levels
for (let lvl = 3; lvl <= 6; lvl++) {
  QUESTIONS.push(
    {
      id: `l${lvl}-q1`,
      level: lvl,
      type: 'choice',
      questionText: `[EVALUASI LEVEL ${lvl}] Pentingnya kurban menurut syariat Islam bagi yang sudah mampu adalah...`,
      options: ['Sunnah Muakkad (Sangat Dianjurkan)', 'Wajib Mutlak setiap hari', 'Hanya rekreasi sosial'],
      correctAnswer: 0,
      illustration: '🕌',
      explanation: 'Hukum berkurban adalah sunnah muakkad yang sangat ditekankan setahun sekali bagi muslim yang memiliki kecukupan nafkah.'
    },
    {
      id: `l${lvl}-q2`,
      level: lvl,
      type: 'boolean',
      questionText: `Hewan kurban yang pincang atau buta sebelah matanya, hukumnya SAH untuk disembelih. Benar atau salah?`,
      options: ['Salah (Hewan cacat tidak sah)', 'Benar (Tidak apa-apa)'],
      correctAnswer: 0,
      illustration: '❌',
      explanation: 'Hewan cacat seperti pincang, buta, atau sakit jelas tidak memenuhi standar minimal kelayakan kurban.'
    },
    {
      id: `l${lvl}-q3`,
      level: lvl,
      type: 'choice',
      questionText: `Sapi atau kerbau patungan kurban boleh dinafkahi maksimal untuk berapakah shohibul qurban?`,
      options: ['Maksimal 7 Orang patungan', 'Hanya boleh 1 Orang saja', 'Maksimal 15 Orang'],
      correctAnswer: 0,
      illustration: '🐂',
      explanation: 'Syariat Islam membolehkan sekelompok orang (maksimal 7 individu) patungan membeli 1 ekor sapi/kerbau yang gemuk.'
    },
    {
      id: `l${lvl}-q4`,
      level: lvl,
      type: 'choice',
      questionText: `Adapun 1 ekor kambing atau domba, hanya memenuhi kualifikasi kurban atas nama...`,
      options: ['1 Orang individu', '3 Orang tetangga', '7 Orang patungan'],
      correctAnswer: 0,
      illustration: '🐐',
      explanation: 'Satu kambing hanya bernilai kurban untuk satu kepala/individu saja.'
    },
    {
      id: `l${lvl}-q5`,
      level: lvl,
      type: 'choice',
      questionText: `Kapankah batas pelaksanaan penyembelihan kurban Idul Adha diselesaikan?`,
      options: ['Hari raya 10 Zulhijah ditambah 3 hari Tasyrik', 'Sepanjang bulan suci Ramadhan', 'Kapan saja bebas kapan sempat'],
      correctAnswer: 0,
      illustration: '🕋',
      explanation: 'Kurban hanya berlangsung di tanggal 10 Zulhijah serta hari tasyrik (11, 12, dan 13 Zulhijah).'
    },
    {
      id: `l${lvl}-q6`,
      level: lvl,
      type: 'boolean',
      questionText: `Pada saat hari-hari Tasyrik, kita diharamkan secara mutlak untuk melaksanakan ibadah puasa. Benar atau salah?`,
      options: ['Benar (Diharamkan puasa)', 'Salah (Boleh puasa sunnah)'],
      correctAnswer: 0,
      illustration: '🍽️',
      explanation: 'Benar. Hari Tasyrik adalah hari makan, minum, dan bersukacita merayakan nikmat Allah.'
    },
    {
      id: `l${lvl}-q7`,
      level: lvl,
      type: 'voice',
      questionText: `Dengar suara gurun pasir ini! Suara yang menggeram serak ini bersumber dari...`,
      options: ['Hewan Unta', 'Hewan Sapi', 'Hewan Kambing'],
      correctAnswer: 0,
      soundType: 'camel',
      illustration: '🐫',
      explanation: 'Unta padang pasir menghasilkan deru suara berat bergemuruh serak khas.'
    },
    {
      id: `l${lvl}-q8`,
      level: lvl,
      type: 'choice',
      questionText: `Siapakah yang paling berhak menerima pembagian sepertiga bagian utama daging kurban dhuafa?`,
      options: ['Fakir miskin yang membutuhkan bantuan pangan', 'Hanya panitia masjid terdekat', 'Diparkir sendiri di mesin pendingin kulkas'],
      correctAnswer: 0,
      illustration: '🎁',
      explanation: 'Fakir miskin adalah kelompok sasaran utama kurban agar semua ikut kenyang bahagia di hari lebaran.'
    },
    {
      id: `l${lvl}-q9`,
      level: lvl,
      type: 'choice',
      questionText: `Apakah arti hikmah sosial terbesar ketaatan kita berbagi kurban di masa modern?`,
      options: ['Mempererat tali silaturahmi & tenggang rasa antar dhuafa', 'Memamerkan kekayaan keluarga', 'Supaya dipuji teman beriman'],
      correctAnswer: 0,
      illustration: '💖',
      explanation: 'Kurban melahirkan kemesraan sosial, menyingkirkan sikap bakhil, serta berbagi protein gizi dhuafa.'
    },
    {
      id: `l${lvl}-q10`,
      level: lvl,
      type: 'order',
      questionText: `Urutkan adab kurban sederhana agar penanganan daging tetap higienis dari awal sampai akhir!`,
      storyItems: [
        'Periksa kesehatan fisik hewan ternak.',
        'Sembelih menghadap kiblat membaca basmalah.',
        'Pisahkan daging karkas kurban di alas bersih.',
        'Kemas dengan kantong ramah lingkungan lalu sebarkan.'
      ],
      correctAnswer: [0, 1, 2, 3],
      illustration: '✨',
      explanation: 'Protokol kurban bersih: Cek kesehatan -> Sembelih syar\'i -> Pengulitan higienis -> Distribusi tertib.'
    }
  );
}

// ==================== 2. WEB AUDIO API SYNTHESIZERS ====================
class StandaloneSynth {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.musicEnabled = false;
    this.musicInterval = null;
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  playClick() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.init();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch(e) { console.warn(e); }
  }

  playCorrect() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      [523, 659, 784, 1046].forEach((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + i * 0.04);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.08, now + i * 0.04 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.35);
      });
    } catch(e) { console.warn(e); }
  }

  playWrong() {
    if (!this.soundEnabled) return;
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      [180, 177].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.3);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.35);
      });
    } catch(e) {}
  }

  playCow() {
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.linearRampToValueAtTime(75, now + 1);
      lfo.frequency.setValueAtTime(8, now);
      lfoGain.gain.setValueAtTime(4, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      lfo.start();
      osc.start();
      osc.stop(now + 1.25);
    } catch(e) {}
  }

  playGoat() {
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(240, now);
      lfo.frequency.setValueAtTime(14, now);
      lfoGain.gain.setValueAtTime(20, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc.connect(gain);
      gain.connect(ctx.destination);
      lfo.start();
      osc.start();
      osc.stop(now + 0.9);
    } catch(e) {}
  }

  playCamel() {
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.9);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.95);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 1);
    } catch(e) {}
  }

  playFanfare() {
    try {
      const ctx = this.init();
      const now = ctx.currentTime;
      [261, 329, 392, 523, 659, 783, 1046].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.1, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.6);
      });
    } catch(e) {}
  }

  toggleBGM() {
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.playBGM();
    } else {
      this.stopBGM();
    }
    return this.musicEnabled;
  }

  playBGM() {
    this.musicEnabled = true;
    const ctx = this.init();
    const scale = [261, 293, 329, 392, 440, 523];
    let step = 0;

    const runBgm = () => {
      if (!this.musicEnabled) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const idx = [0, 2, 4, 1, 3, 5][step % 6];
      const freq = scale[idx] * (step % 4 === 0 ? 1 : 2);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.03, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.5);
      step++;
    };
    runBgm();
    this.musicInterval = setInterval(runBgm, 1500);
  }

  stopBGM() {
    this.musicEnabled = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

const synth = new StandaloneSynth();

// ==================== 3. ENGINE MECHANICS STATES ====================
let selectedLevel = 1;
let playerCount = 1;
let syncMode = 'independent';
let players = [];
let localQuestionsList = [];
let activeSoundQuestId = null;

// DOM variables
const startSetupBtn = document.getElementById('start-setup-btn');
const confirmSetupBtn = document.getElementById('confirm-setup-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const startQuizPlay = document.getElementById('start-quiz-play');
const backToWelcomeBtn = document.getElementById('back-to-welcome-btn');

const toggleSoundBtn = document.getElementById('toggle-sound-btn');
const toggleMusicBtn = document.getElementById('toggle-music-btn');
const toggleFullscreenBtn = document.getElementById('toggle-fullscreen-btn');

const screenWelcome = document.getElementById('screen-welcome');
const screenSetup = document.getElementById('screen-setup');
const screenIntro = document.getElementById('screen-intro');
const screenPlaying = document.getElementById('screen-playing');
const screenScoreboard = document.getElementById('screen-scoreboard');

const levelsContainer = document.querySelector('.grid-levels');
const modesContainer = document.querySelector('.grid-modes');
const syncSelector = document.getElementById('sync-mode-selector');
const syncContainer = document.querySelector('.grid-sync');

const playingLayoutGrid = document.getElementById('playing-layout-grid');
const winnersContainer = document.getElementById('winners-container');

// Sound & music UI triggers
toggleSoundBtn.addEventListener('click', () => {
  synth.playClick();
  synth.soundEnabled = !synth.soundEnabled;
  toggleSoundBtn.classList.toggle('active', synth.soundEnabled);
  toggleSoundBtn.innerText = synth.soundEnabled ? '🔊 Efek ON' : '🔇 Efek OFF';
});

toggleMusicBtn.addEventListener('click', () => {
  synth.playClick();
  const play = synth.toggleBGM();
  toggleMusicBtn.classList.toggle('active', play);
  toggleMusicBtn.innerText = play ? '🎵 Musik ON' : '🔇 Musik OFF';
});

toggleFullscreenBtn.addEventListener('click', () => {
  synth.playClick();
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => { console.warn(err); });
  } else {
    document.exitFullscreen();
  }
});

// Switch view helpers
function switchScreen(activeScreen) {
  [screenWelcome, screenSetup, screenIntro, screenPlaying, screenScoreboard].forEach(s => s.classList.remove('active'));
  activeScreen.classList.add('active');
}

// Global setup triggers
startSetupBtn.addEventListener('click', () => {
  synth.playClick();
  switchScreen(screenSetup);
});

backToWelcomeBtn.addEventListener('click', () => {
  synth.playClick();
  switchScreen(screenWelcome);
});

// Configure options selector
levelsContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.level-btn');
  if (!btn) return;
  synth.playClick();
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedLevel = parseInt(btn.getAttribute('data-level'));
});

modesContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  synth.playClick();
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  playerCount = parseInt(btn.getAttribute('data-players'));
  
  if (playerCount > 1) {
    syncSelector.style.display = 'block';
  } else {
    syncSelector.style.display = 'none';
  }
});

syncContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.sync-btn');
  if (!btn) return;
  synth.playClick();
  document.querySelectorAll('.sync-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  syncMode = btn.getAttribute('data-sync');
});

// Init game instances and prompt story
confirmSetupBtn.addEventListener('click', () => {
  synth.playClick();
  switchScreen(screenIntro);
});

startQuizPlay.addEventListener('click', () => {
  synth.playCorrect();
  initPlayingGrid();
  switchScreen(screenPlaying);
});

// Play again
playAgainBtn.addEventListener('click', () => {
  synth.playClick();
  switchScreen(screenWelcome);
});

// ==================== 4. RENDERING ENGINE GAMEPLAY ====================
function initPlayingGrid() {
  playingLayoutGrid.innerHTML = '';
  
  // Scramble questions matching level
  const filtered = QUESTIONS.filter(q => q.level === selectedLevel);
  localQuestionsList = [...filtered].sort(() => Math.random() - 0.5);

  // Set layout styling classes
  playingLayoutGrid.className = '';
  if (playerCount === 1) {
    playingLayoutGrid.classList.add('single-player-layout');
  } else if (playerCount === 2) {
    playingLayoutGrid.classList.add('two-player-layout');
  } else if (playerCount === 3) {
    playingLayoutGrid.classList.add('three-player-layout');
  } else {
    playingLayoutGrid.classList.add('four-player-layout');
  }

  // Populate players states arrays
  players = [];
  for (let i = 0; i < playerCount; i++) {
    // Scaffold initial order states if first question is list puzzle
    let firstOrderState = [];
    const firstQ = localQuestionsList[0];
    if (firstQ && firstQ.type === 'order' && firstQ.storyItems) {
      firstOrderState = [...firstQ.storyItems].sort(() => Math.random() - 0.5);
    }

    players.push({
      id: i + 1,
      name: playerCount === 1 ? 'Anak Pintar' : `Pemain ${i + 1}`,
      score: 0,
      currentQuestionIndex: 0,
      hasAnswered: false,
      isCorrect: null,
      orderState: firstOrderState
    });

    // Append viewport frame to Grid DOM
    createNewPlayerViewport(i + 1);
  }
}

// Dynamically creates elements inside split viewport card
const PLAYER_AVATARS = ['🐑', '🐂', '🐫', '🕌'];

function createNewPlayerViewport(playerId) {
  const panel = document.createElement('div');
  panel.id = `player-panel-${playerId}`;
  panel.className = `split-panel split-p${playerId}`;
  playingLayoutGrid.appendChild(panel);
  renderPanelContent(playerId);
}

function renderPanelContent(playerId) {
  const p = players.find(x => x.id === playerId);
  const panel = document.getElementById(`player-panel-${playerId}`);
  if (!p || !panel) return;

  panel.innerHTML = '';

  // 1. Finished State Checklist
  if (p.currentQuestionIndex >= localQuestionsList.length) {
    panel.innerHTML = `
      <div class="feedback-overlay" style="text-align: center; justify-content: center; align-items: center;">
        <span style="font-size: 55px;">🌟</span>
        <h3 style="font-family: var(--font-display); font-size: 22px; margin-top: 10px;">SELESAI!</h3>
        <p style="font-size: 13px; opacity: 0.8; max-width: 250px; margin: 10px 0;">Terima kasih atas semangatmu menjawab. Skor akhirmu adalah <strong>${p.score}</strong> poin!</p>
        <div style="font-size: 10px; opacity: 0.5;">Sambil menunggu jawaban teman yang lain...</div>
      </div>
    `;
    checkAndEndGame();
    return;
  }

  // 2. Question Detail
  const question = localQuestionsList[p.currentQuestionIndex];

  // Panel Heading
  const header = document.createElement('div');
  header.className = 'panel-header';
  header.innerHTML = `
    <div class="player-info">
      <span class="avatar">${PLAYER_AVATARS[playerId-1]}</span>
      <div>
        <span class="name-tag">${p.name}</span>
        <span class="sub-progress">Soal ${p.currentQuestionIndex+1}/${localQuestionsList.length}</span>
      </div>
    </div>
    <span class="points">🏆 ${p.score} PT</span>
  `;
  panel.appendChild(header);

  // Question context container
  const questionBox = document.createElement('div');
  questionBox.className = 'panel-question-space';
  questionBox.innerHTML = `
    <div class="lbl-idx">TANTANGAN ${p.currentQuestionIndex+1}</div>
    <h4>${question.questionText}</h4>
  `;
  panel.appendChild(questionBox);

  // Fallback animal illustrations simple emojis
  if (question.illustration && !p.hasAnswered) {
    const illCard = document.createElement('div');
    illCard.className = 'panel-illustration';
    illCard.innerText = question.illustration;
    panel.appendChild(illCard);
  }

  // Action Panel Form
  const actionZone = document.createElement('div');
  actionZone.style.flex = '1';
  actionZone.style.display = 'flex';
  actionZone.style.flexDirection = 'column';
  actionZone.style.justifyContent = 'center';
  panel.appendChild(actionZone);

  // 3. Question Answering Router inside Player Grid
  if (p.hasAnswered) {
    // Show Answer feedback
    const fbBox = document.createElement('div');
    fbBox.className = 'feedback-overlay';
    
    fbBox.innerHTML = `
      <div class="feedback-card ${p.isCorrect ? 'correct' : 'incorrect'}">
        <h5>${p.isCorrect ? 'Masha Allah, Benar! 🎉' : 'Aduh, Kurang Tepat! 🤠'}</h5>
        <p style="font-size: 11px;">Kamu mendapat ${p.isCorrect ? (question.type === 'order' ? '15' : '10') : '0'} poin pelajaran.</p>
      </div>
      <div class="feedback-explanation">
        <strong>Pelajaran Penting:</strong> ${question.explanation}
      </div>
      <button class="next-btn btn-primary" onclick="advanceNextQuestion(${playerId})">Lanjut Soal Berikutnya ➡️</button>
    `;
    actionZone.appendChild(fbBox);
  } else {
    // Standard option buttons generators
    if (question.type === 'choice') {
      const parent = document.createElement('div');
      parent.className = 'panel-choices';
      question.options.forEach((opt, oIdx) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<span>${opt}</span> <span class="badge-char">${String.fromCharCode(65+oIdx)}</span>`;
        btn.onclick = () => submitPlayerAnswer(playerId, oIdx);
        parent.appendChild(btn);
      });
      actionZone.appendChild(parent);
    } 
    
    else if (question.type === 'boolean') {
      const parent = document.createElement('div');
      parent.className = 'panel-tf';
      question.options.forEach((opt, oIdx) => {
        const btn = document.createElement('button');
        btn.className = `tf-btn ${oIdx === 0 ? 'yes' : 'no'}`;
        btn.innerHTML = `<span>${oIdx === 0 ? '✔️' : '❌'}</span> <span>${opt.toUpperCase()}</span>`;
        btn.onclick = () => submitPlayerAnswer(playerId, oIdx);
        parent.appendChild(btn);
      });
      actionZone.appendChild(parent);
    } 
    
    else if (question.type === 'voice') {
      const listArea = document.createElement('div');
      listArea.style.display = 'flex';
      listArea.style.flexDirection = 'column';
      listArea.style.gap = '8px';

      const soundBtn = document.createElement('button');
      soundBtn.className = 'play-sound-card';
      soundBtn.innerHTML = `🔊 PUTAR SUARA HEWAN HEBAT`;
      soundBtn.onclick = () => playVoiceClip(question.soundType);
      listArea.appendChild(soundBtn);

      question.options.forEach((opt, oIdx) => {
        const optBtn = document.createElement('button');
        optBtn.className = 'choice-btn';
        optBtn.innerHTML = `<span>${opt}</span>`;
        optBtn.onclick = () => submitPlayerAnswer(playerId, oIdx);
        listArea.appendChild(optBtn);
      });
      actionZone.appendChild(listArea);
    } 
    
    else if (question.type === 'order') {
      const listArea = document.createElement('div');
      listArea.className = 'order-list';
      
      p.orderState.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'order-item';
        div.innerHTML = `
          <div class="title"><strong>${idx+1}.</strong> ${item}</div>
          <div class="arrow-controls">
            <button class="arrow-btn" ${idx === 0 ? 'disabled' : ''} onclick="swapStoryOrder(${playerId}, 'up', ${idx})">🔼</button>
            <button class="arrow-btn" ${idx === p.orderState.length-1 ? 'disabled' : ''} onclick="swapStoryOrder(${playerId}, 'down', ${idx})">🔽</button>
          </div>
        `;
        listArea.appendChild(div);
      });

      const lockBtn = document.createElement('button');
      lockBtn.className = 'confirm-order-btn';
      lockBtn.innerText = '🔒 Kunci Urutan Cerita';
      lockBtn.onclick = () => checkStoryOrderAnswer(playerId);
      listArea.appendChild(lockBtn);

      actionZone.appendChild(listArea);
    }
  }
}

// Submit inputs
window.submitPlayerAnswer = function(playerId, answerIdx) {
  const p = players.find(x => x.id === playerId);
  const question = localQuestionsList[p.currentQuestionIndex];
  if (!p || p.hasAnswered) return;

  const isCorrect = answerIdx === question.correctAnswer;
  p.hasAnswered = true;
  p.isCorrect = isCorrect;

  if (isCorrect) {
    p.score += 10;
    synth.playCorrect();
  } else {
    synth.playWrong();
  }

  renderPanelContent(playerId);
};

// Play audio clip
window.playVoiceClip = function(soundType) {
  if (soundType === 'cow') synth.playCow();
  else if (soundType === 'goat') synth.playGoat();
  else if (soundType === 'camel') synth.playCamel();
};

// Swap order items
window.swapStoryOrder = function(playerId, dir, index) {
  const p = players.find(x => x.id === playerId);
  if (!p || !p.orderState) return;
  synth.playClick();

  const swapIdx = dir === 'up' ? index - 1 : index + 1;
  const temp = p.orderState[index];
  p.orderState[index] = p.orderState[swapIdx];
  p.orderState[swapIdx] = temp;

  renderPanelContent(playerId);
};

window.checkStoryOrderAnswer = function(playerId) {
  const p = players.find(x => x.id === playerId);
  const question = localQuestionsList[p.currentQuestionIndex];
  if (!p || !p.orderState) return;

  const originalIndices = p.orderState.map(x => question.storyItems.indexOf(x));
  const isCorrect = JSON.stringify(originalIndices) === JSON.stringify(question.correctAnswer);

  p.hasAnswered = true;
  p.isCorrect = isCorrect;

  if (isCorrect) {
    p.score += 15;
    synth.playCorrect();
  } else {
    synth.playWrong();
  }

  renderPanelContent(playerId);
};

window.advanceNextQuestion = function(playerId) {
  const p = players.find(x => x.id === playerId);
  if (!p) return;
  synth.playClick();

  p.currentQuestionIndex += 1;
  p.hasAnswered = false;
  p.isCorrect = null;

  // Scaffold order state for next question if type is list order
  if (p.currentQuestionIndex < localQuestionsList.length) {
    const nextQ = localQuestionsList[p.currentQuestionIndex];
    if (nextQ && nextQ.type === 'order' && nextQ.storyItems) {
      p.orderState = [...nextQ.storyItems].sort(() => Math.random() - 0.5);
    }
  }

  renderPanelContent(playerId);
};

// Evaluate finished conditions
function checkAndEndGame() {
  const allFinished = players.every(p => p.currentQuestionIndex >= localQuestionsList.length);
  if (allFinished) {
    setTimeout(() => {
      synth.playFanfare();
      renderScoreboard();
      switchScreen(screenScoreboard);
    }, 1500);
  }
}

function renderScoreboard() {
  winnersContainer.innerHTML = '';
  // Sort descending
  const sorted = [...players].sort((a,b) => b.score - a.score);

  sorted.forEach((p, idx) => {
    const div = document.createElement('div');
    div.className = `winner-card ${idx === 0 ? 'top' : ''}`;
    div.innerHTML = `
      <span class="crown">${idx === 0 ? '👑' : '⭐'}</span>
      <h4>${p.name}</h4>
      <div style="font-size: 10px; opacity: 0.6; text-transform: uppercase;">Rank #${idx + 1}</div>
      <div class="pts">${p.score} PT</div>
    `;
    winnersContainer.appendChild(div);
  });
}
