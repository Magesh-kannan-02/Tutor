import type { StateCreator } from "zustand";
import type { ReportState } from "./types";
export const createReportSlice:StateCreator<ReportState>=(set,get)=>({
     currentReportIndex:0,
     setCurrentReportIndex:(index:number)=>set({currentReportIndex:index}),

})
     


