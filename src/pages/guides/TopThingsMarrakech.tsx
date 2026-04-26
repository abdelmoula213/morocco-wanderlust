import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-morocco.jpg";
import saharaImage from "@/assets/sahara-desert.jpg";
import agafayImage from "@/assets/agafay-desert.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ouzoudImage from "@/assets/ouzoud-waterfalls.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import hotAirBalloonImage from "@/assets/hot-air-balloon.jpg";
import { MapPin, Phone, Clock, Users, Star, CheckCircle } from "lucide-react";

const things = [
  {
    num: 1,
    id: "thing-1",
    title: "3-Day Sahara Desert Tour",
    image: saharaImage,
    link: "/sahara-desert-tour",
    shortDesc: "The #1 must-do in Morocco.",
    longDesc:
      "The ultimate Morocco bucket-list adventure. Ride camels into the golden dunes of Erg Chebbi, sleep under a sky full of stars at a traditional Berber camp, and explore ancient kasbahs along the way. The 3-day tour from Marrakech takes you through the High Atlas Mountains, past the UNESCO World Heritage site of Ait Ben Haddou, through the dramatic Todra Gorge, and finally into the vast Sahara Desert. It's the single most unforgettable thing you can do in Morocco.",
    tips: "Book at least a few days in advance during peak season (Oct-Apr). Standard package from 800 MAD, luxury from 2,000 MAD per person.",
    duration: "3 days / 2 nights",
  },
  {
    num: 2,
    id: "thing-2",
    title: "Explore Jemaa el-Fnaa Square",
    image: heroImage,
    link: null,
    shortDesc: "The beating heart of Marrakech.",
    longDesc:
      "Jemaa el-Fnaa is Africa's busiest and most exciting square. By day, it's filled with orange juice sellers, henna artists, and snake charmers. By evening, it transforms into an enormous open-air restaurant with dozens of food stalls serving everything from grilled lamb to snail soup. Storytellers gather crowds, Gnaoua musicians play hypnotic rhythms, and the energy is absolutely electric. No visit to Marrakech is complete without spending at least one evening here.",
    tips: "Go at sunset for the best atmosphere. Sit on the terrace of Café de France or Café Glacier for panoramic views. Agree on prices before having photos taken with performers.",
    duration: "2-3 hours",
  },
  {
    num: 3,
    id: "thing-3",
    title: "Agafay Desert Experience",
    image: agafayImage,
    link: "/agafay-desert",
    shortDesc: "Desert magic, just 30 minutes away.",
    longDesc:
      "Don't have 3 days for the Sahara? The Agafay Desert delivers a taste of the desert experience just 30 minutes from Marrakech. This rocky lunar landscape offers quad biking across vast plains, camel rides at sunset, and glamping under the stars. Many travelers combine it with a sunset dinner — imagine eating traditional Moroccan food under fairy lights with the Atlas Mountains as your backdrop. It's particularly popular for couples and anyone short on time.",
    tips: "The sunset dinner + overnight camp combo is the best value. Available as half-day, full-day, or overnight experience. From 400 MAD per person.",
    duration: "Half day to overnight",
  },
  {
    num: 4,
    id: "thing-4",
    title: "Day Trip to Atlas Mountains (Imlil)",
    image: atlasImage,
    link: "/atlas-mountains",
    shortDesc: "Escape to cool mountain air.",
    longDesc:
      "Just 60 km from Marrakech, the Imlil Valley in the High Atlas Mountains feels like another world. Walk through traditional Berber villages where life has barely changed in centuries, follow trails past walnut groves and terraced fields to hidden waterfalls, and enjoy a traditional tagine lunch with panoramic mountain views. On clear days, you can see the peak of Mount Toubkal (4,167m) — North Africa's highest mountain. The drive itself is stunning, winding through deep valleys and past colorful markets.",
    tips: "Wear comfortable shoes with grip. The walk is moderate — suitable for most fitness levels. Spring and autumn are the best seasons. Just 150 MAD per person.",
    duration: "Full day (8:00 AM - 5:00 PM)",
  },
  {
    num: 5,
    id: "thing-5",
    title: "Visit Jardin Majorelle & YSL Museum",
    image: null,
    link: null,
    shortDesc: "An oasis of art and color.",
    longDesc:
      "The Jardin Majorelle is Marrakech's most famous garden — a stunning art deco oasis created by French painter Jacques Majorelle in the 1920s and later lovingly restored by fashion designer Yves Saint Laurent. The garden's signature cobalt blue buildings are set among towering bamboo groves, exotic cacti, and lily ponds. Next door, the Musée Yves Saint Laurent Marrakech showcases the designer's iconic creations. Together, they offer a peaceful escape from the medina's intensity and a fascinating glimpse into Marrakech's creative history.",
    tips: "Go early morning (opening time) to avoid crowds. Tickets: 70 MAD for the garden, 30 MAD for the Berber Museum inside. The YSL Museum is a separate ticket (100 MAD).",
    duration: "2-3 hours",
  },
  {
    num: 6,
    id: "thing-6",
    title: "Ouzoud Waterfalls Day Trip",
    image: ouzoudImage,
    link: "/ouzoud-waterfalls",
    shortDesc: "Morocco's most spectacular waterfalls.",
    longDesc:
      "Cascading 110 meters through lush olive groves, the Ouzoud Waterfalls are Morocco's most impressive natural wonder. The falls are surrounded by walking trails where you'll encounter wild Barbary macaques swinging through the trees. At the bottom, you can take a small boat ride right up to the base of the falls — the mist is incredibly refreshing on a hot day. Local restaurants perched on the cliffside serve tagine and fresh juice with unbeatable views. It's about 2.5 hours from Marrakech, making it a perfect day trip.",
    tips: "Wear shoes that can get wet. The path down is steep in places. Barbary macaques are friendly but don't feed them. Best visited spring through autumn. Just 200 MAD per person.",
    duration: "Full day (8:00 AM - 6:00 PM)",
  },
  {
    num: 7,
    id: "thing-7",
    title: "Ourika Valley Escape",
    image: ourikaImage,
    link: "/ourika-valley",
    shortDesc: "A green valley at the foot of the Atlas.",
    longDesc:
      "The Ourika Valley is the closest mountain escape from Marrakech — just 45 minutes south. A winding road follows the Ourika River through a lush green valley dotted with Berber villages. The highlight is the waterfall walk — a series of seven cascades that you can hike up to (the first two are easy, the higher ones more challenging). Along the way, visit a traditional Berber home, see an argan oil cooperative, and enjoy a mountain tagine lunch by the river. In summer, locals come here to escape the Marrakech heat.",
    tips: "Easier than Imlil — great for families with kids. The river can be strong after rain, so check conditions. Argan oil here is authentic and much cheaper than in the medina. 150 MAD per person.",
    duration: "Full day (9:00 AM - 5:00 PM)",
  },
  {
    num: 8,
    id: "thing-8",
    title: "Essaouira Coastal Day Trip",
    image: essaouiraImage,
    link: "/essaouira",
    shortDesc: "Atlantic breezes and fresh seafood.",
    longDesc:
      "Essaouira is Morocco's most charming coastal town — a UNESCO-listed medina of blue-shuttered buildings, art galleries, and a bustling fishing port. The 2.5-hour drive from Marrakech passes through argan tree forests (watch goats climbing the trees!). In Essaouira, wander the car-free medina, visit artisan workshops, eat the freshest seafood you've ever had at the port grill stalls, and walk along the windswept beach. The town has a completely different vibe to Marrakech — relaxed, artistic, and bohemian. It's also famous for its windsurfing and kitesurfing.",
    tips: "Essaouira is windy year-round (it's called the 'City of Wind'). Bring a jacket even in summer. The port fish grill is a must — choose your fish and they'll grill it fresh. 200 MAD per person.",
    duration: "Full day (8:00 AM - 7:00 PM)",
  },
  {
    num: 9,
    id: "thing-9",
    title: "Get Lost in the Souks",
    image: null,
    link: null,
    shortDesc: "A sensory overload you'll never forget.",
    longDesc:
      "Marrakech's souks are a labyrinth of narrow alleyways organized by trade — leather workers, metalworkers, carpet sellers, spice vendors, and more. The deeper you go, the more authentic it gets. You'll find everything from handmade Berber carpets and brass lanterns to leather babouche slippers and natural cosmetics. Getting lost is half the fun — and inevitable. The art of haggling is expected: start at about 40% of the asking price and negotiate from there. Early morning is the best time for serious shopping; evenings are more atmospheric.",
    tips: "Never accept the first price — haggling is expected and part of the culture. If you're interested in carpets, set a budget before entering any shop. Carry small bills. The best souvenirs: leather goods, argan oil, spices, and ceramic tiles.",
    duration: "2-4 hours",
  },
  {
    num: 10,
    id: "thing-10",
    title: "Hot Air Balloon at Sunrise",
    image: hotAirBalloonImage,
    link: null,
    shortDesc: "See Morocco from the sky.",
    longDesc:
      "Floating above the Marrakech countryside at dawn is pure magic. As the sun rises, you'll drift over traditional Berber villages, olive groves, and the vast Agafay Desert, with the snow-capped Atlas Mountains filling the horizon. The balloon rises to about 300-500 meters, giving you a completely new perspective on the Moroccan landscape. The flight lasts about 1 hour, and most packages include hotel pickup, a traditional Berber breakfast after landing, and sometimes a short camel ride. It's the most romantic activity in Marrakech.",
    tips: "Book at least 2-3 days in advance. Flights depend on weather and are sometimes cancelled for wind — operators will reschedule. Dress warmly, it's cold at altitude before sunrise. Expect to pay 1,500-2,500 MAD per person.",
    duration: "4 hours total (1 hour flight)",
  },
];

const TopThingsMarrakech = () => {
  return (
    <>
      <Helmet>
        <title>Top 10 Things to Do in Marrakech (2026 Guide) | SK Morocco</title>
        <meta
          name="description"
          content="Discover the top 10 things to do in Marrakech in 2026. From Sahara desert tours to Atlas Mountains treks, souks, and Essaouira day trips — your complete guide."
        />
        <meta
          name="keywords"
          content="things to do in Marrakech, Marrakech activities, best Marrakech tours, Marrakech day trips, Marrakech bucket list, Jemaa el-Fnaa, Majorelle Garden, Morocco itinerary, Marrakech travel guide 2026, Marrakech sightseeing, Marrakech adventure, what to do Marrakech, Marrakech excursions, Morocco top 10, Marrakech tourist guide"
        />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Marrakech Morocco panoramic view"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">
            Travel Guide
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Top 10 Things to Do
            <br />
            in Marrakech (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            The ultimate Marrakech bucket list — from ancient souks to Sahara
            adventures.
          </p>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 font-body text-sm mt-4">
            <span className="flex items-center gap-1">
              <Clock size={14} /> 18 min read
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
            {things.map((t) => (
              <li
                key={t.num}
                className="font-body text-sm text-primary hover:underline cursor-pointer"
              >
                <a href={`#${t.id}`}>
                  {t.num}. {t.title} —{" "}
                  <span className="text-muted-foreground">{t.shortDesc}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          Marrakech is Morocco's most exciting city — a whirlwind of colors,
          flavors, and unforgettable experiences. Known as the "Red City" for
          its distinctive terracotta walls, Marrakech has been a crossroads of
          African, Arab, and European cultures for over a thousand years.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-12">
          Whether you have 2 days or 2 weeks, these are the 10 experiences you
          absolutely cannot miss. We've included practical tips, prices, and
          booking advice for each one — from a team of local guides who've been
          showing visitors around Morocco for over 10 years.
        </p>

        <div className="space-y-16">
          {things.map((thing) => (
            <div key={thing.num} id={thing.id}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {thing.num}
                </div>
                <div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                    {thing.title}
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                      <Clock size={12} /> {thing.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-[64px]">
                {thing.image && (
                  <img
                    src={thing.image}
                    alt={thing.title}
                    className="rounded-xl w-full h-56 object-cover mb-4"
                    loading="lazy"
                  />
                )}

                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {thing.longDesc}
                </p>

                <div className="bg-secondary rounded-lg p-4 mb-3">
                  <p className="font-body text-sm text-secondary-foreground">
                    <Star size={12} className="inline text-accent mr-1" />
                    <strong>Tip:</strong> {thing.tips}
                  </p>
                </div>

                {thing.link && (
                  <Link
                    to={thing.link}
                    className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:underline"
                  >
                    <MapPin size={14} /> View tour details & book →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Tips */}
        <div className="mt-16 mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bonus: Marrakech Travel Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Best months to visit: October to April (spring is perfect)",
              "The medina is best explored on foot — no cars allowed",
              "Learn to say 'La shukran' (no thank you) for persistent sellers",
              "Riads (traditional guesthouses) are more charming than hotels",
              "Taxis use meters — insist on it or agree the price first",
              "Moroccan mint tea is always free and always delicious",
              "Friday is the holy day — some shops close after noon",
              "Download Google Maps offline — signal can be patchy in the medina",
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
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
            Let Us Plan Your Marrakech Trip
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Book any tour with SEE&KNOW — best direct prices, free cancellation,
            and pay on arrival. We'll handle the logistics, you just enjoy
            Morocco.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#tours"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              Browse All Tours
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20need%20help%20planning%20my%20Marrakech%20trip."
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
                Complete guide to choosing the right Sahara tour
              </p>
            </Link>
            <Link
              to="/guides/is-morocco-safe-for-tourists"
              className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group"
            >
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                Is Morocco Safe for Tourists?
              </h4>
              <p className="font-body text-xs text-muted-foreground mt-1">
                Honest safety guide from local experts
              </p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default TopThingsMarrakech;