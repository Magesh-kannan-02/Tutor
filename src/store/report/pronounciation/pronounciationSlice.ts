import type { StateCreator } from "zustand";
import type { PronunciationState } from "./types";

export const createPronounciationSlice: StateCreator<PronunciationState> = () => ({
    pronunciationScore: 0,
    pronunciationDescription: "",
    pronunciationtitle: {
      iconType: "",
      title: "",
      description: "",
    },
    pronunciationdata: [],

});
