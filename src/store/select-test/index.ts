import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { SelectTestStore } from "./types";
import { createSelectTestSlice } from "./selectTestSlice";

export const useSelectTestStore = create<SelectTestStore>()(
  immer((...a) => ({
    ...createSelectTestSlice(...a),
  }))
);
