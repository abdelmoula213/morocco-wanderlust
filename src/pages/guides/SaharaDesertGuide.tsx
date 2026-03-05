import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import { CheckCircle, Clock, MapPin, Phone, Star } from "lucide-react";

const SaharaDesertGuide = () => {
  return (
    <>
      <Helmet>
        <title>3 Days Sahara Desert Tour Guide – Itinerary, Tips & Prices (2026)</title>
        <meta name="description" content="Day-by-day guide to the 3-day Sahara desert tour from Marrakech. Full itinerary, prices, what to expect, packing tips & how to book the best deal in 2026." />
        <meta name="keywords" content="3 day Sahara desert tour guide, Sahara itinerary, Merzouga desert guide, Morocco 3 day tour, Sahara camping guide, desert tour packing list, Ait Ben Haddou guide, Todra Gorge, Dades Valley, camel trek guide, Morocco travel tips, Sahara desert experience, desert tour itinerary, Marrakech desert trip, Morocco adventure guide" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={aitBenHaddouImage} alt="Ait Ben Haddou Kasbah at golden hour" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Complete Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            3 Days Sahara Desert<br />Tour Guide (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Your complete day-by-day guide to Morocco's most epic adventure.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
          Planning a 3-day Sahara desert tour from Marrakech? This comprehensive guide covers the full itinerary day-by-day, what's included, what to bring, and how to get the best price.
        </p>

        {/* Day-by-day detailed guide */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>

        {[
          {
            day: "Day 1", title: "Marrakech → Atlas Mountains → Ait Ben Haddou → Dades Valley",
            time: "~8 hours driving",
            content: "You'll depart Marrakech early morning and cross the stunning High Atlas Mountains via the Tizi n'Tichka pass (2,260m). The winding road offers incredible views of Berber villages clinging to mountainsides. After a stop at the UNESCO World Heritage Kasbah of Ait Ben Haddou — filming location for Gladiator and Game of Thrones — you'll continue through Ouarzazate to the Dades Valley for your overnight stay.",
            highlights: ["Tizi n'Tichka mountain pass", "Ait Ben Haddou UNESCO site", "Ouarzazate – Hollywood of Africa", "Dades Valley sunset"],
          },
          {
            day: "Day 2", title: "Todra Gorge → Erfoud → Merzouga → Sahara Desert Camp",
            time: "~6 hours driving + camel trek",
            content: "The most exciting day begins with the spectacular Todra Gorge — towering 300m canyon walls. You'll then drive through the Ziz Valley oasis to Merzouga, gateway to the Erg Chebbi sand dunes. In the late afternoon, you'll mount camels for a magical trek into the golden dunes. Watch the sunset paint the sand in shades of orange and red before arriving at your desert camp for dinner, drumming, and stargazing.",
            highlights: ["Todra Gorge canyon", "Ziz Valley palm oasis", "Camel trek into Erg Chebbi", "Desert camp under the stars"],
          },
          {
            day: "Day 3", title: "Sahara Sunrise → Return to Marrakech",
            time: "~10 hours return",
            content: "Wake before dawn to witness a breathtaking sunrise over the Sahara dunes — one of Morocco's most iconic moments. After breakfast at camp, ride camels back to Merzouga and begin the scenic return to Marrakech via a different route through Ouarzazate. You'll arrive back in Marrakech by evening.",
            highlights: ["Sahara sunrise from the dunes", "Morning camel ride", "Scenic return route", "Arrive Marrakech by evening"],
          },
        ].map((day, i) => (
          <div key={i} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider">{day.day}</p>
                <h3 className="font-heading text-lg font-bold text-foreground">{day.title}</h3>
              </div>
            </div>
            <div className="ml-[52px]">
              <div className="flex items-center gap-2 text-muted-foreground font-body text-xs mb-3">
                <Clock size={12} /> {day.time}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">{day.content}</p>
              <div className="grid grid-cols-2 gap-2">
                {day.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* What's Included */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What's Included</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {["Hotel/riad pickup & drop-off", "Air-conditioned transport", "2 nights accommodation", "Camel trek in Merzouga", "Dinner & breakfast at camp", "English-speaking driver", "Ait Ben Haddou guided visit", "Sahara sunrise experience"].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </div>
          ))}
        </div>

        {/* Best Time */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Best Time to Go</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The best months for a Sahara tour are <strong>October to April</strong> when temperatures are comfortable (15–25°C during the day). Summer months (June–August) can reach 45°C+ and are not recommended. Spring (March–April) offers the most pleasant weather and blooming desert flowers.
        </p>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Pro tip:</strong> February to April is the sweet spot — warm days, cool nights, and fewer crowds.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Book Your 3-Day Sahara Tour</h2>
          <p className="font-body text-muted-foreground mb-6">
            From 800 DH per person. Pay on arrival, free cancellation up to 24h before.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/sahara-desert-tour"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Prices & Book
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20the%203-Day%20Sahara%20Tour."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:bg-secondary/80 transition-all duration-300"
            >
              <Phone size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default SaharaDesertGuide;
