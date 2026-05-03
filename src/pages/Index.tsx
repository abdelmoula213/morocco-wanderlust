import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-morocco.jpg";
import saharaImage from "@/assets/sahara-desert.jpg";
import agafayImage from "@/assets/agafay-desert.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ouzoudImage from "@/assets/ouzoud-waterfalls.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import TourCard from "@/components/TourCard";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import { Shield, Award, CheckCircle, ChevronDown, Users, Clock, Phone, Compass } from "lucide-react";
import { SUPPORTED_LANGS } from "@/i18n";
import { useLang, useLocalizedPath } from "@/i18n/useLang";

const Index = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const lp = useLocalizedPath();

  const tours = [
    { image: saharaImage, key: "sahara", price: "From 800 DH", link: "/sahara-desert-tour" },
    { image: agafayImage, key: "agafay", price: "From 400 DH", link: "/agafay-desert" },
    { image: atlasImage, key: "atlas", price: "150 DH", link: "/atlas-mountains" },
    { image: ouzoudImage, key: "ouzoud", price: "200 DH", link: "/ouzoud-waterfalls" },
    { image: ourikaImage, key: "ourika", price: "150 DH", link: "/ourika-valley" },
    { image: essaouiraImage, key: "essaouira", price: "200 DH", link: "/essaouira" },
  ] as const;

  const why = [
    { icon: Shield, key: "licensed" },
    { icon: Users, key: "guides" },
    { icon: Award, key: "price" },
    { icon: Phone, key: "support" },
    { icon: CheckCircle, key: "cancel" },
    { icon: Clock, key: "pay" },
  ] as const;

  const origin = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      <Helmet>
        <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} />
        <title>{t("home.meta.title")}</title>
        <meta name="description" content={t("home.meta.description")} />
        <link rel="canonical" href={`${origin}/${lang}`} />
        {SUPPORTED_LANGS.map((l) => (
          <link key={l} rel="alternate" hrefLang={l} href={`${origin}/${l}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${origin}/en`} />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <img src={heroImage} alt="Morocco Sahara Desert with Atlas Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-semibold font-body px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Compass size={12} />
            {t("home.hero.badge")}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.08] mb-6">
            {t("home.hero.title1")}{" "}
            <span className="block text-gradient-gold italic">{t("home.hero.title2")}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed mb-8">
            {t("home.hero.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {(["price", "pay", "cancel", "pickup"] as const).map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full">
                <CheckCircle size={11} className="text-accent" />
                {t(`home.hero.badges.${badge}`)}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tours" className="bg-primary text-primary-foreground font-semibold font-body text-base px-10 py-4 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300">
              {t("home.hero.ctaTours")}
            </a>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20a%20tour%20with%20SEE%26KNOW."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/40 text-primary-foreground font-semibold font-body text-base px-10 py-4 rounded-full hover:bg-primary-foreground/25 transition-all duration-300"
            >
              {t("home.hero.ctaWhatsapp")}
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
            {[
              { key: "travelers", value: "5,000+" },
              { key: "rating", value: "⭐ 4.9/5" },
              { key: "experience", value: "10+" },
            ].map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">
                  {t(`home.hero.stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground/50">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ===== FEATURED TOURS ===== */}
      <section className="py-20 bg-background" id="tours">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">{t("home.tours.kicker")}</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">{t("home.tours.title")}</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">{t("home.tours.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard
                key={tour.key}
                image={tour.image}
                title={t(`home.tours.items.${tour.key}.title`)}
                description={t(`home.tours.items.${tour.key}.description`)}
                price={tour.price}
                duration={t(`home.tours.items.${tour.key}.duration`)}
                badge={
                  tour.key === "sahara" || tour.key === "agafay"
                    ? t(`home.tours.items.${tour.key}.badge`)
                    : undefined
                }
                link={lp(tour.link)}
                viewDetailsLabel={t("home.tours.viewDetails")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">{t("home.why.kicker")}</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">{t("home.why.title")}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map(({ icon: Icon, key }) => (
              <div key={key} className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-light mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">
                  {t(`home.why.items.${key}.title`)}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t(`home.why.items.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAHARA HIGHLIGHT ===== */}
      <section className="relative py-24 overflow-hidden">
        <img src={aitBenHaddouImage} alt="Ait Ben Haddou Kasbah Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-3">{t("home.highlight.kicker")}</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t("home.highlight.title")}
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-6">
              {t("home.highlight.description")}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Ait Ben Haddou", "Ouarzazate", "Todra Gorge", "Merzouga", "Camel Trek", "Sahara Camp"].map((tag) => (
                <span key={tag} className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">800 DH</p>
                <p className="font-body text-xs text-primary-foreground/60">{t("home.highlight.standard")}</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary-foreground">2,000 DH</p>
                <p className="font-body text-xs text-primary-foreground/60">{t("home.highlight.luxury")}</p>
              </div>
            </div>
            <a
              href={lp("/sahara-desert-tour")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              {t("home.highlight.cta")}
            </a>
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM ===== */}
      <section className="py-20 bg-background" id="book">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">{t("home.booking.kicker")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                {t("home.booking.title")}
              </h2>
              <p className="font-body text-muted-foreground">{t("home.booking.subtitle")}</p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">{t("home.faq.kicker")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("home.faq.title")}
            </h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default Index;
