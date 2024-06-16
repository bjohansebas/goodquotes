export interface Quote {
  author?: string;
  translations: Languages;
}

interface Languages {
  es?: string;
  en?: string;
}
