import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

const BOKUN_SCRIPT_URL =
  "https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=33e3b4d4-1dd7-4cd5-912d-61a588e6f5a3";
const DEFAULT_BOKUN_WIDGET_SRC =
  "https://widgets.bokun.io/online-sales/33e3b4d4-1dd7-4cd5-912d-61a588e6f5a3/experience-calendar";

interface BookingCalendarWidgetProps {
  bokunWidgetSrc?: string;
}

const BookingCalendarWidget = ({ bokunWidgetSrc }: BookingCalendarWidgetProps) => {
  const widgetSrc = bokunWidgetSrc || DEFAULT_BOKUN_WIDGET_SRC;
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const existing = document.querySelector(`script[src*="BokunWidgetsLoader"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = BOKUN_SCRIPT_URL;
      script.async = true;
      script.type = "text/javascript";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="booking-widget" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Check Availability & Book Your Tour
        </h2>

        <div className="bg-card rounded-2xl p-4 md:p-8 shadow-warm">
          <div
            className="bokunWidget w-full"
            data-src={widgetSrc}
          />
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>

        <div className="text-center mt-8">
          <p className="font-body text-muted-foreground mb-3">
            Prefer to book directly? Contact us on WhatsApp
          </p>
          <a
            href="https://wa.me/212766776545?text=Hello!%20I%27d%20like%20to%20book%20a%20tour%20with%20SEE%26KNOW%20Tours%20%26%20Travels."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-body font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-warm"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendarWidget;
