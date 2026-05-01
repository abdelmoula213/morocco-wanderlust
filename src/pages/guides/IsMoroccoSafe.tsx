import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-morocco.jpg";
import { CheckCircle, Shield, Phone, Star, Users, Clock } from "lucide-react";

const IsMoroccoSafe = () => {
  return (
    <>
      <Helmet>
        <title>
          Is Morocco Safe for Tourists? (2026 Safety Guide) | SK Morocco
        </title>
        <meta
          name="description"
          content="Is Morocco safe for tourists in 2026? Honest safety guide covering scams, solo female travel, transport, health tips & how to stay safe in Marrakech and beyond."
        />
        <meta
          name="keywords"
          content="is Morocco safe, Morocco safety guide, Morocco travel safety, Marrakech safe for tourists, Morocco solo female travel, Morocco scams, Morocco health tips, Morocco travel advice 2026, safe in Morocco, Morocco tourist safety, Marrakech safety, Morocco crime, Morocco travel tips, visiting Morocco, Morocco for first timers"
        />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Morocco street scene Marrakech"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Safety Guide
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Is Morocco Safe
            <br />
            for Tourists? (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            An honest, practical safety guide from a local Moroccan travel
            agency.
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
          <h2 className="font-heading text-lg font-bold text-foreground mb-3">
            In This Guide
          </h2>
          <ul className="space-y-2">
            {[
              { title: "Overall Safety Rating", id: "overall-safety-rating" },
              { title: "Safety by City", id: "safety-by-city" },
              { title: "Common Scams & How to Avoid Them", id: "common-scams" },
              {
                title: "Solo Female Travel in Morocco",
                id: "solo-female-travel",
              },
              { title: "Transport Safety", id: "transport-safety" },
              { title: "Food & Water Safety", id: "food-water-safety" },
              { title: "Health & Medical", id: "health-medical" },
              {
                title: "Desert & Mountain Safety",
                id: "desert-mountain-safety",
              },
              { title: "Top Safety Tips", id: "top-safety-tips" },
              {
                title: "Why a Local Agency Keeps You Safe",
                id: "local-agency-safety",
              },
              { title: "Emergency Contacts", id: "emergency-contacts" },
              { title: "Frequently Asked Questions", id: "faq" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-body text-sm text-primary hover:underline cursor-pointer"
                >
                  {i + 1}. {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          <strong>"Is Morocco safe?"</strong> is the number one question we get
          from first-time visitors. As a local travel agency based in Marrakech
          with over 10 years of experience hosting international travelers,
          we're going to give you an honest, no-sugarcoating answer.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-10">
          <strong>The short answer: Yes, Morocco is safe for tourists.</strong>{" "}
          Morocco welcomes over 14 million visitors a year and has invested
          heavily in tourism infrastructure and security. The government
          considers tourism a national priority and has dedicated resources to
          keeping visitors safe. Like any popular destination, awareness and
          common sense go a long way — and this guide will give you everything
          you need.
        </p>

        {/* Overall Safety */}
        <h2
          id="overall-safety-rating"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Overall Safety Rating
        </h2>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-terracotta-light flex items-center justify-center">
              <Shield size={28} className="text-primary" />
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                Very Safe
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Comparable to most Southern European destinations
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Morocco ranks among the safest countries in Africa and the Middle
            East for tourists. The country has a dedicated Tourist Police force
            (Brigade Touristique) in all major cities, CCTV in medinas and
            tourist areas, and a strong security presence throughout. Violent
            crime against tourists is extremely rare — the main concerns are
            petty theft and scams, similar to any popular tourist destination
            worldwide.
          </p>
        </div>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Context:</strong> The Global Peace Index ranks Morocco safer
            than France, the USA, and the UK. The UK Foreign Office rates
            Morocco as safe for travel with normal precautions.
          </p>
        </div>

        {/* Safety by City */}
        <h2
          id="safety-by-city"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Safety by City
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              city: "Marrakech",
              rating: "Very Safe",
              desc: "Morocco's most visited city. Heavy police presence in the medina and tourist areas. The main square (Jemaa el-Fnaa) is well-lit and busy until late. Main concerns: persistent sellers in the souks and unofficial 'guides.' Solution: a firm 'La shukran' (no thank you) works wonders.",
            },
            {
              city: "Fez",
              rating: "Very Safe",
              desc: "The oldest medina in the world is a labyrinth — getting lost is inevitable but not dangerous. Tourist Police are positioned at key junctions. Watch for 'helpful' locals who offer to guide you, then expect payment.",
            },
            {
              city: "Chefchaouen",
              rating: "Extremely Safe",
              desc: "The famous 'Blue City' is one of the safest places in Morocco. Small, walkable, and very tourist-friendly. Locals are welcoming and the atmosphere is relaxed.",
            },
            {
              city: "Essaouira",
              rating: "Extremely Safe",
              desc: "Relaxed, bohemian coastal town. Very tourist-friendly with minimal hassle. One of the most comfortable Moroccan cities for first-time visitors.",
            },
            {
              city: "Sahara Desert (Merzouga)",
              rating: "Very Safe",
              desc: "Desert areas are very safe when traveling with a licensed operator. Professional drivers know the routes well. Camps are organized and comfortable. No safety concerns beyond normal desert precautions (sun, heat, hydration).",
            },
            {
              city: "Atlas Mountains",
              rating: "Very Safe",
              desc: "Mountain villages are extremely safe and welcoming. Berber communities are known for their hospitality. The main safety consideration is the hiking terrain — wear appropriate shoes and follow your guide.",
            },
          ].map((item) => (
            <div key={item.city} className="bg-card rounded-xl p-5 shadow-warm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {item.city}
                </h3>
                <span className="font-body text-xs font-semibold text-primary bg-terracotta-light px-2 py-0.5 rounded-full">
                  {item.rating}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Common Scams */}
        <h2
          id="common-scams"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Common Scams & How to Avoid Them
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Let's be honest — scams exist in Morocco, just like in Paris, Rome,
          Barcelona, or New York. Here are the most common ones and how to
          handle them:
        </p>
        <div className="space-y-4 mb-10">
          {[
            {
              scam: "The 'Friendly Guide'",
              how: "Someone approaches you in the medina offering to help you find your riad or show you 'the best shop.' They'll then expect payment (sometimes aggressively).",
              avoid:
                "Politely decline with 'La shukran.' Use Google Maps offline for navigation. If you're genuinely lost, ask a shopkeeper instead.",
            },
            {
              scam: "Inflated Prices",
              how: "Sellers in the souks quote prices 3-5x the actual value, especially if you look like a tourist.",
              avoid:
                "Always haggle. Start at about 30-40% of the asking price. Walk away if the price doesn't come down — they'll often call you back with a better offer.",
            },
            {
              scam: "The Photo Trap",
              how: "Someone with a snake, monkey, or in traditional costume invites you to take a photo, then demands money (50-100 DH).",
              avoid:
                "Don't take photos unless you're willing to pay 10-20 DH. If they approach you, a firm 'no' works.",
            },
            {
              scam: "Taxi Overcharging",
              how: "Some taxi drivers won't use the meter or will take longer routes.",
              avoid:
                "Insist on the meter (petit taxi). For longer journeys, agree on the price before getting in. Airport transfers: book through your hotel.",
            },
            {
              scam: "'My shop is just here'",
              how: "A friendly local starts a conversation, then casually mentions their family's shop is nearby and they'd love to show you. You end up in a high-pressure selling situation.",
              avoid:
                "If someone is being unusually friendly and offering to show you something, they likely want to sell you something. Politely decline.",
            },
            {
              scam: "Wrong Change",
              how: "In busy markets, sellers might give you wrong change, hoping you won't notice.",
              avoid:
                "Know the currency. 1 dirham = 100 centimes. Bills come in 20, 50, 100, 200. Count your change before walking away.",
            },
          ].map((item) => (
            <div key={item.scam} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-body text-sm font-bold text-foreground mb-1">
                ⚠️ {item.scam}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-2">
                <strong>How it works:</strong> {item.how}
              </p>
              <p className="font-body text-xs text-primary">
                <strong>How to avoid:</strong> {item.avoid}
              </p>
            </div>
          ))}
        </div>

        {/* Solo Female Travel */}
        <h2
          id="solo-female-travel"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Solo Female Travel in Morocco
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Morocco is safe for solo female travelers, but it does require more
          awareness than some European destinations. Many thousands of women
          travel Morocco alone every year without any issues. Here's what to
          know:
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Dress modestly — covering shoulders and knees reduces unwanted attention significantly. In cities like Marrakech and Fez, loose-fitting clothes that cover arms and legs are ideal.",
            "Catcalling can happen, especially in busy areas. The best response is to ignore it completely — engaging (even negatively) often encourages more.",
            "Book tours with reputable agencies rather than accepting offers from strangers. This eliminates most uncomfortable situations.",
            "Stay in well-reviewed riads in the medina — they're safe, central, and the staff can help with any concerns.",
            "Essaouira and Chefchaouen are particularly comfortable for solo female travelers — relaxed atmospheres with minimal hassle.",
            "Evening walks in main areas (Jemaa el-Fnaa, main medina streets) are perfectly safe. Avoid dark, empty alleys late at night.",
            "Connect with other solo female travelers — there are active Facebook groups and forums with real-time advice.",
          ].map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
            >
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {tip}
            </div>
          ))}
        </div>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Our advice:</strong> Morocco is enriching and safe for solo
            female travelers. The key is dressing modestly, being confident, and
            booking with trusted agencies. Most women report feeling welcome and
            having an amazing experience.
          </p>
        </div>

        {/* Transport Safety */}
        <h2
          id="transport-safety"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Transport Safety
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              type: "Taxis (Petit Taxi)",
              safety: "Safe",
              desc: "Small city taxis are generally safe. Insist on the meter. In Marrakech, the minimum fare is about 7 DH. Avoid taxis that are already occupied. Late at night, agree the fare before getting in.",
            },
            {
              type: "Grand Taxis (Shared)",
              safety: "Safe but crowded",
              desc: "Shared taxis between cities seat 6 passengers in a car designed for 4. Safe but uncomfortable. Good for short intercity trips.",
            },
            {
              type: "Tour Vehicles",
              safety: "Very Safe",
              desc: "Licensed tour operators use modern, insured vehicles with professional drivers. This is the safest and most comfortable way to travel between cities.",
            },
            {
              type: "Trains (ONCF)",
              safety: "Very Safe",
              desc: "Morocco's train network is modern and reliable. First class is comfortable and affordable. The Casablanca-Marrakech high-speed line is excellent.",
            },
            {
              type: "Buses (CTM/Supratours)",
              safety: "Safe",
              desc: "Premium bus companies are comfortable and reliable. Avoid local buses, which can be overcrowded and uncomfortable.",
            },
            {
              type: "Driving Yourself",
              safety: "Moderate",
              desc: "Moroccan driving can be chaotic — especially in cities. Mountain roads are winding. We generally recommend hiring a driver/booking tours rather than self-driving unless you're an experienced driver.",
            },
          ].map((item) => (
            <div key={item.type} className="bg-card rounded-xl p-5 shadow-warm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-base font-bold text-foreground">
                  {item.type}
                </h3>
                <span className="font-body text-xs font-semibold text-primary bg-terracotta-light px-2 py-0.5 rounded-full">
                  {item.safety}
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Food & Water */}
        <h2 id="food-water-safety" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Food & Water Safety
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Moroccan cuisine is one of the best in the world — tagine, couscous,
          pastilla, and fresh mint tea are all must-tries. Here's how to eat
          safely:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Drink bottled water only (cheap everywhere — 5-7 DH for 1.5L)",
            "Eat at busy restaurants — high turnover means fresh food",
            "Street food at Jemaa el-Fnaa is generally safe — choose busy stalls",
            "Be cautious with raw salads at very basic restaurants",
            "Wash or peel fruit before eating",
            "Avoid tap water for drinking and ice in drinks",
            "Moroccan bread (khobz) is baked fresh daily — always safe",
            "Tagine is always safe — it's slow-cooked at high temperature",
          ].map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-2 font-body text-sm text-foreground"
            >
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {tip}
            </div>
          ))}
        </div>

        {/* Health */}
        <h2 id= "health-medical" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Health & Medical
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          No special vaccinations are required for Morocco. The country has a
          good healthcare system in major cities:
        </p>
        <ul className="space-y-2 mb-10">
          {[
            "Pharmacies are everywhere and pharmacists speak French (often English too). They can advise on minor health issues without a doctor visit.",
            "For serious issues, private clinics in Marrakech, Casablanca, and Rabat have international-standard care.",
            "Travel insurance is strongly recommended — it's inexpensive and covers medical evacuation if needed.",
            "Common traveler complaints: mild stomach issues (usually resolves in 24h), sunburn, and dehydration. Drink plenty of water.",
            "Bring any prescription medications you need — while pharmacies are well-stocked, specific brands may not be available.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
            >
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {item}
            </li>
          ))}
        </ul>

        {/* Desert & Mountain Safety */}
        <h2  id="desert-mountain-safety" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Desert & Mountain Safety
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              🏜️ Sahara Desert
            </h3>
            <ul className="space-y-2">
              {[
                "Always travel with a licensed operator",
                "Stay hydrated — 2-3L water per day",
                "Use SPF 50+ sunscreen and cover up",
                "The camel trek is safe for all ages",
                "Camps have food, water, and facilities",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary mt-0.5 shrink-0"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              ⛰️ Atlas Mountains
            </h3>
            <ul className="space-y-2">
              {[
                "Hire a local Berber guide",
                "Wear proper footwear with grip",
                "Mountain weather changes fast — bring layers",
                "Day trips don't require special fitness",
                "Rivers can swell after rain — follow guide advice",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary mt-0.5 shrink-0"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Safety Tips */}
        <h2  id= "top-safety-tips" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Top Safety Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Book tours with licensed agencies",
            "Keep copies of your passport (photo on phone)",
            "Use registered taxis or hotel transfers",
            "Agree on prices before any transaction",
            "Drink bottled water only",
            "Dress modestly, especially in rural areas",
            "Carry small change for tips (10-20 DH)",
            "Learn 'La shukran' (no thank you)",
            "Keep valuables in a hotel safe or money belt",
            "Have comprehensive travel insurance",
            "Share your itinerary with someone at home",
            "Save the Tourist Police number: 19",
          ].map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-2 font-body text-sm text-foreground"
            >
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {tip}
            </div>
          ))}
        </div>

        {/* Why Book with Us */}
        <h2  id= "local-agency-safety"className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Why Booking with a Local Agency Keeps You Safe
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The single best thing you can do for your safety in Morocco is book
          with a licensed, reputable local agency. Here's why:
        </p>
        <div className="space-y-3 mb-10">
          {[
            "Licensed, insured vehicles with experienced local drivers who know every road",
            "Professional guides who speak English, French, Arabic, and Berber",
            "24/7 WhatsApp support — message us anytime, day or night, during your trip",
            "Pre-vetted hotels, riads, and desert camps that meet our quality standards",
            "We handle all logistics — no haggling with taxis, no negotiating with strangers",
            "Established relationships with local communities — you're treated as a guest, not a tourist",
            "If anything goes wrong, we're one call away and can solve problems instantly",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
            >
              <Shield size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {item}
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <h2  id= "emergency-contacts" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Emergency Contacts
        </h2>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Tourist Police", number: "19" },
              { label: "Fire / Ambulance", number: "15" },
              { label: "Gendarmerie (Rural)", number: "177" },
              { label: "SEE&KNOW WhatsApp", number: "+212 766 776 545" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between p-3 bg-secondary rounded-lg"
              >
                <span className="font-body text-sm text-foreground">
                  {c.label}
                </span>
                <span className="font-heading text-sm font-bold text-primary">
                  {c.number}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <h2  id= "faq" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: "Is Marrakech safe at night?",
              a: "The main areas (Jemaa el-Fnaa, main medina streets, Gueliz) are busy and well-lit until late. Avoid dark, empty alleys at night, just as you would in any city. The riad districts are safe — your riad can arrange a taxi if needed.",
            },
            {
              q: "Should I travel with a guide?",
              a: "For cities, a guide isn't necessary — the medinas are safe to explore alone. For the desert, mountains, and day trips, we strongly recommend booking with a guide/agency. It's safer, more informative, and you'll see things you'd never find alone.",
            },
            {
              q: "Is Morocco safe for families with children?",
              a: "Absolutely. Morocco is a family-friendly country that loves children. You'll find Moroccans going out of their way to be kind to kids. Just be mindful of the usual things: hydration, sun protection, and hand-washing.",
            },
            {
              q: "What about terrorism?",
              a: "Morocco has one of the most effective counter-terrorism programs in the region. Major attacks are extremely rare, and security is taken very seriously. The country has been stable and safe for tourists for many years.",
            },
            {
              q: "Is it safe to drink alcohol?",
              a: "Yes, alcohol is legal and available in licensed bars, restaurants, and hotels. It's not served in the medina areas or traditional restaurants, but you'll find it in Gueliz (the modern part of Marrakech) and tourist hotels. Drinking in public is not allowed.",
            },
            {
              q: "Do I need a visa?",
              a: "Most Western countries (USA, UK, EU, Canada, Australia) get 90 days visa-free on arrival. Just bring a valid passport with at least 6 months validity. Check your country's specific requirements before traveling.",
            },
          ].map((item) => (
            <div key={item.q} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {item.q}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Travel Morocco with Confidence
          </h2>
          <p className="font-body text-muted-foreground mb-2">
            Book with SEE&KNOW — a licensed Moroccan travel agency with 10+
            years of experience and 5,000+ happy travelers.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            ✅ Licensed & insured · ✅ 24/7 WhatsApp support · ✅ Local expert
            team
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

        {/* Related Guides */}
        <div className="mt-12 pt-10 border-t border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            Related Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/guides/top-10-things-to-do-marrakech"
              className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group"
            >
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Top 10 Things to Do in Marrakech
              </h4>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Plan your perfect Marrakech itinerary
              </p>
            </Link>
            <Link
              to="/guides/best-sahara-desert-tour-marrakech"
              className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group"
            >
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Best Sahara Desert Tour
              </h4>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Complete guide to Morocco's top experience
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default IsMoroccoSafe;
