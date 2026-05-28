export type QuestionType = 'choice' | 'boolean' | 'guess-image' | 'voice' | 'order' | 'match';

export interface Question {
  id: string;
  level: number; // 1 to 6
  type: QuestionType;
  questionText: string;
  options?: string[]; // Multiple options
  correctAnswer: string | number | number[]; // Index or value or array of correct order
  illustration?: 'cow' | 'goat' | 'sapi_sehat' | 'sapi_sakit' | 'masjid' | 'ibrahim_ismail' | 'kakbah' | 'camel';
  storyItems?: string[]; // For ordering stories
  soundType?: 'cow' | 'goat' | 'camel'; // For Web Audio synth sound quizzes
  hint?: string;
  explanation?: string;
}

export interface PlayerState {
  id: number; // 1, 2, 3, 4
  name: string;
  color: string; // Tailwind bg/text colors
  accentColor: string; // Active buttons color
  score: number;
  currentQuestionIndex: number;
  streak: number;
  stars: number;
  activeAnswer: string | number | null;
  hasAnswered: boolean;
  isCorrect: boolean | null;
  wrongAttempts: number;
  orderState?: string[]; // Used for drag/order questions
  matchState?: { [key: string]: string }; // Used for matching questions
}

export type GameMode = 'single' | 'multi';
export type SyncMode = 'independent' | 'synchronized';
