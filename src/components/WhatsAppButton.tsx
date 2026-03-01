import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212766776545";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello! I'd like to book a tour with SEE&KNOW Tours & Travels.");

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,40%)] px-5 py-3.5 font-body font-semibold text-[hsl(0,0%,100%)] shadow-warm-lg transition-all hover:scale-105 hover:shadow-2xl animate-float"
      aria-label="Book on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
