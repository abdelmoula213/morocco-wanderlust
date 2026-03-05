import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import { CheckCircle, MapPin, Clock, Star, AlertTriangle, Phone } from "lucide-react";

const BestSaharaTour = () => {
  return (
    <>
      <Helmet>
        <title>Best Sahara Desert Tour from Marrakech (Complete Guide 2026)</title>
        <meta name="description" content="Complete guide to the best Sahara desert tour from Marrakech. Compare itineraries, prices, tips & what to pack. Book direct for the best price — no middlemen." />
        <meta name="keywords" content="best Sahara desert tour Marrakech, Sahara tour guide 2026, Marrakech to Sahara, Merzouga tour, desert tour Morocco, camel trek Sahara, Erg Chebbi, Morocco desert experience, Sahara camping, Ait Ben Haddou, Ouarzazate, desert tour tips, Morocco travel guide, best desert tour Morocco, Sahara desert from Marrakech" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={saharaImage} alt="Sahara Desert Morocco golden dunes" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Travel Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Best Sahara Desert Tour<br />from Marrakech (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Everything you need to know before booking your Sahara desert adventure.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Introduction */}
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
          The Sahara Desert tour from Marrakech is Morocco's most iconic experience. But with so many operators, how do you pick the best one? In this guide, we break down routes, prices, what's included, and insider tips so you can make the right choice.
        </p>

        {/* Section: Why Sahara */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Why Visit the Sahara Desert?</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The Erg Chebbi dunes near Merzouga are among the most spectacular landscapes on Earth. Towering golden dunes, star-filled nights, and the silence of the desert create a once-in-a-lifetime experience.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <img src={saharaImage} alt="Golden Sahara dunes at sunset" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
          <img src={aitBenHaddouImage} alt="Ait Ben Haddou Kasbah" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
        </div>

        {/* Section: Best Route */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Best 3-Day Route</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The classic and most popular route takes 3 days and 2 nights, covering Morocco's most stunning scenery:
        </p>
        <div className="space-y-4 mb-10">
          {[
            { day: "Day 1", title: "Marrakech → Ait Ben Haddou → Dades Valley", desc: "Cross the Atlas Mountains via Tizi n'Tichka, visit the UNESCO Kasbah, explore Ouarzazate." },
            { day: "Day 2", title: "Todra Gorge → Merzouga → Desert Camp", desc: "Drive through dramatic gorges, arrive at the Sahara, camel trek into the dunes, sleep under the stars." },
            { day: "Day 3", title: "Sahara Sunrise → Return to Marrakech", desc: "Watch sunrise over the dunes, camel ride back, scenic return through Ouarzazate." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-warm">
              <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.day}</p>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Section: Prices */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Much Does It Cost?</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Prices vary widely depending on whether you book shared or private, standard or luxury accommodation:
        </p>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Standard Shared</p>
              <p className="font-heading text-3xl font-bold text-foreground">800 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person</p>
            </div>
            <div className="text-center p-4 bg-gold-light rounded-lg border border-accent/30">
              <p className="font-body text-xs text-accent-foreground uppercase tracking-wider mb-1">Luxury</p>
              <p className="font-heading text-3xl font-bold text-foreground">2,000 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person</p>
            </div>
          </div>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-10">
          <Star size={12} className="inline text-accent mr-1" />
          Booking direct with a local agency like SEE&KNOW saves you 20-30% compared to international platforms.
        </p>

        {/* Section: What to Pack */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What to Pack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {["Warm layers (desert nights are cold)", "Sunscreen & sunglasses", "Comfortable walking shoes", "Camera & extra battery", "Cash (small towns)", "Scarf or shemagh for sand", "Refillable water bottle", "Snacks for the road"].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* Section: Tips */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Insider Tips</h2>
        <div className="space-y-3 mb-10">
          {[
            "Book direct with a local agency for the best price — avoid middlemen.",
            "Choose a tour that includes Ait Ben Haddou — it's not always included.",
            "Go between October and April for the best weather.",
            "Ask about group size — smaller groups mean a better experience.",
            "Luxury camps have private bathrooms and heated tents — worth it for couples.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <AlertTriangle size={14} className="text-accent mt-0.5 shrink-0" />
              {tip}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to Book?</h2>
          <p className="font-body text-muted-foreground mb-6">
            Book directly with SEE&KNOW for the best price. Pay on arrival, free cancellation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/sahara-desert-tour"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Tour Details
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20the%20Sahara%20Desert%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              <Phone size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default BestSaharaTour;
