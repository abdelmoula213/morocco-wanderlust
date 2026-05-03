import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLang, useLocalizedPath } from "@/i18n/useLang";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const lang = useLang();
  const lp = useLocalizedPath();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/sahara-desert-tour", label: t("nav.sahara") },
    { to: "/agafay-desert", label: t("nav.agafay") },
    { to: "/atlas-mountains", label: t("nav.imlil") },
    { to: "/ouzoud-waterfalls", label: t("nav.ouzoud") },
    { to: "/ourika-valley", label: t("nav.ourika") },
    { to: "/essaouira", label: t("nav.essaouira") },
    { to: "/guides", label: t("nav.guides") },
  ];

  const currentBase = location.pathname.replace(new RegExp(`^/${lang}`), "") || "/";
  const isActive = (path: string) => currentBase === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-foreground/95 backdrop-blur-md shadow-warm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to={lp("/")} className="flex items-center gap-3">
            <img src={logo} alt="SEE&KNOW" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-primary-foreground leading-none">See & Know</span>
              <span className="font-body text-[9px] tracking-[0.2em] uppercase text-primary-foreground/70">Tours & Travels</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.to}
                to={lp(link.to)}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/212766776545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-warm hover:scale-105"
            >
              <Phone size={14} />
              {t("nav.bookNow")}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />

            <button
              className="lg:hidden text-primary-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 flex flex-col gap-3 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.to}
                to={lp(link.to)}
                className={`font-body text-base py-2 border-b border-primary-foreground/10 transition-colors ${
                  isActive(link.to) ? "text-accent" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/212766776545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-full mt-2"
            >
              <Phone size={16} />
              {t("nav.bookNowWhatsapp")}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
