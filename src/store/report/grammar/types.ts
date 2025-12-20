interface GrammarItem {
  title: string;
  message: string;
  explanation: string;
  label?: string;
  activelabel?: string;
}
export interface GrammarSliceTypes {
  grammarScore: number;
  grammardescription: string;
  grammartitle: {
    iconType: string;
    title: string;
    description: string;
  };

  grammardata: {
    id: string;
    category: string;
    audioUrl?: string;
    cards: GrammarItem[];
  }[];
}
export type GrammarState = GrammarSliceTypes;
