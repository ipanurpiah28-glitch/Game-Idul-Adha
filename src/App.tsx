/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  Trophy, 
  Star, 
  Award, 
  Compass, 
  Check, 
  X, 
  ArrowUp, 
  ArrowDown, 
  Play, 
  Pause, 
  Users, 
  User, 
  Sparkles, 
  Clock, 
  HelpCircle,
  FileText,
  Download,
  Flame,
  Home
} from 'lucide-react';
import { QUESTIONS } from './questions';
import { PlayerState, GameMode, SyncMode, Question } from './types';
import { audioHelper } from './audioHelper';
import IllustrationSVG from './components/IllustrationSVG';

// --- Local Confetti Generator (Pure CSS-canvas-free lightweight) ---
interface ConfettiParticle {
  id: number;
  x: number; // percentage
  y: number; // percentage
  size: number;
  color: string;
  speedY: number;
  rotation: number;
  shape: 'circle' | 'square' | 'triangle' | 'star';
}

const CONFETTI_COLORS = [
  '#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#f43f5e', 
  '#8b5cf6', '#a855f7', '#14b8a6', '#06b6d4', '#eab308'
];
const PARTICLE_SHAPES: ('circle' | 'square' | 'triangle' | 'star')[] = ['circle', 'square', 'triangle', 'star'];

export default function App() {
  // --- Global Game Setting States ---
  const [gameState, setGameState] = useState<'welcome' | 'setup-players' | 'intro-story' | 'playing' | 'scoreboard'>('welcome');
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [gameMode, setGameMode] = useState<GameMode>('single');
  const [syncMode, setSyncMode] = useState<SyncMode>('independent'); // For multiplay: Independent pace vs Sync race
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Audio state
  const [soundOn, setSoundOn] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  
  // Players database list
  const [players, setPlayers] = useState<PlayerState[]>([]);
  const [syncQuestionIndex, setSyncQuestionIndex] = useState<number>(0);
  const [syncQuestionList, setSyncQuestionList] = useState<Question[]>([]);
  const [syncTimer, setSyncTimer] = useState<number>(20); // Sync race countdown
  const [syncTimerActive, setSyncTimerActive] = useState<boolean>(false);
  const [showSyncExplanation, setShowSyncExplanation] = useState<boolean>(false);

  // Confetti particles state per player ID (0 for global, 1-4 for individual screens)
  const [playerConfetti, setPlayerConfetti] = useState<{ [key: number]: ConfettiParticle[] }>({});

  // Help guides overlay
  const [showOfflineGuide, setShowOfflineGuide] = useState(false);

  // Sound play triggers and timers for animal voice questions
  const [soundActiveId, setSoundActiveId] = useState<string | null>(null);

  // Keep references to interval objects
  const timerIntervalRef = useRef<any>(null);
  const confettiIntervalRef = useRef<any>(null);

  // Standard static properties for players setup
  const DEFAULT_COLORS = [
    'bg-rose-50/95 border-rose-350 text-rose-950',   // P1
    'bg-sky-50/95 border-sky-300 text-sky-950',       // P2
    'bg-amber-50/95 border-amber-350 text-amber-950', // P3
    'bg-emerald-50/95 border-emerald-300 text-emerald-950' // P4
  ];
  const DEFAULT_ACCENTS = [
    'rose',    // P1
    'sky',     // P2
    'amber',   // P3
    'emerald'  // P4
  ];
  const PLAYER_AVATARS = ['🐑 Domba Ceria', '🐂 Sapi Bugar', '🐫 Unta Gurun', '🕌 Kubah Berkah'];
  const levelThemes = [
    { lvl: 1, icon: '🐑', bg: 'bg-green-50 hover:bg-green-100/90', border: 'border-green-250', borderActive: 'border-green-500 bg-green-100/80 scale-[0.98]', text: 'text-green-800', activeBadge: 'bg-green-500' },
    { lvl: 2, icon: '🐐', bg: 'bg-blue-50 hover:bg-blue-100/90', border: 'border-blue-250', borderActive: 'border-blue-500 bg-blue-100/80 scale-[0.98]', text: 'text-blue-800', activeBadge: 'bg-blue-400' },
    { lvl: 3, icon: '🐄', bg: 'bg-amber-50 hover:bg-amber-100/90', border: 'border-amber-250', borderActive: 'border-amber-500 bg-amber-100/80 scale-[0.98]', text: 'text-amber-800', activeBadge: 'bg-amber-500' },
    { lvl: 4, icon: '🕌', bg: 'bg-orange-50 hover:bg-orange-100/90', border: 'border-orange-250', borderActive: 'border-orange-500 bg-orange-100/80 scale-[0.98]', text: 'text-orange-900', activeBadge: 'bg-orange-500' },
    { lvl: 5, icon: '🐪', bg: 'bg-purple-50 hover:bg-purple-100/90', border: 'border-purple-250', borderActive: 'border-purple-500 bg-purple-100/80 scale-[0.98]', text: 'text-purple-800', activeBadge: 'bg-purple-500' },
    { lvl: 6, icon: '🕋', bg: 'bg-rose-50 hover:bg-rose-100/90', border: 'border-rose-250', borderActive: 'border-rose-500 bg-rose-100/80 scale-[0.98]', text: 'text-rose-800', activeBadge: 'bg-rose-500' },
  ];

  // --- Initializing Sound Hooks ---
  useEffect(() => {
    audioHelper.soundEnabled = soundOn;
  }, [soundOn]);

  useEffect(() => {
    if (musicOn) {
      audioHelper.startBGM();
    } else {
      audioHelper.stopBGM();
    }
  }, [musicOn]);

  // Fullscreen Detection
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    audioHelper.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Error enabling fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // --- CONFETTI ANIMATION LOOP ---
  const triggerConfetti = (playerId: number) => {
    const numParticles = 40;
    const newParticles: ConfettiParticle[] = Array.from({ length: numParticles }).map((_, i) => ({
      id: Math.random() + i,
      x: Math.random() * 80 + 10, // Avoid edge hugging
      y: Math.random() * 40 - 20, // Start above the screen
      size: Math.random() * 12 + 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      speedY: Math.random() * 4 + 3,
      rotation: Math.random() * 360,
      shape: PARTICLE_SHAPES[Math.floor(Math.random() * PARTICLE_SHAPES.length)]
    }));

    setPlayerConfetti(prev => ({
      ...prev,
      [playerId]: [...(prev[playerId] || []), ...newParticles]
    }));

    // Start gravity simulator if not running
    if (!confettiIntervalRef.current) {
      confettiIntervalRef.current = setInterval(() => {
        setPlayerConfetti(current => {
          const updated: { [key: number]: ConfettiParticle[] } = {};
          let totalParticlesLeft = 0;

          Object.keys(current).forEach(key => {
            const pId = parseInt(key);
            const list = current[pId] || [];
            const updatedList = list
              .map(p => ({
                ...p,
                y: p.y + p.speedY,
                rotation: p.rotation + p.speedY * 2
              }))
              .filter(p => p.y < 110); // Keep on screen

            updated[pId] = updatedList;
            totalParticlesLeft += updatedList.length;
          });

          if (totalParticlesLeft === 0) {
            clearInterval(confettiIntervalRef.current);
            confettiIntervalRef.current = null;
          }

          return updated;
        });
      }, 30);
    }
  };

  // --- GAME LIFE CYCLE CONTROLLERS ---
  const handleStartGameSetup = () => {
    audioHelper.playClick();
    setGameState('setup-players');
  };

  const handleStartIntroStory = () => {
    audioHelper.playClick();
    
    // Auto-prepopulate player arrays based on config
    const tempPlayers: PlayerState[] = [];
    const count = gameMode === 'single' ? 1 : playerCount;
    
    // Choose appropriate questions for selected level and shuffle them (10 questions total)
    const levelQuestions = QUESTIONS.filter(q => q.level === selectedLevel);
    // Shuffle level questions
    const shuffledQs = [...levelQuestions].sort(() => Math.random() - 0.5);
    setSyncQuestionList(shuffledQs);
    setSyncQuestionIndex(0);

    for (let i = 0; i < count; i++) {
      // Scramble order representation for 'order' questions if first question is type 'order'
      let initialOrderState: string[] = [];
      const firstQ = shuffledQs[0];
      if (firstQ && firstQ.type === 'order' && firstQ.storyItems) {
        initialOrderState = [...firstQ.storyItems].sort(() => Math.random() - 0.5);
      }

      tempPlayers.push({
        id: i + 1,
        name: gameMode === 'single' ? 'Petualang Cilik' : `Pemain ${i + 1}`,
        color: DEFAULT_COLORS[i],
        accentColor: DEFAULT_ACCENTS[i],
        score: 0,
        currentQuestionIndex: 0,
        streak: 0,
        stars: 0,
        activeAnswer: null,
        hasAnswered: false,
        isCorrect: null,
        wrongAttempts: 0,
        orderState: initialOrderState
      });
    }

    setPlayers(tempPlayers);
    setGameState('intro-story');
  };

  const handleBypassIntro = () => {
    audioHelper.playCorrect();
    setGameState('playing');
    
    // Launch game loop timers based on synchronization modes
    if (gameMode === 'multi' && syncMode === 'synchronized') {
      startSyncTimer();
    }
  };

  // --- SYNCHRONIZED TIMER SETUP ---
  const startSyncTimer = () => {
    // Reset timer
    setSyncTimer(selectedLevel > 4 ? 15 : selectedLevel > 2 ? 20 : 25); // Older kids get quicker timers
    setSyncTimerActive(true);
    setShowSyncExplanation(false);

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setSyncTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current);
          handleSyncTimerExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSyncTimerExpired = () => {
    setSyncTimerActive(false);
    // Find players who haven't locked in, lock them as incorrect
    setPlayers(current => 
      current.map(p => {
        if (!p.hasAnswered) {
          return {
            ...p,
            hasAnswered: true,
            isCorrect: false,
            wrongAttempts: p.wrongAttempts + 1,
            streak: 0
          };
        }
        return p;
      })
    );
    setShowSyncExplanation(true);
    audioHelper.playWrong();
  };

  // --- PLAYERS INTERACTION HANDLERS ---
  const handleAnswerInput = (playerId: number, answer: string | number) => {
    const player = players.find(p => p.id === playerId);
    if (!player || player.hasAnswered) return;

    // Get current question based on gameplay mode (Independent or Synced)
    const questionList = syncQuestionList;
    const currentQIdx = gameMode === 'multi' && syncMode === 'synchronized' ? syncQuestionIndex : player.currentQuestionIndex;
    const question = questionList[currentQIdx];
    if (!question) return;

    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
      audioHelper.playCorrect();
      triggerConfetti(playerId);
      const newStreak = player.streak + 1;
      const streakBonus = Math.floor(newStreak / 3); // Get extra points for streaks!
      const pointsScored = 10 + streakBonus * 5;
      const additionalStars = newStreak % 3 === 0 ? 1 : 0;

      setPlayers(prev => prev.map(p => {
        if (p.id === playerId) {
          return {
            ...p,
            activeAnswer: answer,
            hasAnswered: true,
            isCorrect: true,
            score: p.score + pointsScored,
            streak: newStreak,
            stars: Math.min(5, p.stars + 1 + additionalStars),
            wrongAttempts: 0
          };
        }
        return p;
      }));
    } else {
      audioHelper.playWrong();
      setPlayers(prev => prev.map(p => {
        if (p.id === playerId) {
          return {
            ...p,
            activeAnswer: answer,
            hasAnswered: true,
            isCorrect: false,
            wrongAttempts: p.wrongAttempts + 1,
            streak: 0
          };
        }
        return p;
      }));
    }

    // Checking if in synchronous mode, if all players have lock in their answers, freeze the timer and show results
    if (gameMode === 'multi' && syncMode === 'synchronized') {
      setPlayers(current => {
        const allAnswered = current.every(p => p.hasAnswered);
        if (allAnswered) {
          clearInterval(timerIntervalRef.current);
          setSyncTimerActive(false);
          setShowSyncExplanation(true);
        }
        return current;
      });
    }
  };

  // For Tap-to-Swap sorting puzzle (Order questions)
  const handleShiftStoryItem = (playerId: number, direction: 'up' | 'down', index: number) => {
    audioHelper.playClick();
    setPlayers(current => current.map(p => {
      if (p.id === playerId && p.orderState) {
        const copy = [...p.orderState];
        const swapIdx = direction === 'up' ? index - 1 : index + 1;
        if (swapIdx >= 0 && swapIdx < copy.length) {
          const temp = copy[index];
          copy[index] = copy[swapIdx];
          copy[swapIdx] = temp;
        }
        return {
          ...p,
          orderState: copy
        };
      }
      return p;
    }));
  };

  // Unlock and confirm Order puzzle
  const handleConfirmStoryOrder = (playerId: number) => {
    const player = players.find(p => p.id === playerId);
    if (!player || player.hasAnswered || !player.orderState) return;

    const questionList = syncQuestionList;
    const currentQIdx = gameMode === 'multi' && syncMode === 'synchronized' ? syncQuestionIndex : player.currentQuestionIndex;
    const question = questionList[currentQIdx];
    if (!question || !question.storyItems) return;

    // Correct target order is defined in correctAnswer (e.g. array of index order [0, 1, 2, 3])
    // The player's active state represents the current array item string value.
    // We map it to its original index in original question.storyItems
    const playerOrderIndices = player.orderState.map(item => question.storyItems!.indexOf(item));
    
    // Check if player list matches correct array sequence
    const correctIndices = question.correctAnswer as number[];
    const isCorrect = JSON.stringify(playerOrderIndices) === JSON.stringify(correctIndices);

    if (isCorrect) {
      audioHelper.playCorrect();
      triggerConfetti(playerId);
      const newStreak = player.streak + 1;
      const pointsScored = 15; // Order questions are harder (+15 pts)
      const additionalStars = newStreak % 2 === 0 ? 1 : 0;

      setPlayers(prev => prev.map(p => {
        if (p.id === playerId) {
          return {
            ...p,
            hasAnswered: true,
            isCorrect: true,
            score: p.score + pointsScored,
            streak: newStreak,
            stars: Math.min(5, p.stars + 1 + additionalStars),
            wrongAttempts: 0
          };
        }
        return p;
      }));
    } else {
      audioHelper.playWrong();
      setPlayers(prev => prev.map(p => {
        if (p.id === playerId) {
          return {
            ...p,
            hasAnswered: true,
            isCorrect: false,
            wrongAttempts: p.wrongAttempts + 1,
            streak: 0
          };
        }
        return p;
      }));
    }

    if (gameMode === 'multi' && syncMode === 'synchronized') {
      setPlayers(current => {
        const allAnswered = current.every(p => p.hasAnswered);
        if (allAnswered) {
          clearInterval(timerIntervalRef.current);
          setSyncTimerActive(false);
          setShowSyncExplanation(true);
        }
        return current;
      });
    }
  };

  // --- PROGRESS NEXT QUESTION HANDLERS ---
  const handleNextQuestion = (playerId: number) => {
    audioHelper.playClick();
    const player = players.find(p => p.id === playerId);
    if (!player) return;

    const nextIndex = player.currentQuestionIndex + 1;
    
    // Check if player finished all 10 questions
    if (nextIndex >= syncQuestionList.length) {
      // Completed! If Single Player, go to scoreboard. 
      // If multiplayer, wait until all have finished or simply go to final dashboard
      const uncompletedCount = players.filter(p => p.id !== playerId && p.currentQuestionIndex < syncQuestionList.length).length;
      
      if (uncompletedCount === 0 || gameMode === 'single') {
        audioHelper.playFanfare();
        setGameState('scoreboard');
      } else {
        // Still waiting for other players, freeze player UI at finish card
        setPlayers(prev => prev.map(p => {
          if (p.id === playerId) {
            return {
              ...p,
              currentQuestionIndex: nextIndex,
              hasAnswered: false,
              isCorrect: null,
              activeAnswer: null
            };
          }
          return p;
        }));
      }
      return;
    }

    // Prep initial states for next question (especially story scramble if type 'order')
    const nextQ = syncQuestionList[nextIndex];
    let nextOrderState: string[] = [];
    if (nextQ && nextQ.type === 'order' && nextQ.storyItems) {
      nextOrderState = [...nextQ.storyItems].sort(() => Math.random() - 0.5);
    }

    setPlayers(prev => prev.map(p => {
      if (p.id === playerId) {
        return {
          ...p,
          currentQuestionIndex: nextIndex,
          hasAnswered: false,
          isCorrect: null,
          activeAnswer: null,
          orderState: nextOrderState
        };
      }
      return p;
    }));
  };

  // For Synchronized Mode Question Advancer
  const handleSyncNextQuestion = () => {
    audioHelper.playClick();
    const nextIndex = syncQuestionIndex + 1;

    if (nextIndex >= syncQuestionList.length) {
      audioHelper.playFanfare();
      setGameState('scoreboard');
      return;
    }

    setSyncQuestionIndex(nextIndex);

    // Prepare state for all players
    const nextQ = syncQuestionList[nextIndex];
    let nextOrderState: string[] = [];
    if (nextQ && nextQ.type === 'order' && nextQ.storyItems) {
      nextOrderState = [...nextQ.storyItems].sort(() => Math.random() - 0.5);
    }

    setPlayers(current => current.map(p => ({
      ...p,
      hasAnswered: false,
      isCorrect: null,
      activeAnswer: null,
      orderState: nextOrderState
    })));

    startSyncTimer();
  };

  // --- RESET GAME FLOW ---
  const handleResetGame = () => {
    audioHelper.playClick();
    setGameState('welcome');
    setSyncQuestionIndex(0);
    setPlayers([]);
    setPlayerConfetti({});
  };

  // Play direct synthesiser voices
  const playVoiceQuizSound = (soundType?: 'cow' | 'goat' | 'camel', questionId?: string) => {
    if (!soundType) return;
    
    // Animate play icon indicator
    if (questionId) setSoundActiveId(questionId);
    setTimeout(() => setSoundActiveId(null), 1200);

    if (soundType === 'cow') {
      audioHelper.playCowSound();
    } else if (soundType === 'goat') {
      audioHelper.playGoatSound();
    } else if (soundType === 'camel') {
      audioHelper.playCamelSound();
    }
  };

  return (
    <div className={`min-h-screen bg-[#F0F9FF] text-slate-850 flex flex-col font-sans select-none overflow-x-hidden ${isFullscreen ? 'p-0' : ''}`}>
      {/* --- CONFETTI PARTICLE CANVAS OVERLAY --- */}
      {(Object.values(playerConfetti) as ConfettiParticle[][]).flat().map((p) => (
        <div
          key={p.id}
          className="fixed pointer-events-none z-50 transition-transform duration-75"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `rotate(${p.rotation}deg)`,
            borderRadius: p.shape === 'circle' ? '50%' : p.shape === 'triangle' ? '0' : '2px',
            clipPath: p.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
          }}
        />
      ))}

      {/* --- MASTER HEADER CONTROL BAR --- */}
      <header className="bg-white border-b-8 border-slate-200 px-4 md:px-6 py-4 flex flex-col lg:flex-row items-center justify-between shadow-xl z-40 rounded-[32px] m-4 md:m-6 mb-2">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl border-b-4 border-emerald-700 shrink-0 shadow-md">
            🌙
          </div>
          <div>
            <h1 className="text-xl md:text-3xl font-black text-emerald-800 tracking-tight leading-tight uppercase font-sans">
              PETUALANGAN KUIS KURBAN CERIA
            </h1>
            <p className="text-emerald-600 font-bold uppercase tracking-widest text-[9px] md:text-xs">
              Edisi Spesial Idul Adha • Smartboard IFP Version
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-2.5 mt-4 lg:mt-0">
          {/* Back to Home Screen (Halaman Utama) button */}
          {gameState !== 'welcome' && (
            <button
              onClick={handleResetGame}
              className="px-4 py-2.5 bg-rose-500 hover:bg-rose-400 text-white border-b-4 border-rose-700 rounded-full text-xs font-black transition flex items-center gap-1.5 shadow-md active:scale-95 duration-150"
              title="Kembali ke Halaman Utama"
            >
              <Home className="w-3.5 h-3.5 text-white" />
              <span>HALAMAN UTAMA</span>
            </button>
          )}

          {/* Sounds Mute toggle */}
          <button 
            onClick={() => { audioHelper.playClick(); setSoundOn(!soundOn); }}
            className={`px-4 py-2.5 rounded-full border-2 transition font-black text-xs flex items-center gap-1.5 duration-150 ${
              soundOn 
                ? 'bg-emerald-600 border-b-4 border-emerald-800 text-white hover:bg-emerald-500 hover:scale-98 active:scale-95' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
            title="Efek Suara"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4" />}
            <span>EFEK SUARA: {soundOn ? "AKTIF" : "MATI"}</span>
          </button>
          
          {/* Music on/off toggle */}
          <button 
            onClick={() => { audioHelper.playClick(); setMusicOn(!musicOn); }}
            className={`px-4 py-2.5 rounded-full border-2 text-xs font-black transition flex items-center gap-1.5 duration-150 ${
              musicOn 
                ? 'bg-emerald-600 border-b-4 border-emerald-800 text-white hover:bg-emerald-500 hover:scale-98 active:scale-95' 
                : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
            title="Musik Latar Islami"
          >
            {musicOn ? <Pause className="w-3.5 h-3.5 text-white animate-spin-slow" /> : <Play className="w-3.5 h-3.5" />}
            <span>MUSIK: {musicOn ? "NYALA" : "MATI"}</span>
          </button>

          {/* Offline local instructions button for Teachers */}
          <button
            onClick={() => { audioHelper.playClick(); setShowOfflineGuide(true); }}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white border-b-4 border-indigo-805 rounded-full text-xs font-black transition flex items-center gap-1.5 shadow-md active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>BUKU GURU / OFFLINE</span>
          </button>

          {/* Fullscreen toggle */}
          <button 
            onClick={toggleFullscreen}
            className="p-2.5 rounded-full border-2 border-slate-200 hover:bg-slate-50 bg-white text-slate-600 transition"
            title="Layar Penuh Smartboard"
          >
            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* --- MAIN DISPLAY PANEL ROUTER --- */}
      <main className="flex-1 flex flex-col relative bg-[#F0F9FF] p-4 md:p-6 pt-2">
        
        {/* ================= WELCOME WINDOW ================= */}
        {gameState === 'welcome' && (
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="bg-white rounded-[40px] border-b-8 border-slate-200 shadow-2xl p-8 md:p-12 text-center max-w-4xl w-full flex flex-col items-center gap-6">
              
              {/* Animated Floating Islamic Mosque/Stars Accent */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="scale-100 hover:scale-105 transition-transform duration-350">
                  <IllustrationSVG type="masjid" size={160} />
                </div>
                {/* Sheep Mascot Float bubble */}
                <div className="absolute -bottom-2 -left-4 w-20 h-20 bg-white p-1 rounded-3xl shadow-xl border-4 border-emerald-400 rotate-12 flex items-center justify-center overflow-hidden animate-bounce">
                  <IllustrationSVG type="goat" size={70} />
                </div>
              </div>

              {/* Title Typography */}
              <div className="space-y-4">
                <span className="bg-emerald-50 text-emerald-800 border-2 border-emerald-200 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest inline-block shadow-sm">
                  🎉 Edisi Spesial Idul Adha &amp; Kurban
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 leading-tight">
                  PETUALANGAN <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-800 to-teal-700">
                    KUIS KURBAN CERIA
                  </span>
                </h2>
                <p className="text-slate-600 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Wahai putra-putri sholih, ayo uji pengetahuanmu seputar ibadah Kurban! Game kuis edukatif seru ini didesain khusus untuk dimainkan bersama kawan-kawan dalam satu layar sentuh pintar sekolah.
                </p>
              </div>

              {/* Enter Button */}
              <button
                onClick={handleStartGameSetup}
                id="btn-play-now"
                className="group relative px-12 py-5 bg-emerald-500 text-white font-sans text-xl font-black rounded-3xl border-b-8 border-emerald-700 shadow-xl hover:bg-emerald-400 active:scale-95 transition-all duration-150 overflow-hidden"
              >
                MULAI PETUALANGAN SERU 🚀
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
                <span className="flex flex-col items-center justify-center gap-1 bg-green-50/85 border-2 border-green-200 text-green-800 px-4 py-4 rounded-3xl shadow-sm hover:scale-[1.02] transition duration-200">
                  <span className="text-2xl">⚡</span>
                  <span className="font-black text-sm tracking-wide">60 SOAL LEVEL 1-6</span>
                  <span className="text-[10px] text-green-600 font-bold uppercase">Tingkat Sekolah Dasar</span>
                </span>
                <span className="flex flex-col items-center justify-center gap-1 bg-blue-50/85 border-2 border-blue-200 text-blue-800 px-4 py-4 rounded-3xl shadow-sm hover:scale-[1.02] transition duration-200">
                  <span className="text-2xl">👥</span>
                  <span className="font-black text-sm tracking-wide">2-4 SPLIT-SCREEN</span>
                  <span className="text-[10px] text-blue-600 font-bold uppercase">Balapan / Mandiri</span>
                </span>
                <span className="flex flex-col items-center justify-center gap-1 bg-purple-50/85 border-2 border-purple-200 text-purple-800 px-4 py-4 rounded-3xl shadow-sm hover:scale-[1.02] transition duration-200">
                  <span className="text-2xl">📱</span>
                  <span className="font-black text-sm tracking-wide">SMARTBOARD IFP</span>
                  <span className="text-[10px] text-purple-600 font-bold uppercase">Multi-touch Ready</span>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ================= CONFIGURATION / SETUP WINDOW ================= */}
        {gameState === 'setup-players' && (
          <div className="flex-1 flex flex-col items-center justify-center p-2">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Side: Level Selection (8 Columns) */}
              <div className="lg:col-span-8 bg-white border-b-8 border-slate-200 rounded-[32px] p-6 md:p-8 shadow-2xl flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-850 flex items-center gap-2">
                        <span className="text-3xl">🏆</span> PILIH KELAS &amp; LEVEL
                      </h3>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
                        Sesuaikan tingkat kesulitan kuis edukatif kurban
                      </p>
                    </div>
                    <span className="bg-[#F0F9FF] border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider self-start sm:self-auto">
                      60 Soal Tersedia
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {levelThemes.map((themeObj) => {
                      const lvl = themeObj.lvl;
                      const isActive = selectedLevel === lvl;
                      return (
                        <button
                          key={lvl}
                          onClick={() => { audioHelper.playClick(); setSelectedLevel(lvl); }}
                          className={`rounded-[28px] p-4 md:p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 border-4 shadow-sm relative ${
                            isActive 
                              ? `${themeObj.borderActive} shadow-md`
                              : `${themeObj.bg} ${themeObj.border} opacity-85 hover:opacity-100`
                          }`}
                        >
                          {isActive && (
                            <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${themeObj.activeBadge} animate-pulse border-2 border-white`} />
                          )}
                          <div className="text-4xl mb-1.5">{themeObj.icon}</div>
                          <h4 className={`font-black text-lg ${themeObj.text}`}>LEVEL {lvl}</h4>
                          <p className="text-[10px] font-black text-slate-550 uppercase">Kelas {lvl} SD</p>
                          <div className={`mt-2.5 text-[9px] px-3 py-0.5 rounded-full font-black text-white ${
                            lvl === 1 ? 'bg-green-500' : lvl === 2 ? 'bg-blue-400' : lvl === 3 ? 'bg-amber-500' : lvl === 4 ? 'bg-orange-500' : lvl === 5 ? 'bg-purple-500' : 'bg-rose-500'
                          }`}>
                            {lvl === 1 || lvl === 2 ? 'SANGAT MUDAH' : lvl === 3 || lvl === 4 ? 'SEDANG' : 'MAHIR'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-medium leading-relaxed italic flex items-center gap-1.5">
                  💡 <strong>Info Level:</strong> Semakin tinggi tingkatan kelas, pertanyaan akan didominasi fiqih kurban &amp; kisah para Nabi, serta waktu timer tanding yang lebih menantang!
                </div>
              </div>

              {/* Right Side Cards Setup (4 Columns) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Upper: Players Count Box */}
                <div className="bg-emerald-600 rounded-[32px] p-6 text-white border-b-8 border-emerald-800 shadow-2xl flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-lg font-black mb-4 flex items-center gap-2 tracking-wide uppercase">
                      <span>👥</span> PILIH MODE PEMAIN
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {/* Mandiri */}
                      <button
                        onClick={() => { audioHelper.playClick(); setGameMode('single'); }}
                        className={`p-3 rounded-2xl flex flex-col items-center justify-center transition border-2 text-center relative ${
                          gameMode === 'single'
                            ? 'bg-white border-white text-emerald-900 shadow-md scale-95 font-black'
                            : 'bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold'
                        }`}
                      >
                        <span className="text-xl">🤵</span>
                        <span className="text-[10px] mt-1 font-extrabold uppercase">SOLO / MANDIRI</span>
                      </button>

                      {/* Bersama */}
                      <button
                        onClick={() => { audioHelper.playClick(); setGameMode('multi'); }}
                        className={`p-3 rounded-2xl flex flex-col items-center justify-center transition border-2 text-center relative ${
                          gameMode === 'multi'
                            ? 'bg-white border-white text-emerald-900 shadow-md scale-95 font-black'
                            : 'bg-white/10 border-white/20 hover:bg-white/20 text-white font-bold'
                        }`}
                      >
                        <span className="text-xl">👥</span>
                        <span className="text-[10px] mt-1 font-extrabold uppercase">BERSAMA-SAMA</span>
                      </button>
                    </div>

                    {/* Conditional multiplayer choice */}
                    {gameMode === 'multi' && (
                      <div className="pt-2 border-t border-white/10 animate-fade-in">
                        <p className="text-[10px] font-black text-emerald-100 uppercase tracking-wider mb-2">Tentukan Jumlah Anak (Split-Screen):</p>
                        <div className="grid grid-cols-3 gap-2">
                          {[2, 3, 4].map(num => (
                            <button
                              key={num}
                              onClick={() => { audioHelper.playClick(); setPlayerCount(num); }}
                              className={`py-2 rounded-xl border font-black transition text-xs text-center ${
                                playerCount === num
                                  ? 'bg-white text-emerald-900 border-white shadow'
                                  : 'bg-white/10 border-white/20 text-emerald-100 hover:bg-white/20'
                              }`}
                            >
                              {num} ANAK
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 text-[10px] text-emerald-100 font-bold border-t border-white/15 pt-2 leading-snug">
                    🕋 <strong>Kerjasama:</strong> Mendidik adab bersanding lapang dada &amp; ikhlas berbagi!
                  </div>
                </div>

                {/* Lower Side Card: Multi-touch style info layout */}
                {gameMode === 'multi' ? (
                  <div className="bg-white rounded-[32px] p-6 border-b-8 border-slate-200 text-slate-800 shadow-2xl flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-black text-slate-800 flex items-center gap-1.5 uppercase mb-3">
                        <Sparkles className="w-4 h-4 text-amber-500" /> CARA BERMAIN SPLIT
                      </h3>
                      <div className="flex flex-col gap-2.5">
                        <button
                          onClick={() => { audioHelper.playClick(); setSyncMode('independent'); }}
                          className={`p-3 rounded-2xl border-2 transition text-left flex flex-col gap-0.5 duration-150 ${
                            syncMode === 'independent'
                              ? 'bg-amber-50 border-amber-400 text-amber-955 scale-98 font-blackshadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500 font-medium'
                          }`}
                        >
                          <span className="font-extrabold text-xs flex items-center gap-1">💡 Mandiri <span className="text-[9px] bg-amber-200 text-amber-900 px-2 py-0.2 rounded-full font-black">PACE NYAMAN</span></span>
                          <span className="text-[10px] text-slate-500 leading-normal">Setiap anak menjawab petualangan kuis kecepatan sendiri, tanpa tersandera teman.</span>
                        </button>

                        <button
                          onClick={() => { audioHelper.playClick(); setSyncMode('synchronized'); }}
                          className={`p-3 rounded-2xl border-2 transition text-left flex flex-col gap-0.5 duration-150 ${
                            syncMode === 'synchronized'
                              ? 'bg-amber-50 border-amber-400 text-amber-955 scale-98 font-blackshadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500 font-medium'
                          }`}
                        >
                          <span className="font-extrabold text-xs flex items-center gap-1">🏁 Balapan Seru <span className="text-[9px] bg-red-200 text-red-900 px-2 py-0.2 rounded-full font-black">ADU CEPAT</span></span>
                          <span className="text-[10px] text-slate-500 leading-normal">Soal yang sama diperebutkan serentak. Siapa tercepat mendapat poin bonus!</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[32px] p-6 border-b-8 border-slate-200 text-slate-800 shadow-2xl flex flex-col justify-between min-h-[160px]">
                    <div>
                      <h3 className="text-sm font-black text-slate-800 flex items-center gap-1.5 uppercase mb-3">
                        <span>🌟</span> PRESTASI KELAS
                      </h3>
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2.5 bg-green-50 p-2.5 rounded-2xl border border-green-150">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-black italic shadow text-xs">A</div>
                          <div>
                            <p className="text-xs font-black text-slate-800">Abu Bakar Cilik</p>
                            <p className="text-[9px] font-bold text-slate-500">Level 1 • 980 Poin</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5 bg-blue-50 p-2.5 rounded-2xl border border-blue-150">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-black italic shadow text-xs">B</div>
                          <div>
                            <p className="text-xs font-black text-slate-800">Bilal Sholih</p>
                            <p className="text-[9px] font-bold text-slate-500">Level 2 • 890 Poin</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

            {/* Bottom Action bar */}
            <div className="w-full max-w-6xl mt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
              <button
                onClick={() => { audioHelper.playClick(); setGameState('welcome'); }}
                className="md:col-span-3 px-6 py-4 bg-white hover:bg-slate-50 text-slate-650 font-black rounded-[24px] border-b-4 border-slate-300 shadow-md transition duration-150 active:scale-95"
              >
                KEMBALI
              </button>
              
              <button
                onClick={handleStartIntroStory}
                className="md:col-span-9 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xl font-black rounded-[24px] border-b-8 border-emerald-700 shadow-xl hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                SIAPKAN KUIS! DI MULAI SEKARANG ⭐
              </button>
            </div>

          </div>
        )}

        {/* ================= INTROSTORY WINDOW (Kisah Nabi Ibrahim & Ismail) ================= */}
        {gameState === 'intro-story' && (
          <div className="flex-1 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white rounded-[40px] border-b-8 border-slate-200 p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-56 h-56 shrink-0 relative bg-emerald-50 rounded-3xl border-4 border-slate-100 overflow-hidden shadow-inner flex items-center justify-center">
                  <IllustrationSVG type="ibrahim_ismail" />
                </div>

                <div className="space-y-4">
                  <span className="bg-emerald-50 text-emerald-800 border-2 border-emerald-200 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest inline-block shadow-sm">
                    Kisah Suri Teladan Kurban 📖
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-850 leading-tight">
                    Ketaatan Nabi Ibrahim &amp; Nabi Ismail a.s.
                  </h3>
                  <div className="space-y-3 text-slate-600 text-sm leading-relaxed font-semibold">
                    <p>
                      Ibadah Kurban bermula dari peristiwa luar biasa di mana Nabi Ibrahim a.s. mendapat wahyu perintah dari Allah SWT untuk mengurbankan putra tercintanya, Nabi Ismail a.s. 
                    </p>
                    <p>
                      Atas keikhlasan tingkat tinggi keduanya demi memenuhi titah Allah, Allah memuji keridhaan mereka dan menggantikan seketika Nabi Ismail dengan seekor Domba (Kibas) gemuk sehat dari surga. Peristiwa mulia ini diabadikan umat Islam sedunia setiap perayaan Idul Adha!
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>💡</span> <span>Tips Guru:</span> Tekan tombol di samping kanan untuk masuk ke game.
                </div>
                <button
                  onClick={handleBypassIntro}
                  className="px-10 py-4.5 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg rounded-[24px] border-b-8 border-emerald-700 shadow-xl active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  MULAI MENJAWAB SOAL KUIS 🎯
                </button>
              </div>

            </div>
          </div>
        )}
        {gameState === 'playing' && (
          <div className="flex-1 flex flex-col bg-[#F0F9FF] overflow-hidden">
            
            {/* 1. LAYOUT CONTROLLER IN MULTIPLAYER SYNCHRONIZED RACE */}
            {gameMode === 'multi' && syncMode === 'synchronized' ? (
              
              /* SYNC RIVALRY MODE: SHARED TOP BAR AND GRID PANELS OF ROTATED/SPLIT STATIONS */
              <div className="flex-1 flex flex-col h-full bg-[#E0F2FE] border-4 border-slate-200 rounded-[32px] overflow-hidden">
                
                {/* Sync Mode HUD */}
                <div className="bg-white border-b-4 border-slate-200 px-6 py-3.5 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-100 text-amber-900 border-2 border-amber-300 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                      BALAPAN SYNC RIVAL
                    </span>
                    <span className="font-black text-sm text-slate-850">
                      Soal {syncQuestionIndex + 1} dari {syncQuestionList.length}
                    </span>
                  </div>

                  {/* Timer Circular Widget */}
                  <div className="flex items-center gap-2">
                    <div className={`px-4 py-2 bg-slate-50 border-2 border-slate-200 rounded-full font-mono text-sm font-black flex items-center gap-1.5 ${
                      syncTimer <= 5 ? 'bg-rose-50 border-rose-305 text-rose-950 animate-pulse' : 'text-slate-800'
                    }`}>
                      <Clock className="w-4 h-4 text-rose-500 animate-spin-slow" />
                      WAKTU: <span className="text-base">{syncTimer} DETIK</span>
                    </div>

                    {/* Advancer Button if question resolved for everyone */}
                    {showSyncExplanation && (
                      <button
                        onClick={handleSyncNextQuestion}
                        className="px-6 py-3 bg-emerald-555 hover:bg-emerald-500 border-b-4 border-emerald-700 text-white text-xs font-black rounded-full shadow-md animate-bounce"
                      >
                        {syncQuestionIndex + 1 === syncQuestionList.length ? 'SELESAI & LIHAT JUARA TROPHY ➡️' : 'LANJUT SOAL BERIKUTNYA ➡️'}
                      </button>
                    )}
                  </div>
                </div>

                {/* Grid Split screen generator */}
                <div className={`flex-1 grid gap-2.5 p-2.5 ${
                  playerCount === 2 ? 'grid-cols-2 h-full' :
                  playerCount === 3 ? 'grid-cols-3 h-full' :
                  'grid-cols-2 grid-rows-2 h-full'
                }`}>
                  {players.map((p) => {
                    // Shared Question Detail
                    const question = syncQuestionList[syncQuestionIndex];
                    if (!question) return null;

                    return (
                      <div 
                        key={p.id}
                        className={`rounded-2xl border-3 ${p.color} p-4 flex flex-col gap-3 overflow-y-auto relative transition shadow-lg`}
                      >
                        {/* Player segment header */}
                        <div className="flex items-center justify-between border-b border-slate-700/25 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">{PLAYER_AVATARS[p.id - 1]}</span>
                            <span className="font-extrabold text-slate-850 text-sm tracking-tight">{p.name}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-extrabold bg-slate-900/10 px-2 py-0.5 rounded text-slate-800">
                              🏆 {p.score} PT
                            </span>
                            <div className="flex text-amber-500">
                              {Array.from({ length: Math.min(3, p.stars) }).map((_, sIdx) => (
                                <Star key={sIdx} className="w-3.5 h-3.5 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Answering Panel Viewports */}
                        <div className="flex-1 flex flex-col gap-3.5">
                          {p.hasAnswered ? (
                            // Answer Locked state
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-3">
                              {p.isCorrect ? (
                                <div className="space-y-1 bg-emerald-100 p-4 rounded-xl border border-emerald-300">
                                  <h4 className="text-lg font-black text-emerald-800 flex items-center justify-center gap-1">
                                    <Check className="w-5 h-5 stroke-[3]" /> JAWABAN BENAR!
                                  </h4>
                                  <p className="text-xs text-emerald-900">
                                    Pintar sekali! Poin berhasil dikunci. Menanti jawaban teman-teman...
                                  </p>
                                </div>
                              ) : (
                                <div className="space-y-1 bg-rose-100 p-4 rounded-xl border border-rose-300">
                                  <h4 className="text-lg font-black text-rose-800 flex items-center justify-center gap-1">
                                    <X className="w-5 h-5 stroke-[3]" /> KURANG TEPAT
                                  </h4>
                                  <p className="text-xs text-rose-900">
                                    Jangan putus asa, coba pelajari penjelasannya nanti ya!
                                  </p>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Input buttons
                            <div className="flex-1 flex flex-col gap-2 justify-center">
                              {/* Display question text in compact scale for splits */}
                              <div className="text-xs lg:text-sm font-black text-slate-900 leading-tight bg-white/40 p-2.5 rounded-xl">
                                {question.questionText}
                              </div>

                              {/* Question Components router inside sync splits */}
                              <QuestionComponentLayout 
                                player={p} 
                                question={question} 
                                onSelectAnswer={(ans) => handleAnswerInput(p.id, ans)}
                                onShiftItem={(dir, idx) => handleShiftStoryItem(p.id, dir, idx)}
                                onConfirmOrder={() => handleConfirmStoryOrder(p.id)}
                                onPlaySound={(sound, id) => playVoiceQuizSound(sound, id)}
                                soundActiveId={soundActiveId}
                                isCompact={true}
                              />
                            </div>
                          )}
                        </div>

                        {/* Real-time answers overlay highlight overlay */}
                        {showSyncExplanation && (
                          <div className="absolute inset-0 bg-slate-950/95 p-4 rounded-2xl flex flex-col justify-between text-slate-100 animate-fade-in z-20 overflow-y-auto">
                            <div className="space-y-2">
                              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 font-mono">
                                Penjelasan Edukasi Kurban 🎓
                              </span>
                              <p className="text-xs leading-relaxed text-slate-300 bg-slate-900 p-2.5 rounded border border-slate-800">
                                {question.explanation || "Semua hewan kurban harus sehat, lincah, gemuk, cukup umur, dan tidak cacat demi ketaatan kita kepada syariat."}
                              </p>
                            </div>
                            <div className="text-[10px] text-teal-300 font-bold border-t border-slate-800 pt-2 text-center">
                              Klik tombol "Lanjut Soal" di atas panel layar untuk main lagi!
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

            ) : (

              /* SELFPACED PLAY MODE: EACH INDEPENDENT SEGMENT RUNS SEPARATELY FOR EACH SPLIT (SANDBOXED) */
              <div className={`flex-1 grid gap-2.5 p-2.5 ${
                gameMode === 'single' ? 'grid-cols-1 h-full' :
                playerCount === 2 ? 'grid-cols-2 h-full' :
                playerCount === 3 ? 'grid-cols-3 h-full' :
                'grid-cols-2 grid-rows-2 h-full'
              }`}>
                {players.map((p) => {
                  // If player finished all, show player specific completed card
                  const isPlayerFinished = p.currentQuestionIndex >= syncQuestionList.length;
                  const question = !isPlayerFinished ? syncQuestionList[p.currentQuestionIndex] : null;

                  return (
                    <div 
                      key={p.id}
                      className={`rounded-3xl border-4 ${p.color} p-4 md:p-6 flex flex-col gap-4 overflow-y-auto relative transition shadow-xl`}
                    >
                      {/* Independent Panel HUD Header */}
                      <div className="flex items-center justify-between border-b-2 border-slate-750/30 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{PLAYER_AVATARS[p.id - 1]}</span>
                          <div>
                            <span className="font-extrabold text-slate-900 text-sm md:text-base leading-tight tracking-tight block">
                              {p.name}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 block">
                              Proses: {Math.min(10, p.currentQuestionIndex + 1)} / {syncQuestionList.length}
                            </span>
                          </div>
                        </div>

                        {/* Player status items */}
                        <div className="flex items-center gap-2.5">
                          {p.streak >= 2 && (
                            <span className="flex items-center gap-0.5 bg-rose-500 text-white font-mono text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">
                              <Flame className="w-3 h-3 fill-current text-white animate-pulse" />
                              STREAK {p.streak}!
                            </span>
                          )}

                          <span className="font-mono text-xs font-black bg-slate-900/10 px-2.5 py-1 rounded-lg text-slate-800">
                            🏆 {p.score} PT
                          </span>
                          
                          <div className="flex text-amber-500 bg-slate-900/5 p-1 rounded">
                            {Array.from({ length: 5 }).map((_, sIdx) => (
                              <Star 
                                key={sIdx} 
                                className={`w-4 h-4 ${sIdx < p.stars ? 'fill-current text-amber-500' : 'text-slate-350 opacity-40'}`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* INDEPENDENT WORKSTATION BODY PANEL */}
                      {isPlayerFinished ? (
                        
                        /* Player Completed sandbox card */
                        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-4 animate-fade-in">
                          <div className="w-24 h-24 bg-white/70 p-3 rounded-full border-4 border-amber-400 shadow-inner flex items-center justify-center">
                            <IllustrationSVG type="masjid" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-xl font-black text-slate-850">
                              ALHAMDULILLAH, FINISH! 🎉
                            </h4>
                            <p className="text-xs text-slate-700 max-w-sm mx-auto leading-relaxed">
                              Kamu sudah menyelesaikan 10 petualangan kuis kurban ceria secara luar biasa! Skor akhirmu adalah <span className="font-bold text-slate-900 text-sm">{p.score} poin</span> dengan bintang pencapaian penuh.
                            </p>
                          </div>
                          <div className="bg-white/40 border border-white/60 p-2.5 rounded-xl text-[10px] text-slate-600 font-mono">
                            Menunggu teman-teman yang lain menyelesaikan kuis mereka...
                          </div>
                        </div>

                      ) : question ? (

                        /* Interactive questions sandbox */
                        <div className="flex-1 flex flex-col gap-4">
                          
                          {/* Rich visual illustration area */}
                          {question.illustration && !p.hasAnswered && (
                            <div className="w-full max-h-36 overflow-hidden relative">
                              <IllustrationSVG type={question.illustration} size="100%" className="scale-85" />
                            </div>
                          )}

                          {/* Question Text with customized banner sizing */}
                          <div className="text-slate-900 leading-snug bg-white/30 p-4 rounded-2xl border border-white/40">
                            <div className="font-bold text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">
                              Tantangan #{p.currentQuestionIndex + 1}:
                            </div>
                            <h4 className="text-sm md:text-base lg:text-lg font-black font-sans leading-tight">
                              {question.questionText}
                            </h4>
                          </div>

                          {/* Options Container Frame */}
                          <div className="flex-1 flex flex-col justify-center">
                            {p.hasAnswered ? (
                              
                              /* Feedbacks view inside selfpaced player sandboxes */
                              <div className="p-4 rounded-2xl animate-fade-in flex flex-col gap-3 h-full justify-between">
                                <div className={`p-4 rounded-xl border text-center ${
                                  p.isCorrect 
                                    ? 'bg-emerald-100 border-emerald-300 text-emerald-850' 
                                    : 'bg-rose-100 border-rose-300 text-rose-850'
                                }`}>
                                  <h5 className="font-extrabold text-base md:text-lg flex items-center justify-center gap-1.5">
                                    {p.isCorrect ? <Check className="w-5 h-5 stroke-[3] text-emerald-600" /> : <X className="w-5 h-5 stroke-[3] text-rose-600" />}
                                    {p.isCorrect ? 'Masha Allah, Jawabanmu Tepat! 🎉' : 'Aduh, Belum Tepat! 🤠'}
                                  </h5>
                                  <p className="text-xs mt-1 font-sans">
                                    {p.isCorrect ? `Kamu mendapat ${question.type === 'order' ? '15' : '10'} poin dasar + bonus streak.` : 'Tidak apa-apa, ayo pelajari materinya biar makin sholih.'}
                                  </p>
                                </div>

                                {/* Penjelasan Edukasi */ }
                                <div className="bg-white/60 rounded-xl p-3.5 border border-white/80 space-y-1">
                                  <span className="text-[10px] font-bold text-slate-500 font-mono uppercase tracking-wider block">
                                    Penjelasan Pelajaran Kurban:
                                  </span>
                                  <p className="text-xs leading-relaxed text-slate-700">
                                    {question.explanation || "Selalu pilih hewan kurban yang sehat dan ikhlas lillahi ta\'ala."}
                                  </p>
                                </div>

                                <button
                                  onClick={() => handleNextQuestion(p.id)}
                                  className="w-full py-3 bg-slate-900 border border-slate-700 text-white font-black text-sm rounded-xl hover:bg-slate-800 transition shadow"
                                >
                                  Lanjut Tantangan Berikutnya ➡️
                                </button>
                              </div>

                            ) : (
                              
                              /* Normal interactive option layouts */
                              <div className="animate-fade-in flex flex-col justify-center gap-2">
                                <QuestionComponentLayout 
                                  player={p} 
                                  question={question} 
                                  onSelectAnswer={(ans) => handleAnswerInput(p.id, ans)}
                                  onShiftItem={(dir, idx) => handleShiftStoryItem(p.id, dir, idx)}
                                  onConfirmOrder={() => handleConfirmStoryOrder(p.id)}
                                  onPlaySound={(sound, id) => playVoiceQuizSound(sound, id)}
                                  soundActiveId={soundActiveId}
                                  isCompact={false}
                                />
                              </div>
                            )}
                          </div>

                        </div>

                      ) : null}

                    </div>
                  );
                })}
              </div>

            )}

          </div>
        )}

        {/* ================= FINAL SCOREBOARD / CHAMPION DECLARATION WINDOW ================= */}
        {gameState === 'scoreboard' && (
          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-4xl bg-white rounded-[40px] border-b-8 border-slate-200 p-6 md:p-10 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="text-center space-y-3">
                <span className="bg-amber-100 text-amber-900 border-2 border-amber-300 font-mono text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest inline-block shadow-sm">
                  🏆 PANGGUNG JUARA KELAS
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-slate-850 tracking-tight leading-tight pt-1">
                  Kuis Kurban Ceria Selesai!
                </h3>
                <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                  Masha Allah, selamat kepada seluruh pejuang kuis cilik yang telah berupaya menjawab materi-materi mulia seputar Kurban!
                </p>
              </div>

              {/* Victory medal standings */}
              <div className="bg-[#F0F9FF] p-6 rounded-[32px] border-4 border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[...players].sort((a,b) => b.score - a.score).map((p, rankIdx) => (
                    <div 
                      key={p.id}
                      className={`rounded-2xl border-4 p-5 flex flex-col items-center justify-between text-center relative gap-3 bg-white transition duration-200 ${
                        rankIdx === 0 ? 'border-amber-400 shadow-md scale-102 bg-gradient-to-b from-amber-50 to-white' : 'border-slate-100'
                      }`}
                    >
                      {/* Trophy Rank badge */}
                      {rankIdx === 0 && (
                        <div className="absolute -top-3.5 bg-amber-500 text-white border-2 border-white px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-wider animate-bounce shadow">
                          🥇 JUARA 1
                        </div>
                      )}
                      {rankIdx === 1 && (
                        <div className="absolute -top-3.5 bg-slate-400 text-white border-2 border-white px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-wider shadow">
                          🥈 JUARA 2
                        </div>
                      )}
                      {rankIdx >= 2 && (
                        <div className="absolute -top-3.5 bg-sky-200 text-sky-850 border-2 border-white px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-wider shadow">
                          🎖️ PEJUANG
                        </div>
                      )}
                      
                      <div className="flex flex-col items-center gap-1.5 pt-1">
                        <span className="text-4xl">{PLAYER_AVATARS[p.id - 1]}</span>
                        <div>
                          <h5 className="font-extrabold text-sm text-slate-800 block">{p.name}</h5>
                          <span className="text-[10px] text-slate-400 block uppercase font-mono font-bold">Pemain {p.id}</span>
                        </div>
                      </div>

                      <div className="w-full bg-[#F0F9FF] p-3 rounded-2xl border-2 border-slate-100">
                        <span className="text-[10px] text-slate-500 font-extrabold tracking-wider block">TOTAL POIN</span>
                        <span className="text-2xl font-black text-emerald-700 block">{p.score} <span className="text-xs font-bold text-slate-400">PT</span></span>
                      </div>

                      <div className="flex text-amber-500 gap-0.5">
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <Star 
                            key={sIdx} 
                            className={`w-4 h-4 ${sIdx < p.stars ? 'fill-current text-amber-500' : 'text-slate-200'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action play again options footer */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={handleResetGame}
                  className="flex-1 py-4.5 bg-emerald-500 hover:bg-emerald-400 border-b-8 border-emerald-700 text-white text-lg font-black rounded-[24px] shadow-xl active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5 stroke-[2.5]" />
                  BERMAIN LAGI / GANTI KELAS 🔄
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* --- OFFLINE MANUAL AND WORKBOOK SIDE-TAB OVERLAY --- */}
      {showOfflineGuide && (
        <div className="fixed inset-0 bg-slate-950/90 flex items-center justify-center p-4 z-50 animate-fade-in font-sans">
          <div className="w-full max-w-3xl bg-slate-900 border-3 border-indigo-500 rounded-3xl p-6 md:p-8 shadow-2xl relative space-y-6 overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => { audioHelper.playClick(); setShowOfflineGuide(false); }}
              className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-300 rounded-full hover:bg-slate-700 transition"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>

            <div className="space-y-1.5 text-center sm:text-left border-b border-slate-850 pb-4">
              <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/25 text-[10px] font-bold px-2 py-0.5 rounded font-mono uppercase">
                Buku Pegangan Guru &amp; File Offline
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                Cara Menjalankan Game Kuis Kurban Ceria Tanpa Internet di Kelas
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aplikasi ini dirancang untuk dapat dipindahkan sepenuhnya ke media penyimpanan eksternal (Flashdisk USB) demi menyiasati keterbatasan sinyal wifi sekolah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850 space-y-3">
                <h4 className="text-sm font-bold text-indigo-400 flex items-center gap-1.5">
                  📁 Struktur File Offline yang Tersedia:
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  Kami menyediakan bundel file HTML5 murni yang siap disalin oleh Bapak/Ibu Guru ke media rekam lain. Cari direktori <code className="bg-indigo-950 px-1 py-0.5 rounded text-indigo-300 text-[11px] font-mono">/public/offline/</code> di folder project ini:
                </p>
                <ul className="text-xs space-y-1 text-slate-400 list-disc list-inside">
                  <li><code className="bg-slate-900 px-1 py-0.2 rounded text-[11px]">index.html</code> (Main UI Page)</li>
                  <li><code className="bg-slate-900 px-1 py-0.2 rounded text-[11px]">style.css</code> (Global Style sheet)</li>
                  <li><code className="bg-slate-900 px-1 py-0.2 rounded text-[11px]">script.js</code> (Interactive Game Core)</li>
                </ul>
                <p className="text-[10px] leading-relaxed text-slate-500 italic">
                  *Semua audio disintesis otomatis secara internal oleh kartu suara browser (Web Audio API). Tidak perlu file suara MP3 eksternal!
                </p>
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850 space-y-3">
                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  🏫 Cara Memutar di IFP Smartboard:
                </h4>
                <p className="text-xs leading-relaxed text-slate-300">
                  Ikuti langkah mudah berikut agar game berjalan lancar di layar sentuh pintar sekolah:
                </p>
                <ol className="text-xs space-y-1.5 text-slate-400 list-decimal list-inside leading-loose">
                  <li>Salin file <code className="bg-[rgba(0,0,0,0.2)] text-[10px] px-1 font-mono rounded">index.html</code>, <code className="bg-[rgba(0,0,0,0.2)] text-[10px] px-1 font-mono rounded">style.css</code>, dan <code className="bg-[rgba(0,0,0,0.2)] text-[10px] px-1 font-mono rounded">script.js</code> ke dalam satu flashdisk.</li>
                  <li>Colokkan flashdisk ke port USB IFP Smartboard komputer sekolah Bapak/Ibu.</li>
                  <li>Buka file explorer komputer, cari file <code className="bg-slate-900 text-slate-300 font-mono text-[10px] px-1 rounded">index.html</code>, klik kanan, lalu pilih <strong className="text-slate-300">Open With Google Chrome</strong> atau browser modern lainnya.</li>
                  <li>Tekan tombol pojok kanan atas aplikasi untuk mengaktifkan tampilan <strong className="text-emerald-400">Layar Penuh (Full Screen)</strong> agar anak-anak bermain tanpa distraksi.</li>
                </ol>
              </div>

            </div>

            <div className="border-t border-slate-800/80 pt-4 flex justify-end">
              <button
                onClick={() => { audioHelper.playClick(); setShowOfflineGuide(false); }}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition"
              >
                Paham dan Tutup Panduan
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// --- SUBORDINATE RENDERING COMPONENT FUNCTION ---
interface QuestionComponentLayoutProps {
  player: PlayerState;
  question: Question;
  onSelectAnswer: (answer: string | number) => void;
  onShiftItem: (direction: 'up' | 'down', index: number) => void;
  onConfirmOrder: () => void;
  onPlaySound: (soundType?: 'cow' | 'goat' | 'camel', questionId?: string) => void;
  soundActiveId: string | null;
  isCompact?: boolean;
}

const QuestionComponentLayout: React.FC<QuestionComponentLayoutProps> = ({
  player,
  question,
  onSelectAnswer,
  onShiftItem,
  onConfirmOrder,
  onPlaySound,
  soundActiveId,
  isCompact = false
}) => {
  const accent = player.accentColor;

  switch (question.type) {
    
    // 1. MULTIPLE CHOICE OR CHOOSE ANIMAL ILLUSTRATION PIX
    case 'choice':
    case 'guess-image':
      return (
        <div className="grid grid-cols-1 gap-2">
          {question.options?.map((opt, oIdx) => (
            <button
              key={oIdx}
              onClick={() => onSelectAnswer(oIdx)}
              className={`w-full py-3.5 px-4 rounded-2xl font-bold font-sans text-left border-3 transition flex items-center justify-between text-slate-800 bg-white hover:bg-slate-100 ${
                isCompact ? 'text-[11px] py-2 px-3 rounded-xl border-2' : 'text-sm'
              }`}
              style={{ borderColor: `var(--color-${accent}-300)` }}
            >
              <span>{opt}</span>
              <span className="w-5 h-5 shrink-0 ml-2 rounded-full border-2 border-slate-300 text-slate-300 flex items-center justify-center font-mono text-[9px] font-black">
                {String.fromCharCode(65 + oIdx)}
              </span>
            </button>
          ))}
        </div>
      );

    // 2. TRUE OR FALSE QUESTION PATTERN
    case 'boolean':
      return (
        <div className="grid grid-cols-2 gap-3.5">
          {question.options?.map((opt, oIdx) => (
            <button
              key={oIdx}
              onClick={() => onSelectAnswer(oIdx)}
              className={`py-8 rounded-3xl font-black font-sans border-4 flex flex-col items-center justify-center gap-2.5 transition active:scale-95 ${
                isCompact ? 'py-4 rounded-xl border-2 gap-1 text-xs' : 'text-lg'
              } ${
                oIdx === 0 
                  ? 'bg-emerald-500 hover:bg-emerald-400 border-emerald-300 text-white shadow-emerald-700/10' 
                  : 'bg-rose-500 hover:bg-rose-450 border-rose-300 text-white shadow-rose-700/10'
              }`}
            >
              {oIdx === 0 ? <Check className="w-8 h-8" strokeWidth={3} /> : <X className="w-8 h-8" strokeWidth={3} />}
              <span>{opt.toUpperCase()}</span>
            </button>
          ))}
        </div>
      );

    // 3. VOICE IDENTIFICATION SYNTHESIZER
    case 'voice':
      return (
        <div className="space-y-3">
          {/* Audio trigger button card */}
          <button
            onClick={() => onPlaySound(question.soundType, question.id)}
            className={`w-full py-5 rounded-2xl text-center bg-slate-900 border border-slate-750/30 flex items-center justify-center gap-3 active:scale-98 transition ${
              soundActiveId === question.id ? 'animate-bounce text-emerald-400 border-emerald-500' : 'text-slate-300'
            }`}
          >
            <Volume2 className={`w-6 h-6 ${soundActiveId === question.id ? 'animate-ping' : ''}`} />
            <span className="font-extrabold text-sm tracking-tight font-sans">PUTAR SUARA HEWAN 🔊</span>
          </button>

          {/* Multiple choice guessing block for voice */}
          <div className="grid grid-cols-1 gap-2">
            {question.options?.map((opt, oIdx) => (
              <button
                key={oIdx}
                onClick={() => onSelectAnswer(oIdx)}
                className={`w-full py-3 px-4 rounded-xl font-bold font-sans text-left border-2 text-slate-850 bg-white hover:bg-slate-100 transition ${
                  isCompact ? 'text-[11px] py-1.5 px-3 mb-0' : 'text-xs'
                }`}
                style={{ borderColor: `var(--color-${accent}-300)` }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );

    // 4. SEQUENCING OR STORY REORDERING PUZZLE
    case 'order':
      const playerOrderList = player.orderState || [];
      return (
        <div className="space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-500 font-mono block">
            Sesuaikan Urutan Cerita (Gunakan Tombol Panah):
          </span>

          <div className="space-y-2">
            {playerOrderList.map((itemValue, iIdx) => (
              <div 
                key={iIdx}
                className={`flex items-center justify-between p-2 rounded-xl bg-white/70 border text-slate-800 ${
                  isCompact ? 'p-1.5 rounded-lg text-[10px]' : 'text-xs'
                }`}
                style={{ borderColor: `var(--color-${accent}-200)` }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-slate-900/10 text-slate-800 flex items-center justify-center font-mono font-extrabold text-[10px]">
                    {iIdx + 1}
                  </span>
                  <span className="font-medium truncate max-w-xs">{itemValue}</span>
                </div>

                {/* Hand control arrow elements */}
                <div className="flex items-center gap-1">
                  <button
                    disabled={iIdx === 0}
                    onClick={() => onShiftItem('up', iIdx)}
                    className="p-1 px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg disabled:opacity-30 disabled:pointer-events-none border border-slate-300"
                  >
                    <ArrowUp className="w-3.5 h-3.5" strokeWidth={3} />
                  </button>
                  <button
                    disabled={iIdx === playerOrderList.length - 1}
                    onClick={() => onShiftItem('down', iIdx)}
                    className="p-1 px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg disabled:opacity-30 disabled:pointer-events-none border border-slate-300"
                  >
                    <ArrowDown className="w-3.5 h-3.5" strokeWidth={3} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={onConfirmOrder}
            className={`w-full py-3 rounded-2xl font-black text-white bg-slate-900 hover:bg-slate-800 transition shadow ${
              isCompact ? 'py-1.5 rounded-md text-xs' : 'text-sm'
            }`}
          >
            🔒 Kunci Urutan Jawaban
          </button>
        </div>
      );

    default:
      return null;
  }
};
