import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createPracticeSlice } from "./practiceSlice";
import type { PracticeStore } from "./type";

export const usePracticeStore = create<PracticeStore>()(
  immer((...a) => ({
    ...createPracticeSlice(...a),
  }))
);
