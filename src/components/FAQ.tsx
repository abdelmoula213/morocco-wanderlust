import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How do I book a tour?",
    a: "You can book directly through WhatsApp, our booking form, or by contacting us via email. No deposit required — pay on arrival!",
  },
  {
    q: "Is hotel pickup included?",
    a: "Yes! All our tours include free hotel pickup and drop-off from anywhere in Marrakech.",
  },
  {
    q: "What is the difference between Standard and Luxury packages?",
    a: "The difference is the category and comfort level of the accommodation. Standard includes standard desert camps or hotels, while Luxury includes premium camps or hotels with enhanced comfort. All other services (transport, camel trek, activities) remain the same.",
  },
  {
    q: "Is lunch or dinner included in day tours?",
    a: "Day tours (Imlil, Ouzoud, Ourika, Essaouira) are tour-only — lunch and dinner are NOT included. You may purchase meals independently along the route. The Sahara and Agafay tours include meals as specified in each package.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 24 hours before the tour. Cancel anytime via WhatsApp for a full refund.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash (MAD, EUR, USD, GBP), credit cards, and PayPal. Payment is made on arrival — no prepayment needed.",
  },
  {
    q: "Are your tours suitable for children?",
    a: "Most tours are family-friendly. The Sahara tour is suitable for ages 4+, and the Agafay quad bikes for ages 16+. Contact us for specific tour details.",
  },
  {
    q: "What should I bring?",
    a: "Comfortable clothing, sunscreen, sunglasses, a camera, and a warm layer for evenings. We provide everything else including helmets for quad biking.",
  },
  {
    q: "Why book directly instead of through platforms?",
    a: "Booking direct gives you the best price (no commission fees), direct WhatsApp support, flexible changes, and pay-on-arrival convenience.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-border">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-heading text-base font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
              {faq.q}
            </span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? "max-h-40 pb-5" : "max-h-0"
            }`}
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
