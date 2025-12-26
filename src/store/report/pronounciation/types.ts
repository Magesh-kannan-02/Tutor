export interface PronunciationItem {
  title: string;
  message: string;
  explanation: string;
  label?: string;
  activelabel?: string;
}
interface PronunciationSlicetypes {
  pronunciationScore: number;
  pronunciationDescription: string;
  pronunciationtitle: {
    iconType: string;
    title: string;
    description: string;
  };

  pronunciationdata: {
    id: string;
    category: string;
    audioUrl?: string;
    cards: PronunciationItem[];
  }[];
}
export type PronunciationState = PronunciationSlicetypes;
