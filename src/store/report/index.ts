import { create } from "zustand";

import { createFluencySlice } from "./fluency/fluencySlice";
import { createVocabularySlice } from "./vocabulary/vocabularySlice";
import { createGrammarSlice } from "./grammar/grammarSlice";

import type { VocabularySliceTypes } from "./vocabulary/types";
import type { FluencyState } from "./fluency/types";
import type { GrammarState } from "./grammar/types";

export type ReportStore = VocabularySliceTypes & GrammarState & FluencyState;

export const useReportStore = create<ReportStore>((...state) => ({
  ...createGrammarSlice(...state),
  ...createVocabularySlice(...state),
  ...createFluencySlice(...state),
}));
