interface ChipItem {
  label: string;
  activeLabel: string;
  audioUrl?: string;
}
export interface VocabularySliceTypes {
  vocabularyScore: number;
  vocabularydescription: string;
  vocabularytitle: {
    iconType: string;
    title: string;
    description?: string;
  };

  vocabularydata: {
    id: string;
    level: string;
    word: string;
    optionalWord?: string;
    chips: ChipItem[];
  }[];
}
export type VocabularyState = VocabularySliceTypes;
