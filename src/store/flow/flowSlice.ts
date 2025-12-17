import type { StateCreator} from 'zustand';
import type { FlowState } from './type';
import { FLOW } from '@/utils/constants';
export const createFlowSlice:StateCreator<FlowState>=(set,get)=>({
     stepIndex: 0,
  pageIndex: 0,

  next: () => {
    const { stepIndex, pageIndex } = get();
    const step = FLOW[stepIndex];

    if (pageIndex < step.pages.length - 1) {
      set({ pageIndex: pageIndex + 1 });
      return;
    }

    if (stepIndex < FLOW.length - 1) {
      set({ stepIndex: stepIndex + 1, pageIndex: 0 });
    }
  },

  back: () => {
    const { stepIndex, pageIndex } = get();

    if (pageIndex > 0) {
      set({ pageIndex: pageIndex - 1 });
      return;
    }

    if (stepIndex > 0) {
      const prev = FLOW[stepIndex - 1];
      set({
        stepIndex: stepIndex - 1,
        pageIndex: prev.pages.length - 1,
      });
    }
  },

  goTo: (step, page = 0) => set({ stepIndex: step, pageIndex: page }),

  reset: () => set({ stepIndex: 0, pageIndex: 0 }),
})
