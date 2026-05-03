import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Languages, ChevronDown } from "lucide-react";
import { SUPPORTED_LANGS, type Lang } from "@/i18n";
import { useLang } from "@/i18n/useLang";

const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
];

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const current = useLang();

  const changeLanguage = (lang: Lang) => {
    setOpen(false);
    if (lang === current) return;
    // Replace the leading language segment in the current path with the new one.
    const parts = location.pathname.split("/");
    if (SUPPORTED_LANGS.includes(parts[1] as Lang)) {
      parts[1] = lang;
    } else {
      parts.splice(1, 0, lang);
    }
    const newPath = parts.join("/") || `/${lang}`;
    navigate(`${newPath}${location.search}${location.hash}`);
  };

  const active = LANGUAGES.find((l) => l.code === current) ?? LANGUAGES[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-background/10 hover:bg-background/20 text-primary-foreground transition-colors"
      >
        <Languages size={16} />
        <span className="text-xs font-medium hidden sm:inline">
          {active.flag} {active.code.toUpperCase()}
        </span>
        <span className="text-xs font-medium sm:hidden">{active.flag}</span>
        <ChevronDown size={12} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-44 rounded-lg bg-background border border-border shadow-warm overflow-hidden z-50">
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
