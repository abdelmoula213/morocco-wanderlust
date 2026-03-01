import heroImage from "@/assets/hero-morocco.jpg";
import saharaImage from "@/assets/sahara-desert.jpg";
import agafayImage from "@/assets/agafay-desert.jpg";
import atlasImage from "@/assets/atlas-mountains.jpg";
import ouzoudImage from "@/assets/ouzoud-waterfalls.jpg";
import essaouiraImage from "@/assets/essaouira.jpg";
import ourikaImage from "@/assets/ourika-valley.jpg";
import aitBenHaddouImage from "@/assets/ait-ben-haddou.jpg";
import TourCard from "@/components/TourCard";
import BookingForm from "@/components/BookingForm";
import FAQ from "@/components/FAQ";
import { Shield, Award, MapPin, CheckCircle, ChevronDown, Users, Clock, Phone, Compass } from "lucide-react";

const tours = [
  {
    image: saharaImage,
    title: "3-Day Sahara Desert Tour",
    description: "Marrakech → Ait Ben Haddou → Ouarzazate → Merzouga. Camel trek, night in Sahara camp.",
    price: "From 800 DH",
    duration: "3 Days / 2 Nights",
    badge: "Most Popular",
    link: "/sahara-desert-tour",
  },
  {
    image: agafayImage,
    title: "Agafay Desert Experience",
    description: "Quad biking, camel rides, sunset dinner & camp. Just 30 min from Marrakech.",
    price: "From 400 DH",
    duration: "Half Day / Full Day",
    badge: "Same-Day Booking",
    link: "/agafay-desert",
  },
  {
    image: atlasImage,
    title: "Imlil Day Tour",
    description: "Guided mountain walk, waterfalls & Berber villages in the Atlas Mountains.",
    price: "150 DH",
    duration: "Full Day",
    link: "/atlas-mountains",
  },
  {
    image: ouzoudImage,
    title: "Ouzoud Waterfalls Tour",
    description: "Morocco's most spectacular waterfalls — guided tour & free time for photos.",
    price: "200 DH",
    duration: "Full Day",
    link: "/ouzoud-waterfalls",
  },
  {
    image: ourikaImage,
    title: "Ourika Valley Tour",
    description: "Green valley escape — guided tour, waterfall walk & stunning nature.",
    price: "150 DH",
    duration: "Full Day",
    link: "/ourika-valley",
  },
  {
    image: essaouiraImage,
    title: "Essaouira Day Trip",
    description: "Atlantic coastal escape — medina, port & free time by the sea.",
    price: "200 DH",
    duration: "Full Day",
    link: "/essaouira",
  },
];

const Index = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <img src={heroImage} alt="Morocco Sahara Desert with Atlas Mountains" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-semibold font-body px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Compass size={12} />
            Full-Service Moroccan Travel Agency · Marrakech
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.08] mb-6">
            Discover Morocco with
            <span className="block text-gradient-gold italic">SEE&KNOW Tours</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed mb-8">
            From Sahara Desert to Atlas Mountains and Atlantic Coast. Desert tours, mountain trips, coastal escapes & cultural experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Best Direct Price", "Pay on Arrival", "Free Cancellation", "Hotel Pickup"].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full">
                <CheckCircle size={11} className="text-accent" />
                {badge}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#tours" className="bg-primary text-primary-foreground font-semibold font-body text-base px-10 py-4 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300">
              Explore Tours
            </a>
            <a
              href="https://wa.me/212766776545?text=Hello!%20I%20want%20to%20book%20a%20tour%20with%20SEE%26KNOW."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/40 text-primary-foreground font-semibold font-body text-base px-10 py-4 rounded-full hover:bg-primary-foreground/25 transition-all duration-300"
            >
              💬 Book on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
            {[
              { label: "Happy Travelers", value: "5,000+" },
              { label: "Google Rating", value: "⭐ 4.9/5" },
              { label: "Years Experience", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float text-primary-foreground/50">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* ===== FEATURED TOURS ===== */}
      <section className="py-20 bg-background" id="tours">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">Our Experiences</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Explore Morocco with Us
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Multi-day desert adventures, day trips from Marrakech, and unique cultural experiences — all at the best direct price.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">Trust & Quality</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Travel with SEE&KNOW?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Licensed Agency", desc: "Officially licensed Moroccan travel agency with years of proven experience and thousands of satisfied customers." },
              { icon: Users, title: "Professional Guides", desc: "Experienced local drivers and professional multilingual guides who know Morocco inside and out." },
              { icon: Award, title: "Best Direct Price", desc: "Book direct for the best price — no platform commissions. Save 20-30% compared to booking platforms." },
              { icon: Phone, title: "24/7 WhatsApp Support", desc: "Instant communication before, during, and after your tour. We're always just a message away." },
              { icon: CheckCircle, title: "Free Cancellation", desc: "Plans change — cancel up to 24 hours before for a full refund. No questions asked." },
              { icon: Clock, title: "Pay on Arrival", desc: "No prepayment required. Reserve your spot and pay when the tour starts. Complete peace of mind." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8 rounded-2xl shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-light mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SAHARA HIGHLIGHT ===== */}
      <section className="relative py-24 overflow-hidden">
        <img src={aitBenHaddouImage} alt="Ait Ben Haddou Kasbah Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-semibold text-accent uppercase tracking-widest mb-3">Featured Tour</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              3-Day Sahara Desert Tour from Marrakech
            </h2>
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Experience the ultimate Morocco adventure — from the ancient Kasbah of Ait Ben Haddou through the Todra Gorge to a magical night under the stars in Merzouga Sahara Desert.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Ait Ben Haddou", "Ouarzazate", "Todra Gorge", "Merzouga", "Camel Trek", "Sahara Camp"].map((tag) => (
                <span key={tag} className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 mb-8">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">800 DH</p>
                <p className="font-body text-xs text-primary-foreground/60">Standard Package</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-primary-foreground">2,000 DH</p>
                <p className="font-body text-xs text-primary-foreground/60">Luxury Package</p>
              </div>
            </div>
            <a
              href="/sahara-desert-tour"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold font-body px-8 py-3.5 rounded-full hover:shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              View Full Itinerary →
            </a>
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM ===== */}
      <section className="py-20 bg-background" id="book">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">Book Now</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Ready for Your Morocco Adventure?
              </h2>
              <p className="font-body text-muted-foreground">
                Fill in the form and we'll confirm your booking within 1 hour on WhatsApp.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-20 bg-warm-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="font-body text-sm font-semibold text-primary uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default Index;
