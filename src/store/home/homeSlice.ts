import type { StateCreator } from "zustand";
import type { HomeStore, HomeState } from "./type";

// Images (assuming these exist or mapping to closest match)
import fireImg from "@/assets/images/fire.png";
import diamondImg from "@/assets/images/diamond.png";
import upperIntermediateImg from "@/assets/images/upperIntermediate.png";


import L1Img from '@/assets/images/L1.png';


const initialState: HomeState = {
  streak: {
    count: 1,
    icon: fireImg,
  },
  xp: {
    count: 120,
    icon: diamondImg,
    level: 1,
    nextLevelXP: 80,
    levelIcon: L1Img,
  },
  streakGrid: [
    [{ id: "1", active: true }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }],
    [{ id: "8" }, { id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }, { id: "13" }, { id: "14" }],
    [{ id: "15" }, { id: "16" }, { id: "17" }, { id: "18" }, { id: "19" }, { id: "20" }, { id: "21" }],
    [{ id: "22" }, { id: "23" }, { id: "24" }, { id: "25" }, { id: "26" }, { id: "27" }, { id: "28" }],
    [{ id: "29" }, { id: "30" }, { id: "31" }, { id: "32" }, { id: "33" }, { id: "34" }, { id: "35" }],
  ],
  xpHistory: [
    { action: "Completed a practice session", xp: 30 },
    { action: "Spoke for 10 minutes", xp: 30 },
    { action: "Maintained a streak", xp: 10 },
  ],
  user: {
    name: "Bala",
    level: "Upper-Intermediate B1",
    levelBadge: upperIntermediateImg,
  },
  dailyGoal: {
    target: 10,
    current: 5,
    percentage: 50,
  },
  courseProgress: {
    level: "Upper Intermediate B1",
    percentage: 52,
    label: "Progress",
  },
  quickTip: {
    title: "Quick Tip",
    description: "Instead of saying 'very good', try 'excellent'.",
    icon: "lamp",
  },
  lastSession: {
    title: "Career Chat",
    subtitle: "Tour Guide",
    type: "chat",
  },
  skills: [
    {
      name: "Pronunciation",
      progress: 78,
      iconType: "microphone",
      description: "Crystal clear",
    },
    {
      name: "Vocabulary",
      progress: 52,
      iconType: "vocabulary",
      description: "Growing",
    },
    {
      name: "Grammar",
      progress: 78,
      iconType: "microphone",
      description: "Improving",
    },
    {
      name: "Fluency",
      progress: 52,
      iconType: "fluency",
      description: "Smoother",
    },
  ],
};

export const createHomeSlice: StateCreator<HomeStore> = (set) => ({
  ...initialState,

  setStreak: (count) => set((state) => ({ streak: { ...state.streak, count } })),
  setXP: (count) => set((state) => ({ xp: { ...state.xp, count } })),
  updateDailyGoal: (minutes) =>
    set((state) => ({
      dailyGoal: {
        ...state.dailyGoal,
        current: minutes,
        percentage: (minutes / state.dailyGoal.target) * 100,
      },
    })),
});