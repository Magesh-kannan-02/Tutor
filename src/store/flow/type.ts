interface FlowSlice  {
  stepIndex: number;
  pageIndex: number;

  next: () => void;
  back: () => void;
  goTo: (step: number, page?: number) => void;
  reset: () => void;
};
export type FlowState=FlowSlice;