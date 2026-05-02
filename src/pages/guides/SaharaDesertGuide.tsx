import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import saharaImage from "@/assets/sahara-desert.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import { CheckCircle, Clock, Phone, Star, Users, X, AlertTriangle } from "lucide-react";

const SaharaDesertGuide = () => {
  return (
    <>
      <Helmet>
        <title>
          3 Days Sahara Desert Tour Guide – Itinerary, Tips & Prices (2026)
        </title>
        <meta
          name="description"
          content="Day-by-day guide to the 3-day Sahara desert tour from Marrakech. Full itinerary, prices, what to expect, packing tips & how to book the best deal in 2026."
        />
        <meta
          name="keywords"
          content="3 day Sahara desert tour guide, Sahara itinerary, Merzouga desert guide, Morocco 3 day tour, Sahara camping guide, desert tour packing list, Ait Ben Haddou guide, Todra Gorge, Dades Valley, camel trek guide, Morocco travel tips, Sahara desert experience, desert tour itinerary, Marrakech desert trip, Morocco adventure guide"
        />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={aitBenHaddouImage}
          alt="Ait Ben Haddou Kasbah at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Complete Guide
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            3 Days Sahara Desert
            <br />
            Tour Guide (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Your complete day-by-day guide to Morocco's most epic adventure.
          </p>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 font-body text-sm mt-4">
            <span className="flex items-center gap-1">
              <Clock size={14} /> 15 min read
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
            What's in This Guide
          </h2>

          <ul className="space-y-2">
            {[
              {
                title: "Overview: What Is the 3-Day Sahara Tour?",
                id: "overview",
              },
              { title: "Day 1: Marrakech to Dades Valley", id: "day-1" },
              {
                title: "Day 2: Todra Gorge to Sahara Desert Camp",
                id: "day-2",
              },
              { title: "Day 3: Sunrise & Return to Marrakech", id: "day-3" },
              { title: "What's Included in the Price", id: "included" },
              {
                title: "Accommodation: Hotels & Desert Camps",
                id: "accommodation",
              },
              { title: "The Camel Trek Experience", id: "camel-trek" },
              {
                title: "Desert Camp Life: What to Expect",
                id: "desert-camp-life",
              },
              { title: "Best Time to Go", id: "best-time" },
              { title: "What to Pack (Complete List)", id: "what-to-pack" },
              { title: "Tips for Photographers", id: "photography-tips" },
              { title: "Frequently Asked Questions", id: "faq" },
            ].map((item, i) => (
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
          Planning a 3-day Sahara desert tour from Marrakech? You're about to
          embark on Morocco's most unforgettable journey — a 1,000+ kilometer
          road trip through ancient mountain passes, dramatic gorges, palm
          oases, and finally, the golden dunes of the Sahara.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-10">
          This guide covers every detail: what happens each day, hour by hour,
          what's included in the price, what the accommodation is really like,
          what to pack, and honest tips from guides who run this tour every
          single week.
        </p>

        {/* Overview */}
        <h2
          id="overview"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Overview: What Is the 3-Day Sahara Tour?
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The 3-day Sahara tour is Morocco's most popular multi-day excursion.
          Starting from Marrakech, you'll travel southeast across the High Atlas
          Mountains, through the dramatic landscapes of southern Morocco, all
          the way to the Erg Chebbi sand dunes near Merzouga — the gateway to
          the Sahara Desert.
        </p>
        <div className="bg-card rounded-xl p-5 shadow-warm mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { label: "Total Distance", value: "1,000+ km" },
              { label: "Duration", value: "3 days / 2 nights" },
              { label: "Max Altitude", value: "2,260m" },
              { label: "Dune Height", value: "Up to 150m" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading text-xl font-bold text-foreground">
                  {s.value}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Day-by-day detailed guide */}
        <h2
          id="overview"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6"
        >
          Day-by-Day Itinerary
        </h2>

        {[
          {
            day: "Day 1",
            title:
              "Marrakech → Atlas Mountains → Ait Ben Haddou → Dades Valley",
            time: "~8 hours driving with stops",
            sections: [
              {
                subtitle: "Morning: Crossing the Atlas Mountains",
                text: "Your driver picks you up from your riad or hotel in Marrakech around 7:00-8:00 AM. The journey begins with one of Morocco's most scenic drives — the winding road up to the Tizi n'Tichka pass at 2,260 meters. Along the way, you'll see Berber villages perched on mountainsides, terraced fields, and (in winter) snow-capped peaks. There are several stops for photos and refreshments along the way.",
              },
              {
                subtitle: "Midday: Ait Ben Haddou",
                text: "After descending from the pass, you'll arrive at the iconic Kasbah of Ait Ben Haddou — a UNESCO World Heritage site and one of Morocco's most photographed landmarks. This fortified village has been a backdrop for Gladiator, Game of Thrones, Lawrence of Arabia, and many more films. You'll have about 1-1.5 hours to explore with a local guide, cross the river (by foot or donkey), and take photos from the panoramic viewpoint.",
              },
              {
                subtitle: "Afternoon: Ouarzazate & Dades Valley",
                text: "Continue through Ouarzazate — known as the 'Hollywood of Africa' thanks to its famous Atlas Studios. Then drive through the stunning Rose Valley (if visiting in April, you'll see the rose harvest) and the Road of a Thousand Kasbahs. Arrive at your hotel in the Dades Valley by late afternoon. The evening is free to explore the valley, enjoy sunset, and have dinner at your hotel.",
              },
            ],
            highlights: [
              "Tizi n'Tichka mountain pass (2,260m)",
              "Ait Ben Haddou UNESCO Kasbah",
              "Ouarzazate – Atlas Studios",
              "Rose Valley & Road of 1,000 Kasbahs",
              "Dades Valley sunset",
            ],
          },
          {
            day: "Day 2",
            title: "Todra Gorge → Erfoud → Merzouga → Sahara Desert Camp",
            time: "~6 hours driving + 1.5h camel trek",
            sections: [
              {
                subtitle: "Morning: Todra Gorge",
                text: "After breakfast, drive to the spectacular Todra Gorge — one of Morocco's most dramatic natural wonders. Sheer canyon walls rise 300 meters on both sides, with just a narrow passage between them. You'll have time to walk through the gorge, take photos, and enjoy the cool shade. Rock climbers from around the world come here to scale the walls.",
              },
              {
                subtitle: "Midday: Journey Through the Desert",
                text: "The drive from Todra to Merzouga takes you through increasingly arid landscapes. You'll pass through Erfoud — known for its fossil-rich limestone — and the Ziz Valley, a stunning ribbon of palm trees cutting through the desert. As you approach Merzouga, you'll catch your first glimpse of the Erg Chebbi dunes on the horizon — a truly magical moment.",
              },
              {
                subtitle: "Afternoon & Evening: The Sahara Experience",
                text: "Around 4:00-5:00 PM, you'll mount your camel at the edge of the dunes for the trek into the Sahara. The ride takes about 1-1.5 hours, winding between towering golden dunes that shift colors from gold to orange to deep red as the sun sets. Arriving at camp, you'll be greeted with mint tea, followed by a traditional Berber dinner. After dinner, your hosts will play traditional Berber drums around a campfire. Then comes the best part — lying on the dunes and gazing up at millions of stars with zero light pollution.",
              },
            ],
            highlights: [
              "Todra Gorge (300m canyon walls)",
              "Ziz Valley palm oasis",
              "First view of Erg Chebbi dunes",
              "Camel trek into the Sahara",
              "Sunset over the dunes",
              "Berber dinner & drumming",
              "Stargazing in the desert",
            ],
          },
          {
            day: "Day 3",
            title: "Sahara Sunrise → Return to Marrakech",
            time: "~10 hours return journey",
            sections: [
              {
                subtitle: "Early Morning: Sahara Sunrise",
                text: "You'll wake around 5:30 AM (your guide will knock on your tent). Climb the dune nearest to camp — it takes about 10-15 minutes — and watch one of nature's most spectacular shows. The sky transitions from deep indigo to purple, then pink, then gold as the sun appears over the dune horizon. The sand ripples cast long shadows, and the silence is total. This is the moment everyone remembers most.",
              },
              {
                subtitle: "Morning: Farewell to the Desert",
                text: "After a sunrise breakfast at camp, ride camels back to Merzouga (or walk, if you prefer). You'll have time to freshen up, buy souvenirs, and take final photos before beginning the return journey.",
              },
              {
                subtitle: "Afternoon & Evening: Return to Marrakech",
                text: "The return route passes through Ouarzazate via a slightly different road, offering new scenery. There are regular stops for lunch, photos, and stretching. You'll arrive back in Marrakech between 8:00-9:00 PM, dropped off at your accommodation.",
              },
            ],
            highlights: [
              "Unforgettable Sahara sunrise",
              "Morning camel ride",
              "Different scenic return route",
              "Arrive Marrakech by evening",
            ],
          },
        ].map((day, i) => (
          <div key={day.day} className="mb-12">
            <div
              className="flex items-center gap-3 mb-4"
              id={`day-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-body text-xs font-semibold text-primary uppercase tracking-wider">
                  {day.day}
                </p>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {day.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground font-body text-xs mt-1">
                  <Clock size={12} /> {day.time}
                </div>
              </div>
            </div>

            <div className="ml-[60px] space-y-4">
              {day.sections.map((s) => (
                <div key={s.subtitle}>
                  <h4 className="font-heading text-base font-bold text-foreground mb-2">
                    {s.subtitle}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>
                </div>
              ))}

              <div className="bg-secondary rounded-lg p-4 mt-4">
                <p className="font-body text-xs font-semibold text-secondary-foreground uppercase tracking-wider mb-2">
                  Key Highlights
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {day.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-2 font-body text-sm text-foreground"
                    >
                      <CheckCircle
                        size={14}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          <img
            src={saharaImage}
            alt="Sahara Desert golden dunes at sunset"
            className="rounded-xl w-full h-48 object-cover"
            loading="lazy"
          />
          <img
            src={aitBenHaddouImage}
            alt="Ait Ben Haddou Kasbah Morocco"
            className="rounded-xl w-full h-48 object-cover"
            loading="lazy"
          />
        </div>

        {/* What's Included */}
        <h2
          id="included"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          What's Included in the Price
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="font-body text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              ✅ Included
            </h3>
            <ul className="space-y-2">
              {[
                "Hotel/riad pickup & drop-off",
                "Air-conditioned minivan transport",
                "2 nights accommodation",
                "Camel trek (sunset + sunrise)",
                "Dinner & breakfast at camp",
                "English-speaking driver/guide",
                "Guided visit to Ait Ben Haddou",
                "All road tolls and fuel",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-foreground"
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
          <div>
            <h3 className="font-body text-sm font-semibold text-destructive uppercase tracking-wider mb-3">
              ❌ Not Included
            </h3>
            <ul className="space-y-2">
              {[
                "Lunches (~40-60 DH each)",
                "Drinks and snacks",
                "Tips (optional, appreciated)",
                "Personal expenses",
                "Travel insurance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-body text-sm text-muted-foreground"
                >
                  <X size={14} className="text-destructive mt-0.5 shrink-0" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accommodation */}
        <h2
          id="accommodation"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Accommodation: Hotels & Desert Camps
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Your first night is in a hotel/riad in the Dades Valley area. The
          second night is the highlight — sleeping in a desert camp in the
          Sahara.
        </p>
        <div className="space-y-4 mb-10">
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Standard Camp
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Berber-style tents with traditional mattresses, blankets, and
              shared bathroom facilities. Simple but authentic. You'll have a
              communal dining area and campfire space. Most camps accommodate
              15-25 guests.
            </p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-warm border-2 border-accent">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">
              Luxury Camp ⭐
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Private tents with real beds, quality linens, rugs, and en-suite
              private bathrooms with hot water. Some luxury camps include
              electricity, charging points, and even heated tents in winter. A
              much more comfortable experience, especially for couples.
            </p>
          </div>
        </div>

        {/* Camel Trek */}
        <h2
          id="camel-trek"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          The Camel Trek Experience
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The camel ride is the most iconic part of the trip. Here's what to
          expect:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Duration: about 1-1.5 hours each way (sunset trek to camp, sunrise trek back)",
            "The camels are dromedaries (one hump) — gentle and well-trained",
            "You'll ride in a caravan of 4-8 camels, led by an experienced Berber handler",
            "The motion takes some getting used to — hold on when the camel stands up!",
            "If you prefer, you can walk alongside your camel instead",
            "Bring a scarf to protect your face from sand if it's windy",
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
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Tip:</strong> Wear long pants for the camel ride — shorts
            can cause chafing against the saddle.
          </p>
        </div>

        {/* Desert Camp Life */}
        <h2
          id="desert-camp-life"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Desert Camp Life: What to Expect
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Arriving at camp after the camel trek is magical. Here's a typical
          evening:
        </p>
        <div className="space-y-3 mb-10">
          {[
            { time: "5:30 PM", event: "Arrive at camp, welcome mint tea" },
            { time: "6:00 PM", event: "Climb a nearby dune for sunset photos" },
            {
              time: "7:30 PM",
              event: "Traditional Berber dinner (tagine, couscous, salads)",
            },
            {
              time: "9:00 PM",
              event: "Campfire with Berber drumming and singing",
            },
            {
              time: "10:00 PM",
              event: "Stargazing on the dunes (bring a blanket!)",
            },
            { time: "5:30 AM", event: "Wake up call for sunrise" },
            { time: "6:15 AM", event: "Sunrise from the top of the dune" },
            { time: "7:00 AM", event: "Breakfast at camp, pack up" },
          ].map((item) => (
            <div key={item.time} className="flex items-start gap-3">
              <span className="font-body text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded shrink-0">
                {item.time}
              </span>
              <span className="font-body text-sm text-muted-foreground">
                {item.event}
              </span>
            </div>
          ))}
        </div>

        {/* Best Time */}
        <h2
          id="best-time"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Best Time to Go
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The best months for a Sahara tour are{" "}
          <strong>October to April</strong> when temperatures are comfortable
          (15–25°C during the day). Summer months (June–August) can reach 45°C+
          and are not recommended. Spring (March–April) offers the most pleasant
          weather and blooming desert flowers.
        </p>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Pro tip:</strong> February to April is the sweet spot — warm
            days, cool nights, fewer crowds, and the best stargazing conditions.
          </p>
        </div>

        {/* Packing */}
        <h2
          id="what-to-pack"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          What to Pack (Complete List)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "Warm jacket or fleece (nights are cold)",
            "Sunscreen SPF 50+ & lip balm",
            "Sunglasses & wide-brimmed hat",
            "Comfortable closed shoes",
            "Scarf/shemagh for sand protection",
            "Small daypack for camel trek",
            "Camera + extra battery + power bank",
            "Refillable water bottle (1.5L+)",
            "Cash in small notes (no ATMs)",
            "Headlamp or small flashlight",
            "Motion sickness pills (winding roads)",
            "Toiletries (basic soap at camp only)",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2 font-body text-sm text-foreground"
            >
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />{" "}
              {item}
            </div>
          ))}
        </div>

        {/* Photography */}
        <h2
          id="photography-tips"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Tips for Photographers
        </h2>
        <div className="space-y-3 mb-10">
          {[
            "Golden hour in the desert lasts longer than normal — start shooting 1 hour before sunset",
            "Bring a lens cloth — sand gets on everything, including your camera lens",
            "The sunrise is more photogenic than sunset (longer shadows, softer colors)",
            "Use a wide-angle lens for dune landscapes, telephoto for camel caravan shots",
            "Night photography is incredible — bring a tripod for Milky Way shots",
            "Protect your camera in a sealed bag during windy conditions",
          ].map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-2 font-body text-sm text-muted-foreground"
            >
              <AlertTriangle
                size={14}
                className="text-accent mt-0.5 shrink-0"
              />{" "}
              {tip}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2
          id="faq"
          className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-10">
          {[
            {
              q: "How far is Marrakech from the Sahara?",
              a: "The Erg Chebbi dunes are about 550 km from Marrakech (one way). That's why the tour takes 3 days — it's too far for a day trip. The drive is scenic and broken up with multiple stops.",
            },
            {
              q: "Is the desert cold at night?",
              a: "Yes! Desert temperatures can drop to 5°C in winter and 15°C even in spring/autumn. Bring warm layers. Luxury camps have heated tents.",
            },
            {
              q: "Can I charge my phone?",
              a: "Standard camps usually don't have electricity. Luxury camps often do. Either way, bring a fully charged power bank.",
            },
            {
              q: "Is it suitable for older travelers?",
              a: "Yes, the camel ride is gentle and suitable for most ages. The main consideration is the long driving days. If you have mobility issues, a private tour with more stops is recommended.",
            },
            {
              q: "Can vegetarians/vegans be accommodated?",
              a: "Yes! Just let us know when booking. Moroccan cuisine naturally includes many vegetable dishes — couscous, vegetable tagines, salads, and fresh bread.",
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
            Book Your 3-Day Sahara Tour
          </h2>
          <p className="font-body text-muted-foreground mb-2">
            From 800 DH per person. No prepayment, free cancellation up to 24h
            before.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            ✅ Hotel pickup · ✅ Camel trek · ✅ Desert camp · ✅ All transport
            included
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

        {/* Related Guides */}
        <div className="mt-12 pt-10 border-t border-border">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            Related Guides
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/guides/best-sahara-desert-tour-marrakech"
              className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group"
            >
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Best Sahara Desert Tour from Marrakech
              </h4>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Compare prices, routes & operators
              </p>
            </Link>
            <Link
              to="/guides/top-10-things-to-do-marrakech"
              className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group"
            >
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Top 10 Things to Do in Marrakech
              </h4>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Complete Marrakech bucket list
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default SaharaDesertGuide;
