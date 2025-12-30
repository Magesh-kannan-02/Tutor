import type { StateCreator } from "zustand";
import type { PracticeStore } from "./type";

const initialState = {
  contextCategory: "career",
  selectedContext: "Tour Guide",
};

export const createPracticeSlice: StateCreator<
  PracticeStore,
  [["zustand/immer", never]],
  [],
  PracticeStore
> = (set) => ({
  ...initialState,
  setContextCategory: (category) =>
    set((state) => {
      state.contextCategory = category;
    }),
  setSelectedContext: (context) =>
    set((state) => {
      state.selectedContext = context;
    }),
});
