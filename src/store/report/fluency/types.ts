


  

export interface FrequencyItem {
  id: string;
  title: string;
  heading: string;
  description: string;
  iconType: string;
}
interface FluencyTitle{
  iconType: string;
  title: string;
  description: string; 
}

export interface FluencySliceTypes {
  fluencyScore: number;
  fluencyDescription: string;
  fluencytitle: FluencyTitle
  fluencydata: FrequencyItem[];
  
}

export type FluencyState = FluencySliceTypes;
