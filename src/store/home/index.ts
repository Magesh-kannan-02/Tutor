import { create } from "zustand";
import { createHomeSlice } from "./homeSlice";
import type { HomeStore } from "./type";

export const useHomeStore = create<HomeStore>((...a) => ({
  ...createHomeSlice(...a),
}));