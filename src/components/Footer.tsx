import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, MapPin, Star } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLocalizedPath } from "@/i18n/useLang";

const Footer = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const why = t("footer.why", { returnObjects: true }) as string[];

  const tourLinks = [
    { to: "/sahara-desert-tour", label: t("home.tours.items.sahara.title") },
    { to: "/agafay-desert", label: t("home.tours.items.agafay.title") },
    { to: "/atlas-mountains", label: t("home.tours.items.atlas.title") },
    { to: "/ouzoud-waterfalls", label: t("home.tours.items.ouzoud.title") },
    { to: "/essaouira", label: t("home.tours.items.essaouira.title") },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA bar */}
      <div className="bg-primary py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-bold text-primary-foreground">{t("footer.ctaTitle")}</p>
            <p className="font-body text-sm text-primary-foreground/85">{t("footer.ctaSubtitle")}</p>
          </div>
          <a
            href="https://wa.me/212766776545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-foreground/90 transition-colors whitespace-nowrap"
          >
            {t("footer.ctaButton")}
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="SEE&KNOW Tours & Travels" className="h-16 w-auto mb-2 rounded-full" />
            <p className="text-sm tracking-widest text-accent uppercase mb-4">{t("footer.location")}</p>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-4">
              {t("footer.about")}
            </p>
            <div className="flex items-center gap-1 mb-4">
              {["s1","s2","s3","s4","s5"].map((s) => (
                <Star key={s} size={14} fill="currentColor" className="text-accent" />
              ))}
              <span className="text-xs text-primary-foreground/50 ml-2">{t("footer.reviews")}</span>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.tours")}</h4>
            <ul className="space-y-2">
              {tourLinks.map((link) => (
                <li key={link.to}>
                  <Link to={lp(link.to)} className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.whyTitle")}</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/60">
              {why.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/212766776545" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body text-sm text-primary-foreground/80 group-hover:text-accent transition-colors">+212 766-776545</p>
                    <p className="font-body text-xs text-primary-foreground/40">{t("footer.whatsappLabel")}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-primary-foreground/80">{t("footer.location")}</p>
                  <p className="font-body text-xs text-primary-foreground/40">{t("footer.operating")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/40">
            {t("footer.rights")}
          </p>
          <p className="font-body text-xs text-primary-foreground/40">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
