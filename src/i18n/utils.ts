import { defaultLang, ui } from "./ui";
import type { Languages, Translations } from "@/types/quote";

type UI = typeof ui;
type Fn = (...args: any[]) => any;
export type LConfP = Record<string, string | ((props: never) => string)>;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslationsQuotes(
  quotes: Languages,
  lang: keyof typeof ui,
): Translations {
  if (quotes[lang] != null) {
    return quotes[lang] ?? quotes.en;
  }
  return quotes.en;
}

export function useTranslations<L extends keyof UI>(lang: L) {
  // chosen ui lang
  const cui = ui[lang];
  const dui = ui[defaultLang];

  // valid prop key
  type VPK = keyof typeof cui | keyof typeof dui;

  // Lazy
  type GetFnKeys<T extends LConfP> = {
    [Up in keyof T]: Up extends keyof T
      ? T[Up] extends Fn
        ? Up
        : never
      : never;
  }[keyof T];

  // @ts-ignore
  function t<K extends GetFnKeys<typeof dui>>(
    key: K,
    vars: K extends string ? Parameters<(typeof dui)[K]>[0] : never,
  ): string;
  function t<K extends GetFnKeys<typeof cui>>(
    key: K,
    vars: K extends string
      ? Parameters<Extract<(typeof cui)[K], Fn>>[0]
      : never,
  ): string;
  function t(
    key: Exclude<VPK, GetFnKeys<typeof cui> | GetFnKeys<typeof dui>>,
  ): string;
  function t(key: VPK, vars?: never): string {
    const translation =
      key in cui
        ? cui[key as VPK & keyof typeof cui]
        : dui[key as VPK & keyof typeof dui];

    if (typeof translation === `function`) {
      // typescript restriction
      return (translation as Extract<typeof translation, Fn>)(vars as never);
    }

    // typescript restriction
    return translation as string;
  }

  return t;
}
