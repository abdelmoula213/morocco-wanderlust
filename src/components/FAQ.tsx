import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type FAQItem = { q: string; a: string };

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as FAQItem[];

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="border-b border-border">
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
              open === i ? "max-h-60 pb-5" : "max-h-0"
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
