export interface PracticeState {
  contextCategory: string;
  selectedContext: string;
}

export interface PracticeActions {
  setContextCategory: (category: string) => void;
  setSelectedContext: (context: string) => void;
}

export type PracticeStore = PracticeState & PracticeActions;
