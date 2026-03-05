import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-morocco.jpg";
import saharaImage from "@/assets/sahara-desert.jpg";
import agafayImage from "@/assets/agafay-desert.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ouzoudImage from "@/assets/ouzoud-waterfalls.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import { MapPin, Phone } from "lucide-react";

const things = [
  { num: 1, title: "3-Day Sahara Desert Tour", desc: "The ultimate Morocco bucket-list adventure. Ride camels into the golden dunes, sleep under the stars at a desert camp, and explore ancient kasbahs along the way.", image: saharaImage, link: "/sahara-desert-tour" },
  { num: 2, title: "Explore Jemaa el-Fnaa Square", desc: "The beating heart of Marrakech. Snake charmers, storytellers, musicians, and food stalls come alive every evening. Best experienced at sunset.", image: heroImage, link: null },
  { num: 3, title: "Agafay Desert Experience", desc: "Just 30 minutes from Marrakech, the Agafay Desert offers quad biking, camel rides, and magical sunset dinners without the long drive to the Sahara.", image: agafayImage, link: "/agafay-desert" },
  { num: 4, title: "Day Trip to Atlas Mountains", desc: "Hike through Berber villages, discover hidden waterfalls, and enjoy panoramic mountain views in the stunning Imlil Valley.", image: atlasImage, link: "/atlas-mountains" },
  { num: 5, title: "Visit Jardin Majorelle", desc: "The iconic cobalt-blue garden created by Jacques Majorelle and later restored by Yves Saint Laurent. A peaceful oasis of exotic plants and art deco architecture.", image: null, link: null },
  { num: 6, title: "Ouzoud Waterfalls Day Trip", desc: "Morocco's most spectacular waterfalls plunge 110 meters through olive groves. Spot Barbary macaques, take a boat ride, and enjoy lunch by the cascades.", image: ouzoudImage, link: "/ouzoud-waterfalls" },
  { num: 7, title: "Ourika Valley Escape", desc: "A lush green valley at the foot of the Atlas Mountains. Walk to waterfalls, visit Berber homes, and enjoy tagine with mountain views.", image: ourikaImage, link: "/ourika-valley" },
  { num: 8, title: "Essaouira Coastal Day Trip", desc: "The charming Atlantic port town with a beautiful medina, fresh seafood, and windswept beaches. A perfect contrast to Marrakech.", image: essaouiraImage, link: "/essaouira" },
  { num: 9, title: "Get Lost in the Souks", desc: "Marrakech's labyrinthine souks are a sensory overload of spices, leather, ceramics, and textiles. Haggling is part of the experience.", image: null, link: null },
  { num: 10, title: "Hot Air Balloon at Sunrise", desc: "Float above the Marrakech countryside at dawn. See the Atlas Mountains, Agafay Desert, and traditional Berber villages from above. A truly magical start to any day.", image: null, link: null },
];

const TopThingsMarrakech = () => {
  return (
    <>
      <Helmet>
        <title>Top 10 Things to Do in Marrakech (2026 Guide) | SK Morocco</title>
        <meta name="description" content="Discover the top 10 things to do in Marrakech in 2026. From Sahara desert tours to Atlas Mountains treks, souks, and Essaouira day trips — your complete guide." />
        <meta name="keywords" content="things to do in Marrakech, Marrakech activities, best Marrakech tours, Marrakech day trips, Marrakech bucket list, Jemaa el-Fnaa, Majorelle Garden, Morocco itinerary, Marrakech travel guide 2026, Marrakech sightseeing, Marrakech adventure, what to do Marrakech, Marrakech excursions, Morocco top 10, Marrakech tourist guide" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={heroImage} alt="Marrakech Morocco panoramic view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Travel Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Top 10 Things to Do<br />in Marrakech (2026)
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            The ultimate Marrakech bucket list — from ancient souks to Sahara adventures.
          </p>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
          Marrakech is Morocco's most exciting city — a whirlwind of colors, flavors, and unforgettable experiences. Whether you have 2 days or 2 weeks, here are the top 10 things you absolutely can't miss.
        </p>

        <div className="space-y-12">
          {things.map((thing) => (
            <div key={thing.num}>
              <div className="flex items-start gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                  {thing.num}
                </div>
                <div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">{thing.title}</h2>
                </div>
              </div>
              <div className="ml-[56px]">
                {thing.image && (
                  <img src={thing.image} alt={thing.title} className="rounded-xl w-full h-52 object-cover mb-4" loading="lazy" />
                )}
                <p className="font-body text-muted-foreground leading-relaxed mb-3">{thing.desc}</p>
                {thing.link && (
                  <Link to={thing.link} className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:underline">
                    <MapPin size={14} /> View tour details →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center mt-16">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Let Us Plan Your Marrakech Trip</h2>
          <p className="font-body text-muted-foreground mb-6">
            Book any tour with SEE&KNOW — best direct prices, free cancellation, and pay on arrival.
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
      </article>
    </>
  );
};

export default TopThingsMarrakech;
