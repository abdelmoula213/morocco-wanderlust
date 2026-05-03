import { ReactNode, useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANG, isLang, SUPPORTED_LANGS, type Lang } from "./index";

/**
 * Detect a sensible initial language for visitors landing on "/".
 * Order: localStorage → browser language → default.
 */
const detectInitialLang = (): Lang => {
  try {
    const stored = localStorage.getItem("preferred_lang");
    if (isLang(stored)) return stored;
  } catch {
    /* ignore */
  }
  const nav = (typeof navigator !== "undefined" ? navigator.language : "") || "";
  const short = nav.toLowerCase().split("-")[0];
  if (isLang(short)) return short;
  return DEFAULT_LANG;
};

/** Redirects "/" to "/{detectedLang}" preserving query/hash. */
export const RootLangRedirect = () => {
  const { search, hash } = useLocation();
  const lang = detectInitialLang();
  return <Navigate to={`/${lang}${search}${hash}`} replace />;
};

/**
 * Wraps language-scoped routes. Validates the :lang param, syncs i18next,
 * and updates <html lang> and <html dir> (RTL for Arabic).
 */
export const LangLayout = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation();

  const valid = isLang(lang);

  useEffect(() => {
    if (!valid) return;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang!;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("preferred_lang", lang!);
    } catch {
      /* ignore */
    }
  }, [lang, valid, i18n]);

  if (!valid) {
    const fallback = detectInitialLang();
    const rest = location.pathname.replace(/^\/[^/]+/, "");
    return <Navigate to={`/${fallback}${rest}${location.search}${location.hash}`} replace />;
  }

  return <>{children}</>;
};

export { SUPPORTED_LANGS };
