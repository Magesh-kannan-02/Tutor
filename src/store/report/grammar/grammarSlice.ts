import type { StateCreator } from "zustand";
import type { GrammarState } from "./types";


export const createGrammarSlice: StateCreator<GrammarState> = () => ({
   grammarScore: 0,
    grammardescription: "",
    grammartitle: {
      iconType: "",
      title: "",
      description: "",
    },
    grammardata: [],
});