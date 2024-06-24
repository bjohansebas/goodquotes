export interface Quote {
  author?: string;
  translations: Languages;
  tags?: Tags[] | string[];
}

export interface Languages {
  es?: Translations;
  en: Translations;
}

export type Translations = {
  quote: string;
  reference?: string;
};

export type Tags =
  | "funny"
  | "love"
  | "life"
  | "inspirational"
  | "philosophy"
  | "death"
  | "spirituality"
  | "religion"
  | "knowledge"
  | "science"
  | "religion";
