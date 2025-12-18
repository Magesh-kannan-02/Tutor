export type TestFeature =
  | "pronunciation"
  | "grammar"
  | "vocabulary"
  | "fluency";

export interface TestFeatureOption {
  id: TestFeature;
  textContent: string;
  icontype: string;
}

export interface SelectTestState {
  activeFeature: TestFeature;
  features: TestFeatureOption[];
}

export interface SelectTestActions {
  setActiveFeature: (feature: TestFeature) => void;
}

export type SelectTestStore = SelectTestState & SelectTestActions;
