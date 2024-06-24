export const LANGUAGES: Record<string, { code: string; name: string }> = {
  en: {
    code: "en",
    name: "English",
  },
  es: {
    code: "es",
    name: "Español",
  },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  en: {
    "languagepicker.a.title": "Change to spanish version",
  },
  es: {
    "languagepicker.a.title": "Cambiar a versión en inglés",
  },
} as const;
