import type { StateCreator } from "zustand";
import type { SelectTestStore } from "./types";

export const createSelectTestSlice: StateCreator<
  SelectTestStore,
  [["zustand/immer", never]],
  [],
  SelectTestStore
> = (set) => ({
  activeFeature: "grammar",

  features: [
    {
      id: "pronunciation",
      textContent: "Pronunciation",
      icontype: "microphone",
    },
    {
      id: "grammar",
      textContent: "Grammar",
      icontype: "pen",
    },
    {
      id: "vocabulary",
      textContent: "Vocabulary",
      icontype: "vocabulary",
    },
    {
      id: "fluency",
      textContent: "Fluency",
      icontype: "fluency",
    },
  ],

  setActiveFeature: (feature) =>
    set((s) => {
      s.activeFeature = feature;
    }),
});
