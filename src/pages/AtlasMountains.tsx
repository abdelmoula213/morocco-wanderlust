import atlasImage from "@/assets/atlas-mountains.jpg";
import BookingForm from "@/components/BookingForm";
import { CheckCircle, MapPin } from "lucide-react";

const AtlasMountains = () => {
  return (
    <>
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <img src={atlasImage} alt="Atlas Mountains Imlil Morocco" className="absolute inset-0 w-full h-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-primary-foreground text-xs font-body px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm">
            <MapPin size={12} /> Imlil, Atlas Mountains
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            Atlas Mountains & Imlil Tour
          </h1>
          <p className="font-body text-primary-foreground/80 text-lg max-w-2xl">
            Guided mountain trek, Berber village visit, waterfalls & lunch with breathtaking mountain views.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Tour Highlights</h2>
            <div className="space-y-4 mb-12">
              {[
                { title: "Scenic Drive", desc: "Travel from Marrakech through the High Atlas Mountains with incredible panoramic views and photo stops." },
                { title: "Guided Mountain Walk", desc: "Easy-to-moderate guided walk through the beautiful Imlil valley, passing waterfalls and traditional villages." },
                { title: "Berber Village Visit", desc: "Visit a local Berber family in their traditional mountain home. Experience authentic Moroccan hospitality." },
                { title: "Mountain Lunch", desc: "Enjoy a traditional Berber lunch with panoramic views of the Atlas Mountains and surrounding valleys." },
                { title: "Photography Stops", desc: "Multiple scenic stops at viewpoints, waterfalls, and valleys perfect for capturing the beauty of the Atlas." },
              ].map((h) => (
                <div key={h.title} className="bg-card p-6 rounded-xl shadow-warm">
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{h.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{h.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Hotel pickup & drop-off",
                "Professional mountain guide",
                "Traditional Berber lunch",
                "Mint tea at Berber home",
                "All entrance fees",
                "Comfortable transport",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                  <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-warm">
                <div className="text-center mb-4">
                  <p className="font-heading text-3xl font-bold text-primary">300 DH</p>
                  <p className="font-body text-xs text-muted-foreground">per person · Full Day · Pay on Arrival</p>
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtlasMountains;
