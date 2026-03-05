import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-morocco.jpg";
import { CheckCircle, Shield, AlertTriangle, Phone, Star, Users } from "lucide-react";

const IsMoroccoSafe = () => {
  return (
    <>
      <Helmet>
        <title>Is Morocco Safe for Tourists? (2026 Safety Guide) | SK Morocco</title>
        <meta name="description" content="Is Morocco safe for tourists in 2026? Honest safety guide covering scams, solo female travel, transport, health tips & how to stay safe in Marrakech and beyond." />
        <meta name="keywords" content="is Morocco safe, Morocco safety guide, Morocco travel safety, Marrakech safe for tourists, Morocco solo female travel, Morocco scams, Morocco health tips, Morocco travel advice 2026, safe in Morocco, Morocco tourist safety, Marrakech safety, Morocco crime, Morocco travel tips, visiting Morocco, Morocco for first timers" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImage} alt="Morocco street scene Marrakech" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Safety Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Is Morocco Safe<br />for Tourists? (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            An honest, practical safety guide from a local Moroccan travel agency.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
          <strong>Short answer: Yes, Morocco is safe for tourists.</strong> Morocco welcomes over 14 million visitors a year and has invested heavily in tourism infrastructure and security. Like any popular destination, awareness and common sense go a long way. Here's everything you need to know.
        </p>

        {/* Overall Safety */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Overall Safety Rating</h2>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center">
              <Shield size={28} className="text-primary" />
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">Very Safe</p>
              <p className="font-body text-sm text-muted-foreground">Comparable to most European destinations</p>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Morocco ranks among the safest countries in Africa and the Middle East for tourists. The country has a dedicated Tourist Police force in major cities, and violent crime against tourists is extremely rare.
          </p>
        </div>

        {/* Common Concerns */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Common Concerns (& Reality)</h2>
        <div className="space-y-4 mb-10">
          {[
            { q: "Are the souks/medinas safe?", a: "Yes. The medinas of Marrakech, Fez, and other cities are busy but safe. Petty theft can occur (like any tourist area worldwide), so keep valuables secure. Walking at night in main areas is fine." },
            { q: "What about scams?", a: "Some common ones: unsolicited 'guides' in the medina, inflated prices, and 'my shop is just here' tactics. Politely decline and agree on prices beforehand. Booking with a licensed agency eliminates most issues." },
            { q: "Is it safe for solo female travelers?", a: "Yes, with normal precautions. Dress modestly (covering shoulders and knees), ignore catcalls, and book tours with reputable agencies. Many solo women travel Morocco every year without issues." },
            { q: "Is the food safe?", a: "Moroccan food is generally safe. Stick to busy restaurants, avoid tap water (bottled is cheap and everywhere), and be cautious with raw salads at street stalls." },
            { q: "Is desert travel safe?", a: "Very safe when booked with a licensed operator. Professional drivers know the routes well. Desert camps are well-organized with food, water, and comfortable facilities." },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.q}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Safety Tips */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Top Safety Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Book tours with licensed agencies",
            "Keep copies of your passport",
            "Use registered taxis or transfers",
            "Agree on prices before buying",
            "Drink bottled water only",
            "Dress modestly in rural areas",
            "Carry small change for tips",
            "Learn basic French or Arabic phrases",
            "Keep valuables in a money belt",
            "Have travel insurance",
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {tip}
            </div>
          ))}
        </div>

        {/* Why Book with Us */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Why Booking with a Local Agency Keeps You Safe</h2>
        <div className="space-y-3 mb-10">
          {[
            "Licensed, insured vehicles with experienced local drivers",
            "Professional guides who speak your language",
            "24/7 WhatsApp support during your entire trip",
            "Pre-vetted hotels, riads, and desert camps",
            "We handle logistics — you just enjoy the experience",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <Shield size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Travel Morocco with Confidence</h2>
          <p className="font-body text-muted-foreground mb-6">
            Book with SEE&KNOW — a licensed Moroccan travel agency with 10+ years of experience and 5,000+ happy travelers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#tours"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              Browse Our Tours
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20have%20a%20question%20about%20traveling%20in%20Morocco."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              <Phone size={16} /> Ask Us Anything
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default IsMoroccoSafe;
