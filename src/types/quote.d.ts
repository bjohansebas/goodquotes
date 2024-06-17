export interface Quote {
  author?: string;
  translations: Languages;
  reference?: string;
}

interface Languages {
  es?: string | Translations;
  en?: string | Translations;
}

interface Translations {
  quote: string;
  reference: string;
}
