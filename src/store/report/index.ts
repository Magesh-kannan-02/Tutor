import { create } from "zustand";
import { createReportSlice } from "./reportSlice";
import { immer } from "zustand/middleware/immer";
import type { ReportState } from "./types";
export const useReportStore = create<ReportState>()(
  immer((...state) => ({
    ...createReportSlice(...state),
  }))
);