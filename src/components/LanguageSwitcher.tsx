import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";

type Lang = { code: string; label: string; flag: string };

const LANGS: Lang[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

const STORAGE_KEY = "sk_lang";

// Read the language from the googtrans cookie (set by Google Translate widget)
const readCookieLang = (): string => {
  const m = document.cookie.match(/googtrans=\/[a-z-]+\/([a-z-]+)/i);
  return m?.[1] ?? "en";
};

// Set the googtrans cookie on root + parent domain so Google Translate picks it up
const setGoogTrans = (lang: string) => {
  const value = lang === "en" ? "" : `/en/${lang}`;
  const host = window.location.hostname;
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  // current host
  document.cookie = `googtrans=${value};expires=${expires};path=/`;
  // parent domain (e.g. .lovable.app)
  const parts = host.split(".");
  if (parts.length > 1) {
    const parent = "." + parts.slice(-2).join(".");
    document.cookie = `googtrans=${value};expires=${expires};path=/;domain=${parent}`;
  }
};

const applyDirection = (lang: string) => {
  const html = document.documentElement;
  if (lang === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  } else {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", lang);
  }
};

let scriptInjected = false;
const injectGoogleTranslate = () => {
  if (scriptInjected) return;
  scriptInjected = true;

  // Hidden mount node required by the widget
  if (!document.getElementById("google_translate_element")) {
    const div = document.createElement("div");
    div.id = "google_translate_element";
    div.style.display = "none";
    document.body.appendChild(div);
  }

  // Hide Google's top banner / tooltip and prevent body offset
  const style = document.createElement("style");
  style.innerHTML = `
    .goog-te-banner-frame.skiptranslate, .goog-te-gadget { display: none !important; }
    body { top: 0 !important; }
    .goog-tooltip, .goog-tooltip:hover, .goog-text-highlight {
      background: transparent !important;
      box-shadow: none !important;
    }
    /* Hide the floating Google translation popup */
    iframe.goog-te-banner-frame { display: none !important; }
  `;
  document.head.appendChild(style);

  (window as unknown as { googleTranslateElementInit: () => void }).googleTranslateElementInit = () => {
    const w = window as unknown as {
      google?: {
        translate?: {
          TranslateElement?: new (
            opts: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
            id: string,
          ) => void;
        };
      };
    };
    if (w.google?.translate?.TranslateElement) {
      new w.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr,es,ar",
          autoDisplay: false,
        },
        "google_translate_element",
      );
    }
  };

  const s = document.createElement("script");
  s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  s.async = true;
  document.body.appendChild(s);
};

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) ?? readCookieLang() ?? "en";
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectGoogleTranslate();
    // Re-apply saved language on mount
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved !== "en") {
      setGoogTrans(saved);
    }
    applyDirection(saved ?? "en");
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const change = (code: string) => {
    setCurrent(code);
    localStorage.setItem(STORAGE_KEY, code);
    setGoogTrans(code);
    applyDirection(code);
    setOpen(false);
    // Google Translate requires a reload to fully apply / revert
    setTimeout(() => window.location.reload(), 50);
  };

  const active = LANGS.find((l) => l.code === current) ?? LANGS[0];

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
        className="flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground transition-colors px-2 py-1.5 rounded-md"
      >
        <Globe size={18} />
        <span className="font-body text-sm font-medium uppercase">{active.code}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-border bg-card shadow-warm overflow-hidden z-50 animate-fade-in">
          {LANGS.map((l) => {
            const isActive = l.code === current;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => change(l.code)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-body text-left transition-colors ${
                  isActive
                    ? "bg-primary/10 text-foreground font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1">{l.label}</span>
                {isActive && <Check size={14} className="text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
