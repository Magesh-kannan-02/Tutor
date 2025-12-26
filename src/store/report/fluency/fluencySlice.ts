import type { StateCreator } from "zustand";
import type { FluencyState } from "./types";

export const createFluencySlice: StateCreator<FluencyState> = (set,get) => ({
  fluencyScore: 0,
  fluencyDescription: "",

  fluencytitle: {
    iconType: "",
    title: "",
    description: "",
  },
  fluencydata: [],
});
