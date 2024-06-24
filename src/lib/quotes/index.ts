import type { ui } from "@/i18n/ui";
import { quotes } from "./data";

export const randomQuote = (lang: keyof typeof ui) => {
  const quotesWithLang = quotes.filter((data) => {
    return data.translations.hasOwnProperty(lang) === true;
  });

  return quotesWithLang[Math.floor(Math.random() * quotesWithLang.length)];
};
