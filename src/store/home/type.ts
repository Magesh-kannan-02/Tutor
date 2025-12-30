export interface HomeState {
  streak: {
    count: number;
    icon: string;
  };
  xp: {
    count: number;
    icon: string;
    level: number;
    nextLevelXP: number;
    levelIcon: string;
  };
  streakGrid: {
    id: string;
    active?: boolean;
  }[][];
  xpHistory: {
    action: string;
    xp: number;
  }[];
  user: {
    name: string;
    level: string;
    levelBadge: string;
  };
  dailyGoal: {
    target: number; // in minutes
    current: number; // in minutes
    percentage: number;
  };
  courseProgress: {
    level: string;
    percentage: number;
    label: string; // e.g. "Upper Intermediate B1"
  };
  quickTip: {
    title: string;
    description: string;
    icon: string;
  };
  lastSession: {
    title: string;
    subtitle: string;
    type: "chat" | "call"; // to determine icon
  };
  skills: {
    name: string;
    progress: number;
    iconType: string;
    description: string;
  }[];
}

export interface HomeActions {
  setStreak: (count: number) => void;
  setXP: (count: number) => void;
  updateDailyGoal: (minutes: number) => void;
}

export type HomeStore = HomeState & HomeActions;