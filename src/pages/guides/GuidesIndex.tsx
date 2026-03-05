import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import heroImage from "@/assets/hero-morocco.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";
import { BookOpen, ArrowRight } from "lucide-react";

const guides = [
  {
    image: saharaImage,
    title: "Best Sahara Desert Tour from Marrakech (Complete Guide 2026)",
    desc: "Compare routes, prices, and operators. Everything you need to know before booking your Sahara adventure.",
    link: "/guides/best-sahara-desert-tour-marrakech",
    tag: "Most Read",
  },
  {
    image: aitBenHaddouImage,
    title: "3 Days Sahara Desert Tour Guide – Itinerary, Tips & Prices",
    desc: "Detailed day-by-day itinerary with insider tips, packing list, and best time to visit the Sahara.",
    link: "/guides/3-days-sahara-desert-tour-guide",
    tag: "Detailed Guide",
  },
  {
    image: heroImage,
    title: "Top 10 Things to Do in Marrakech (2026)",
    desc: "The ultimate Marrakech bucket list — from ancient souks and Jemaa el-Fnaa to desert tours and mountain treks.",
    link: "/guides/top-10-things-to-do-marrakech",
    tag: "Popular",
  },
  {
    image: atlasImage,
    title: "Atlas Mountains Day Trip Guide from Marrakech",
    desc: "Complete guide to Imlil, Ourika Valley, Berber villages, waterfalls & trekking routes from Marrakech.",
    link: "/guides/atlas-mountains-day-trip-guide",
    tag: "Day Trip",
  },
  {
    image: heroImage,
    title: "Is Morocco Safe for Tourists? (2026 Safety Guide)",
    desc: "Honest safety guide covering scams, solo female travel, transport, food, and how to stay safe in Morocco.",
    link: "/guides/is-morocco-safe-for-tourists",
    tag: "Safety",
  },
];

const GuidesIndex = () => {
  return (
    <>
      <Helmet>
        <title>Morocco Travel Guides & Tips (2026) | SK Morocco</title>
        <meta name="description" content="Read our free Morocco travel guides. Sahara desert tours, Marrakech tips, Atlas Mountains hiking, safety advice & more. Plan your perfect Morocco trip." />
        <meta name="keywords" content="Morocco travel guides, Morocco tips, Marrakech guide, Sahara desert guide, Atlas Mountains guide, Morocco safety, Morocco travel blog, Morocco itinerary, Morocco trip planning, Morocco 2026" />
      </Helmet>

      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <img src={saharaImage} alt="Morocco travel guides" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <BookOpen size={12} /> Travel Guides & Tips
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Morocco Travel Guides
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Free, in-depth guides to help you plan the perfect Morocco trip — written by local experts.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.link}
                to={guide.link}
                className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={guide.image} alt={guide.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {guide.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                    {guide.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary">
                    Read Guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GuidesIndex;
