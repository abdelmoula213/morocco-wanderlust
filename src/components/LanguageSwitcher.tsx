import { useEffect, useRef, useState } from "react";
import { Languages, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const setGoogleTransCookie = (lang: string) => {
  // Google Translate reads this cookie to apply translation
  const value = lang === "en" ? "/en/en" : `/en/${lang}`;
  const host = window.location.hostname;
  const domains = [host, `.${host}`, host.replace(/^www\./, "")];
  domains.forEach((d) => {
    document.cookie = `googtrans=${value};path=/;domain=${d}`;
  });
  document.cookie = `googtrans=${value};path=/`;
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>("en");
  const initialized = useRef(false);

  useEffect(() => {
    const stored = localStorage.getItem("preferred_lang") || "en";
    setCurrent(stored);

    if (initialized.current) return;
    initialized.current = true;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,ar",
            autoDisplay: false,
          },
          "google_translate_element",
        );
      }
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    localStorage.setItem("preferred_lang", lang);
    setGoogleTransCookie(lang);
    setCurrent(lang);
    setOpen(false);
    // Apply RTL for Arabic
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    // Reload so Google Translate picks up the new cookie cleanly
    window.location.reload();
  };

  // Apply RTL on initial load
  useEffect(() => {
    document.documentElement.dir = current === "ar" ? "rtl" : "ltr";
  }, [current]);

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div className="relative">
      {/* Hidden host for Google widget */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="notranslate flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/10 hover:bg-background/20 text-primary-foreground transition-colors"
      >
        <Languages size={16} />
        <span className="text-xs font-medium hidden sm:inline">{active.flag} {active.code.toUpperCase()}</span>
        <span className="text-xs font-medium sm:hidden">{active.flag}</span>
        <ChevronDown size={12} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          <div className="notranslate absolute right-0 mt-2 w-44 rounded-lg bg-background border border-border shadow-warm overflow-hidden z-50">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLanguage(l.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body text-left hover:bg-secondary/60 transition-colors ${
                  current === l.code ? "text-primary font-semibold" : "text-foreground"
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
