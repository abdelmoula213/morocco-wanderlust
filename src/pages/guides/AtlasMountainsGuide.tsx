import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import { CheckCircle, Clock, Phone, Star, AlertTriangle, Users } from "lucide-react";

const AtlasMountainsGuide = () => {
  return (
    <>
      <Helmet>
        <title>Atlas Mountains Day Trip Guide from Marrakech (2026) | SK Morocco</title>
        <meta name="description" content="Plan your Atlas Mountains day trip from Marrakech. Complete guide to Imlil, Berber villages, waterfalls & trekking. Best routes, prices, tips & what to wear." />
        <meta name="keywords" content="Atlas Mountains day trip, Atlas Mountains guide, Imlil day trip Marrakech, Berber village tour, Atlas Mountains trekking, Morocco hiking guide, Toubkal base, Marrakech mountain trip, Atlas waterfalls, Morocco nature tour, Atlas Mountains what to expect, day trip from Marrakech, Atlas Mountains prices, Morocco trekking guide, Atlas Mountains 2026" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={atlasImage} alt="Atlas Mountains Morocco panoramic view" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <p className="font-body text-xs font-semibold text-accent uppercase tracking-widest mb-3">Day Trip Guide</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Atlas Mountains Day Trip<br />Guide from Marrakech
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Everything you need to know about visiting the Atlas Mountains in 2026.
          </p>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80 font-body text-sm mt-4">
            <span className="flex items-center gap-1"><Clock size={14} /> 10 min read</span>
            <span className="flex items-center gap-1"><Users size={14} /> Updated March 2026</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-3xl">
      {/* Table of Contents */}
<div className="bg-secondary rounded-xl p-6 mb-10">
  <h2 id="table-of-contents" className="font-heading text-lg font-bold text-foreground mb-3">In This Guide</h2>
  <ul className="space-y-2">
    {[
      { title: "Why Visit the Atlas Mountains?", id: "why-visit" },
      { title: "Imlil vs. Ourika — Which Route?", id: "route-comparison" },
      { title: "Detailed Imlil Itinerary", id: "imlil-itinerary" },
      { title: "Detailed Ourika Itinerary", id: "ourika-itinerary" },
      { title: "The Berber Experience", id: "berber-experience" },
      { title: "What to Wear & Bring", id: "what-to-wear" },
      { title: "Fitness Level & Difficulty", id: "fitness-difficulty" },
      { title: "Best Time to Visit", id: "best-time" },
      { title: "How Much Does It Cost?", id: "cost" },
      { title: "Insider Tips", id: "insider-tips" },
      { title: "Frequently Asked Questions", id: "faq" }
      ].map((item, i) => (
      <li key={item.id} className="font-body text-sm text-primary hover:underline cursor-pointer">
        <a href={`#${item.id}`}>{i + 1}. {item.title}</a>
      </li>
    ))}
  </ul>
</div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
          The Atlas Mountains are just 60 km from Marrakech — but they feel like another planet. In under an hour, you go from the bustling, flat, sun-baked city to cool mountain air, green valleys, and snow-capped peaks. It's Morocco's most refreshing day trip and one of the best ways to experience authentic Berber culture.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-10">
          In this guide, we cover everything: the two main routes (Imlil and Ourika), hour-by-hour itineraries, difficulty levels, what to wear, costs, and tips from our local mountain guides.
        </p>

        {/* Why Visit */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4" id="why-visit">Why Visit the Atlas Mountains?</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          The High Atlas is North Africa's highest mountain range, stretching 2,500 km across Morocco. Mount Toubkal, at 4,167 meters, is the tallest peak in North Africa. But you don't need to be a mountaineer to enjoy the Atlas — the day trips from Marrakech are suitable for most fitness levels and offer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {[
            "Stunning panoramic mountain views",
            "Traditional Berber villages frozen in time",
            "Waterfall hikes through green valleys",
            "Authentic tagine lunch with mountain views",
            "Mint tea in a Berber home",
            "Cool escape from Marrakech heat",
            "Argan oil cooperatives",
            "Views of Mount Toubkal (on clear days)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <img src={atlasImage} alt="Atlas Mountains village" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
          <img src={ourikaImage} alt="Ourika Valley waterfalls" className="rounded-xl w-full h-48 object-cover" loading="lazy" />
        </div>

        {/* Route Comparison */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4" id="route-comparison" >Imlil vs. Ourika — Which Route?</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          There are two main Atlas Mountains day trips from Marrakech. Both are excellent but offer different experiences:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-card rounded-xl p-6 shadow-warm border-2 border-accent">
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Imlil Valley</h3>
            <span className="text-xs font-body font-semibold text-accent bg-gold-light px-2 py-0.5 rounded-full">Our Recommendation</span>
            <ul className="space-y-2 mt-4">
              {[
                "More dramatic scenery",
                "Traditional Berber village walk",
                "Waterfall hike (moderate)",
                "Views of Mount Toubkal",
                "More authentic, fewer tourists",
                "Best for: couples, hikers, photographers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-border">
              <span className="font-heading text-xl font-bold text-primary">150 DH</span>
              <span className="font-body text-xs text-muted-foreground ml-1">per person</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-warm">
            <h3 className="font-heading text-lg font-bold text-foreground mb-1">Ourika Valley</h3>
            <span className="text-xs font-body font-semibold text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Family Friendly</span>
            <ul className="space-y-2 mt-4">
              {[
                "Lush green valley with river",
                "Seven waterfalls (easy-moderate hike)",
                "Visit Berber home",
                "Argan oil cooperative",
                "Less strenuous walk",
                "Best for: families, easy day out",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-3 border-t border-border">
              <span className="font-heading text-xl font-bold text-primary">150 DH</span>
              <span className="font-body text-xs text-muted-foreground ml-1">per person</span>
            </div>
          </div>
        </div>

        {/* Imlil Itinerary */}
        <h2 id="imlil-itinerary" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Detailed Imlil Itinerary</h2>
        <div className="space-y-3 mb-10">
          {[
            { time: "8:00 AM", event: "Pickup from your riad/hotel in Marrakech" },
            { time: "9:00 AM", event: "Drive through Tahnaout and the foothills, passing Berber markets" },
            { time: "9:30 AM", event: "Arrive in the Imlil area. Meet your local Berber mountain guide" },
            { time: "10:00 AM", event: "Begin the guided walk through terraced fields and walnut groves" },
            { time: "10:45 AM", event: "Visit a traditional Berber village. Enter a family home, enjoy mint tea" },
            { time: "11:30 AM", event: "Continue the walk to the waterfalls through scenic mountain trails" },
            { time: "12:15 PM", event: "Arrive at the waterfall. Photos, swimming (in summer), and rest" },
            { time: "1:00 PM", event: "Walk back to the village for lunch" },
            { time: "1:30 PM", event: "Traditional Berber tagine lunch with panoramic mountain views" },
            { time: "2:30 PM", event: "Free time to explore the village, buy argan oil, take photos" },
            { time: "3:30 PM", event: "Depart for Marrakech" },
            { time: "5:00 PM", event: "Arrive back at your hotel in Marrakech" },
          ].map((item) => (
            <div key={item.time} className="flex items-start gap-3">
              <span className="font-body text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded shrink-0 w-[72px] text-center">{item.time}</span>
              <span className="font-body text-sm text-muted-foreground">{item.event}</span>
            </div>
          ))}
        </div>

        {/* Ourika Itinerary */}
        <h2   id="ourika-itinerary" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Detailed Ourika Itinerary</h2>
        <div className="space-y-3 mb-10">
          {[
            { time: "9:00 AM", event: "Pickup from your riad/hotel in Marrakech" },
            { time: "9:45 AM", event: "Arrive in the Ourika Valley. Stop at a panoramic viewpoint" },
            { time: "10:15 AM", event: "Visit an argan oil cooperative — see the traditional production process" },
            { time: "10:45 AM", event: "Visit a traditional Berber home and enjoy mint tea with the family" },
            { time: "11:30 AM", event: "Begin the waterfall walk along the Ourika River" },
            { time: "12:00 PM", event: "Reach the upper cascades. Photos and swimming (in summer)" },
            { time: "12:45 PM", event: "Walk back down to the village" },
            { time: "1:15 PM", event: "Tagine lunch at a riverside restaurant with valley views" },
            { time: "2:30 PM", event: "Free time — explore the weekly Berber market (Mondays), shop for souvenirs" },
            { time: "3:30 PM", event: "Depart for Marrakech" },
            { time: "4:30 PM", event: "Arrive back at your hotel in Marrakech" },
          ].map((item) => (
            <div key={item.time} className="flex items-start gap-3">
              <span className="font-body text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded shrink-0 w-[72px] text-center">{item.time}</span>
              <span className="font-body text-sm text-muted-foreground">{item.event}</span>
            </div>
          ))}
        </div>

        {/* Berber Experience */}
        <h2 id="berber-experience" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Berber Experience</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          One of the highlights of any Atlas Mountains trip is experiencing authentic Berber culture. The Berbers (Amazigh people) are Morocco's indigenous inhabitants and have lived in these mountains for thousands of years. On both routes, you'll:
        </p>
        <ul className="space-y-2 mb-10">
          {[
            "Visit a traditional Berber home — see how families live in the mountains, with thick mud walls, rooftop terraces, and communal living spaces",
            "Enjoy traditional mint tea — brewed strong and sweet, served from a height to create froth. It's always offered as a welcome gesture",
            "Eat authentic tagine — slow-cooked in a conical clay pot over charcoal. The mountain version with vegetables and local herbs is unforgettable",
            "See traditional crafts — women make argan oil by hand, weave carpets, and craft pottery using techniques unchanged for centuries",
            "Experience mountain hospitality — Berber culture places enormous importance on welcoming guests. You'll feel genuinely welcome",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </li>
          ))}
        </ul>

        {/* What to Wear */}
        <h2 id="what-to-wear" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What to Wear & Bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {["Comfortable hiking shoes with grip", "Layers — warm in sun, cool in shade", "Sunscreen SPF 50+ & hat", "Water bottle (1L minimum)", "Cash for souvenirs/tips (50-100 DH)", "Camera with charged battery", "Light rain jacket (spring/autumn)", "Small backpack for the hike"].map((item) => (
            <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
              <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
            </div>
          ))}
        </div>

        {/* Difficulty */}
        <h2 id="fitness-difficulty" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Fitness Level & Difficulty</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">Imlil — Moderate</h3>
            <p className="font-body text-sm text-muted-foreground">The walk involves uneven terrain with some uphill sections. Total walking time: 2-3 hours. Most people of average fitness manage it comfortably. Not suitable for people with serious mobility issues.</p>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-warm">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">Ourika — Easy to Moderate</h3>
            <p className="font-body text-sm text-muted-foreground">Easier than Imlil. The first two waterfalls are accessible with just a gentle walk. The upper cascades involve some rock-hopping. Total walking: 1.5-2 hours. Family-friendly for children aged 5+.</p>
          </div>
        </div>

        {/* Best Time */}
        <h2 id="best-time" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Best Time to Visit</h2>
        <div className="space-y-3 mb-4">
          {[
            { season: "🌸 Spring (March–May)", verdict: "Perfect. Wildflowers, green valleys, snow on higher peaks. The most photogenic season." },
            { season: "☀️ Summer (June–Aug)", verdict: "Hot in Marrakech, pleasantly cool in the mountains. Ourika is especially refreshing. Waterfall swimming possible." },
            { season: "🍂 Autumn (Sept–Nov)", verdict: "Crisp air, clear skies, golden light. Excellent for photography. Fewer tourists." },
            { season: "❄️ Winter (Dec–Feb)", verdict: "Cold at altitude, possible snow above 2,000m. Beautiful but bring warm clothes. Some trails may be slippery." },
            ].map((s) => (
            <div key={s.season} className="bg-card rounded-lg p-4 shadow-warm">
              <h3 className="font-body text-sm font-bold text-foreground">{s.season}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.verdict}</p>
            </div>
          ))}
        </div>
        <div className="bg-secondary rounded-xl p-4 mb-10">
          <p className="font-body text-sm text-secondary-foreground">
            <Star size={12} className="inline text-accent mr-1" />
            <strong>Pro tip:</strong> In summer, Ourika is cooler and more refreshing. In spring, Imlil has the best wildflowers and views. Both are great year-round.
          </p>
        </div>

        {/* Price */}
        <h2 id="cost" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Much Does It Cost?</h2>
        <div className="bg-card rounded-xl p-6 shadow-warm mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Imlil Day Trip</p>
              <p className="font-heading text-3xl font-bold text-foreground">150 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person (~€14)</p>
            </div>
            <div className="text-center p-4 bg-secondary rounded-lg">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Ourika Day Trip</p>
              <p className="font-heading text-3xl font-bold text-foreground">150 DH</p>
              <p className="font-body text-xs text-muted-foreground">per person (~€14)</p>
            </div>
          </div>
        </div>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Includes: hotel pickup & drop-off, transport, local guide. Lunch is not included (~50-80 DH at a local restaurant).
        </p>

        {/* Tips */}
        <h2 id="insider-tips" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Insider Tips</h2>
        <div className="space-y-3 mb-10">
          {[
            "The drive to Imlil passes through stunning scenery — sit by the window and keep your camera ready.",
            "Buy argan oil directly from the cooperatives — it's more authentic and cheaper than in Marrakech.",
            "Tip your mountain guide 30-50 DH per person — they're local Berber guides who depend on tips.",
            "If visiting Ourika on a Monday, you'll catch the weekly Berber market — great for photos and authentic souvenirs.",
            "Combine Ourika with an afternoon at a hammam back in Marrakech for the ultimate relaxation day.",
            "Ask your guide about local legends and history — the Berber people have fascinating stories.",
            ].map((tip) => (
            <div key={tip} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
              <AlertTriangle size={14} className="text-accent mt-0.5 shrink-0" /> {tip}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 id="faq"  className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {[
            { q: "Do I need hiking boots?", a: "Proper hiking boots aren't necessary for the day trips. Comfortable walking shoes or sneakers with good grip are fine. Avoid flip-flops or sandals — the terrain is uneven." },
            { q: "Is it suitable for children?", a: "Ourika is great for kids aged 5+. Imlil is better for ages 8+ due to the slightly more challenging terrain. Both routes have shorter options if needed." },
            { q: "Can I do both Imlil and Ourika in one day?", a: "We don't recommend it — each trip takes a full day and you'd miss the best parts of both. Better to choose one and enjoy it fully." },
            { q: "Is lunch included?", a: "Lunch is not included in the tour price but is very affordable (50-80 DH for a full tagine meal). The restaurants have amazing views." },
            { q: "What if it rains?", a: "Light rain is fine — the mountains are beautiful in the rain. Heavy rain can make the Ourika waterfalls dangerous, in which case your guide will adjust the route. The tour still runs in all weather." },
            ].map((item) => (
            <div key={item.q} className="bg-card rounded-xl p-5 shadow-warm">
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.q}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card rounded-2xl p-8 shadow-warm-lg text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Book Your Atlas Mountains Trip</h2>
          <p className="font-body text-muted-foreground mb-2">
            From just 150 DH per person. Hotel pickup, local Berber guide, pay on arrival.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-6">
            ✅ Free cancellation · ✅ Small groups · ✅ Local expert guides
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/atlas-mountains"
              className="bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Imlil Tour
            </Link>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20an%20Atlas%20Mountains%20day%20trip."
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
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Related Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/guides/top-10-things-to-do-marrakech" className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group">
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">Top 10 Things to Do in Marrakech</h4>
              <p className="font-body text-xs text-muted-foreground mt-1">Complete Marrakech bucket list</p>
            </Link>
            <Link to="/guides/best-sahara-desert-tour-marrakech" className="bg-card rounded-xl p-4 shadow-warm hover:shadow-warm-lg transition-all group">
              <h4 className="font-heading text-sm font-bold text-foreground group-hover:text-primary transition-colors">Best Sahara Desert Tour</h4>
              <p className="font-body text-xs text-muted-foreground mt-1">The ultimate Morocco desert adventure</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default AtlasMountainsGuide;
