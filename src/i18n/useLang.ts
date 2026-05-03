import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isLang, SUPPORTED_LANGS, DEFAULT_LANG, type Lang } from "./index";

/**
 * Returns the current language from the URL (`/en/...`), with a safe fallback.
 */
export const useLang = (): Lang => {
  const { pathname } = useLocation();
  const seg = pathname.split("/")[1];
  return isLang(seg) ? seg : DEFAULT_LANG;
};

/**
 * Build a localized path. Pass a route without language prefix
 * (e.g. "/sahara-desert-tour" or "/").
 */
export const useLocalizedPath = () => {
  const lang = useLang();
  return (path: string) => {
    const clean = path.startsWith("/") ? path : `/${path}`;
    if (clean === "/") return `/${lang}`;
    return `/${lang}${clean}`;
  };
};

export const buildPath = (lang: Lang, path: string) => {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `/${lang}`;
  return `/${lang}${clean}`;
};

export { SUPPORTED_LANGS };

/** Convenience hook returning t + current language. */
export const useT = () => {
  const { t } = useTranslation();
  const lang = useLang();
  return { t, lang };
};
