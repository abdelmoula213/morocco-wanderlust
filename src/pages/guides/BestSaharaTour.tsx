import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import {
  CheckCircle,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  Phone,
  X,
  Users,
  Shield,

const BestSaharaTour = () => {
  const toc = [
    { id: "why-visit", label: "Why Visit the Sahara Desert?" },
    { id: "types-of-tours", label: "Types of Sahara Tours" },
    { id: "best-3-day-route", label: "The Best 3-Day Route" },
    { id: "how-much", label: "How Much Does It Cost?" },
    { id: "standard-vs-luxury", label: "Standard vs. Luxury — What's the Difference?" },
    { id: "whats-included", label: "What's Included (and What's Not)" },
    { id: "what-to-pack", label: "What to Pack" },
    { id: "best-time", label: "Best Time to Visit" },
    { id: "avoid-traps", label: "How to Avoid Tourist Traps" },
    { id: "insider-tips", label: "Insider Tips from Local Guides" },
    { id: "faq", label: "Frequently Asked Questions" },
  ];

  return (
    <>
      <Helmet>
        <title>Best Sahara Desert Tour from Marrakech (Complete Guide 2026)</title>
        <meta
          name="description"
          content="Complete guide to the best Sahara desert tour from Marrakech. Compare itineraries, prices, tips & what to pack. Book direct for the best price — no middlemen."
        />
        <meta
          name="keywords"
          content="best Sahara desert tour Marrakech, Sahara tour guide 2026, Marrakech to Sahara, Merzouga tour, desert tour Morocco, camel trek Sahara, Erg Chebbi, Morocco desert experience, Sahara camping, Ait Ben Haddou, Ouarzazate, desert tour tips, Morocco travel guide, best desert tour Morocco, Sahara desert from Marrakech"
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={saharaImage}
          alt="Sahara Desert Morocco golden dunes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Travel Guide
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Best Sahara Desert Tour
            <br />
            from Marrakech (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Everything you need to know before booking your Sahara desert adventure.
          </p>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 font-body text-sm mt-4">
            <span className="flex items-center gap-1">
              <Clock size={14} /> 12 min read
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} /> Updated March 2026
            </span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Table of Contents */}
        <div className="bg-secondary rounded-xl p-6 mb-10">
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">In This Guide</h2>
          <ul className="space-y-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-body text-sm text-primary hover:underline block py-1"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Introduction */}
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          The Sahara Desert tour from Marrakech is Morocco's most iconic experience — and for good reason. There's nothing quite like riding a camel into towering golden dunes, watching the sunset paint the sand in shades of fire, and sleeping under a blanket of stars in the middle of the world's largest hot desert.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          But with hundreds of operators offering "Sahara tours," how do you choose the right one? Some cut corners, skip important stops, or use substandard accommodation. In this comprehensive guide, we break down everything: the best routes, honest price comparisons, what's really included, packing essentials, and insider tips from our team of local guides who have led this tour thousands of times.
        </p>

        {/* Section: Why Sahara */}
        <h2 id="why-visit" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Why Visit the Sahara Desert?
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The Erg Chebbi dunes near Merzouga are among the most spectacular landscapes on Earth. These aren't just sandy hills — we're talking about towering dunes reaching up to 150 meters high, stretching as far as the eye can see. The silence is absolute, broken only by the wind whispering across the sand.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Beyond the dunes themselves, the journey there is half the magic. You'll cross the High Atlas Mountains via dramatic mountain passes, visit ancient kasbahs used in Hollywood blockbusters, drive through palm-filled oases, and explore deep gorges carved over millennia. It's not just a desert trip — it's a road trip through Morocco's most diverse and stunning landscapes.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            src={saharaImage}
            alt="Golden Sahara dunes at sunset"
            className="rounded-xl w-full h-48 object-cover"
            loading="lazy"
          />
          <img
            src={aitBenHaddouImage}
            alt="Ait Ben Haddou Kasbah"
            className="rounded-xl w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Fun fact:</strong> Ait Ben Haddou has been a filming location for over 20 movies and TV shows, including Gladiator, Lawrence of Arabia, and Game of Thrones.
          </p>
        </div>

        {/* Types of Tours */}
        <h2 id="types-of-tours" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Types of Sahara Tours
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Not all Sahara tours are created equal. Here's a breakdown of the main options:
        </p>
        <div className="space-y-4 mb-10">
          {[
            {
              type: "3-Day / 2-Night Tour (Most Popular)",
              desc: "The classic option. Covers Ait Ben Haddou, Todra Gorge, camel trek, and one night in the desert. Best balance of time, cost, and experience. This is the tour we recommend for most travelers.",
              recommended: true,
            },
            {
              type: "2-Day / 1-Night Tour",
              desc: "A faster version that skips some stops. You'll still see the desert and ride camels, but you miss Todra Gorge and some scenic valleys. Feels rushed — only choose this if you're extremely short on time.",
            },
            {
              type: "4-Day / 3-Night Tour",
              desc: "A more relaxed pace with extra stops and more time in the desert. Great if you want to explore the Draa Valley or spend extra time sandboarding and exploring around Merzouga.",
            },
            {
              type: "Private Tour",
              desc: "Same itinerary as the shared tour but with your own vehicle and driver. Perfect for couples, families, or anyone wanting flexibility to stop wherever they want. Usually 2-3x the price of shared.",
            },
            ].map((t) => (
            <div key={t.type} className={`bg-card rounded-xl p-5 shadow-warm ${t.recommended ? "border-2 border-accent" : ""}`}>
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-heading text-base font-bold text-foreground">{t.type}</h3>
                {t.recommended && (
                  <span className="text-xs font-body font-semibold text-accent bg-gold-light px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                )}
              </div>
              <p className="font-body text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Best Route */}
        <h2 id="best-3-day-route" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          The Best 3-Day Route
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The classic and most popular route takes 3 days and 2 nights. Here's exactly what you'll see each day:
        </p>
        <div className="space-y-4 mb-10">
          {[
            {
              day: "Day 1",
              title: "Marrakech → Ait Ben Haddou → Dades Valley",
              desc: "Depart early morning, cross the Atlas Mountains via the breathtaking Tizi n'Tichka pass (2,260m altitude). Stop at the UNESCO World Heritage Kasbah of Ait Ben Haddou for a guided visit. Continue through Ouarzazate — 'the Hollywood of Africa.' Arrive at your hotel in Dades Valley by late afternoon. The evening is free to enjoy the stunning valley sunset.",
              time: "~8 hours driving with stops",
            },
            {
              day: "Day 2",
              title: "Todra Gorge → Merzouga → Desert Camp",
              desc: "Morning drive through the spectacular Todra Gorge with its 300-meter canyon walls — one of Morocco's most dramatic natural wonders. Continue through the Ziz Valley oasis, a ribbon of green palm trees cutting through the arid landscape. Arrive in Merzouga by afternoon. Around 4-5 PM, you'll mount your camel for the magical trek into the Erg Chebbi dunes. Watch the sunset, then arrive at your desert camp for a traditional dinner, Berber drumming, and star-filled skies.",
              time: "~6 hours driving + 1.5 hour camel trek",
            },
            {
              day: "Day 3",
              title: "Sahara Sunrise → Return to Marrakech",
              desc: "Wake before dawn (around 5:30 AM) and climb the dune near camp for an unforgettable sunrise — the sky turns from deep purple to gold as light spills over the dunes. After breakfast, ride camels back to Merzouga and begin the scenic return via a different route through the Anti-Atlas. Arrive back in Marrakech by 8-9 PM.",
              time: "~10 hours return journey",
            },
            ].map((item) => (
            <div key={item.day} className="bg-card rounded-xl p-6 shadow-warm">
              <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.day}</p>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground font-body text-xs mb-3">
                <Clock size={12} /> {item.time}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Prices */}
        <h2 id="how-much" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          How Much Does It Cost?
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Prices vary depending on whether you book shared or private, and standard or luxury accommodation. Here's what to expect in 2026:
        </p>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Standard Shared</p>
              <p className="font-heading text-3xl font-bold text-foreground">800 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person (~€75)</p>
            </div>
            <div className="text-center p-4 bg-gold-light rounded-lg border border-accent/30">
              <p className="font-body text-xs text-accent-foreground uppercase tracking-wider mb-1">Luxury</p>
              <p className="font-heading text-3xl font-bold text-foreground">2,000 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person (~€185)</p>
            </div>
          </div>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-4">
          <Star size={12} className="inline text-accent mr-1" />
          Booking direct with a local agency like SEE&KNOW saves you 20-30% compared to international platforms like GetYourGuide or Viator, which add commission fees.
        </p>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <AlertTriangle size={12} className="inline text-accent mr-1" />
            <strong>Price warning:</strong> Be wary of tours advertised under 500 DH — they often skip major stops, use uncomfortable vehicles, or have hidden costs for "optional" activities that should be included.
          </p>
        </div>

        {/* Standard vs Luxury */}
        <h2 id="standard-vs-luxury" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Standard vs. Luxury — What's the Difference?
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The itinerary, transport, and experiences are identical. The difference is purely in accommodation comfort:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-3">Standard Package</h3>
            <ul className="space-y-2">
              {[
                "Basic hotel/riad in Dades Valley",
                "Shared desert camp (6-8 tents)",
                "Shared bathroom facilities",
                "Traditional mattress & blankets",
                "Simple but clean accommodation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-warm border-2 border-accent">
            <h3 className="font-heading text-base font-bold text-foreground mb-3">Luxury Package</h3>
            <ul className="space-y-2">
              {[
                "4-star hotel with pool in Dades",
                "Private luxury desert camp",
                "Private bathroom & hot shower",
                "Comfortable beds with quality linens",
                "Premium dinner with more courses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What's Included */}
        <h2 id="whats-included" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          What's Included (and What's Not)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-3">✅ Included</h3>
            <ul className="space-y-2">
              {[
                "Hotel/riad pickup & drop-off in Marrakech",
                "Air-conditioned minivan or 4x4",
                "2 nights accommodation",
                "Camel trek into the dunes",
                "Dinner & breakfast at desert camp",
                "Guided visit to Ait Ben Haddou",
                "Sahara sunrise experience",
                "English/French-speaking driver",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-body text-sm font-semibold text-destructive uppercase tracking-wider mb-3">❌ Not Included</h3>
            <ul className="space-y-2">
              {[
                "Lunches (expect ~40-60 DH per meal)",
                "Drinks and snacks",
                "Tips for driver/guide (optional)",
                "Personal expenses and souvenirs",
                "Travel insurance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <X size={14} className="text-destructive mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What to Pack */}
        <h2 id="what-to-pack" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          What to Pack
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The desert is hot during the day and surprisingly cold at night (it can drop to 5°C in winter). Here's your essential packing list:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Warm layers — fleece or jacket for nights",
            "Sunscreen SPF 50+ & sunglasses",
            "Comfortable closed shoes (sand gets everywhere)",
            "Camera & extra battery (cold drains batteries)",
            "Cash in small notes (ATMs are rare)",
            "Scarf or shemagh (protection from sand/wind)",
            "Refillable water bottle (1.5L minimum)",
            "Snacks for long drives",
            "Phone charger & power bank",
            "Toiletries (basic ones at camp)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* Best Time */}
        <h2 id="best-time" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Best Time to Visit the Sahara
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The Sahara has extreme temperatures — timing matters a lot:
        </p>
        <div className="space-y-3 mb-4">
          {[
            {
              season: "🌸 Spring (March–May)",
              temp: "20–30°C days, 10–15°C nights",
              verdict: "Perfect. Warm, pleasant, occasional wildflowers in the desert.",
            },
            {
              season: "🍂 Autumn (Sept–Nov)",
              temp: "22–32°C days, 12–18°C nights",
              verdict: "Excellent. Clear skies, comfortable temperatures, fewer crowds than spring.",
            },
            {
              season: "❄️ Winter (Dec–Feb)",
              temp: "15–22°C days, 0–8°C nights",
              verdict: "Good but cold at night. Pack very warm layers. Crystal-clear stargazing.",
            },
            {
              season: "☀️ Summer (June–Aug)",
              temp: "40–50°C days, 25–30°C nights",
              verdict: "Not recommended. Extreme heat makes the experience uncomfortable.",
            },
            ].map((s) => (
            <div key={s.season} className="bg-card rounded-lg p-4 shadow-warm">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-body text-sm font-bold text-foreground">{s.season}</h3>
                <span className="font-body text-xs text-muted-foreground">{s.temp}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{s.verdict}</p>
            </div>
          ))}
        </div>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Our recommendation:</strong> February to April or October to November for the perfect balance of weather, crowd size, and prices.
          </p>
        </div>

        {/* Avoid Tourist Traps */}
        <h2 id="avoid-traps" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          How to Avoid Tourist Traps
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Unfortunately, the popularity of Sahara tours has attracted some less-than-honest operators. Here's what to watch out for:
        </p>
        <div className="space-y-3 mb-10">
          {[
            {
              trap: "Bait-and-switch pricing",
              avoid: "Some agencies advertise low prices, then add 'supplements' for things that should be included (like the camel ride or camp dinner). Always confirm the full price and what's included in writing before booking.",
            },
            {
              trap: "Skipping Ait Ben Haddou",
              avoid: "Cheaper tours skip this UNESCO site to save time and fuel. It's one of Morocco's highlights — make sure it's on the itinerary.",
            },
            {
              trap: "Overcrowded camps",
              avoid: "Some budget camps pack 30-50 people into shared spaces with one toilet. Ask about camp capacity before booking.",
            },
            {
              trap: "Old or unsafe vehicles",
              avoid: "Book with licensed agencies that use maintained, insured vehicles. Your driver should have a professional tourism license.",
            },
            {
              trap: "Fake 'Sahara' tours to Zagora",
              avoid: "Zagora is technically pre-Saharan desert with much smaller dunes. The real Sahara experience is at Erg Chebbi (Merzouga) — make sure your tour goes there.",
            },
            ].map((item) => (
            <div key={item.trap} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-body text-sm font-bold text-foreground mb-1">⚠️ {item.trap}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.avoid}</p>
            </div>
          ))}
        </div>

        {/* Insider Tips */}
        <h2 id="insider-tips" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Insider Tips from Local Guides
        </h2>
        <div className="space-y-3 mb-10">
          {[
            "Book direct with a local agency — you'll save 20-30% and get better service than through international platforms.",
            "Sit on the left side of the van on Day 1 for the best mountain views during the Atlas crossing.",
            "Bring a headlamp for the desert camp — it's pitch dark at night and you'll need it for the bathroom.",
            "Ask your driver to stop at the panoramic viewpoints — they know all the best photo spots that aren't on any map.",
            "The luxury camp upgrade is worth it for couples — private tent, real bed, and a hot shower after a dusty day.",
            "Download offline maps before the trip — there's no cell service in much of the desert.",
            "Tip your camel handler separately (20-50 DH) — they're usually local Berber families, not the tour company.",
            "Bring a small daypack for the camel trek — your main luggage stays in the vehicle.",
            ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <AlertTriangle size={14} className="text-accent mt-0.5 shrink-0" />
              {tip}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="faq" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: "Is the camel ride difficult?",
              a: "Not at all. The camels are gentle and experienced. The ride is about 1-1.5 hours each way. It can be a bit uncomfortable if you're not used to it, but it's a highlight of the trip. You can also walk alongside instead.",
            },
            {
              q: "Can I do this tour with kids?",
              a: "Yes! Children love the camel ride and desert camp. We recommend ages 4+ for comfort. Kids under 12 get a discount.",
            },
            {
              q: "What if I get motion sickness?",
              a: "The mountain roads are winding, especially the Tizi n'Tichka pass. Bring motion sickness medication and sit in the front of the vehicle. Your driver will make regular stops.",
            },
            {
              q: "Is there WiFi in the desert?",
              a: "Most camps don't have WiFi — and that's part of the magic. Embrace the digital detox! Your phone will have signal again in Merzouga.",
            },
            {
              q: "Can I book last minute?",
              a: "Yes, we often have availability for next-day departures. WhatsApp us and we'll check immediately.",
            },
            {
              q: "What's the cancellation policy?",
              a: "Free cancellation up to 24 hours before departure. No questions asked, full refund.",
            },
            ].map((item) => (
            <div key={item.q} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.q}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Ready to Book Your Sahara Adventure?</h2>
          <p className="font-body text-muted-foreground mb-2">
            Book directly with SEE&KNOW for the best price. No middlemen, no hidden fees.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            ✅ Pay on arrival · ✅ Free cancellation · ✅ Hotel pickup included
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/sahara-desert-tour"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Tour Details & Prices
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

        {/* Related Guides */}
        <div className="mt-12 pt-10 border-t border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/guides/3-days-sahara-desert-tour-guide" className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group">
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">3 Days Sahara Desert Tour Guide</h4>
              <p className="font-body text-xs text-muted-foreground mt-1">Detailed day-by-day itinerary with insider tips</p>
            </Link>
            <Link to="/guides/is-morocco-safe-for-tourists" className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group">
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">Is Morocco Safe for Tourists?</h4>
              <p className="font-body text-xs text-muted-foreground mt-1">Honest safety guide for first-time visitors</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BestSaharaTour;
