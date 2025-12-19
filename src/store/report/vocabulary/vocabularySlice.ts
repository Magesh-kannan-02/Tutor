import type { StateCreator } from "zustand";
import type { VocabularyState } from "./types";

export const createVocabularySlice: StateCreator<VocabularyState> = () => ({
  vocabularyScore: 0,

  vocabularydescription: "",

  vocabularytitle: {
    iconType: "",
    title: "",
    description: "",
  },

  vocabularydata: [],
});
