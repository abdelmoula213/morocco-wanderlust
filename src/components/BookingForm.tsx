import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: "",
    date: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hello SEE&KNOW Tours!\n\nName: ${formData.name}\nEmail: ${formData.email}\nTour: ${formData.tour}\nDate: ${formData.date}\nGuests: ${formData.guests}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/212600000000?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Booking Request Sent!</h3>
        <p className="font-body text-muted-foreground">We'll confirm your booking on WhatsApp shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">Full Name *</label>
          <input
            type="text"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">Email *</label>
          <input
            type="email"
            required
            maxLength={255}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">Select Tour *</label>
        <select
          required
          value={formData.tour}
          onChange={(e) => setFormData({ ...formData, tour: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        >
          <option value="">Choose a tour...</option>
          <option value="3-Day Sahara Desert Tour">3-Day Sahara Desert Tour</option>
          <option value="Agafay Desert Tour">Agafay Desert Tour</option>
          <option value="Atlas Mountains & Imlil">Atlas Mountains & Imlil</option>
          <option value="Ouzoud Waterfalls">Ouzoud Waterfalls</option>
          <option value="Essaouira Day Trip">Essaouira Day Trip</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">Preferred Date *</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">Number of Guests</label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
            ))}
            <option value="10+">10+ guests</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">Special Requests</label>
        <textarea
          maxLength={1000}
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
          placeholder="Any special requirements or questions..."
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors"
      >
        <Send size={16} />
        Send Booking Request
      </button>
      <p className="text-center font-body text-xs text-muted-foreground">
        💰 Pay on arrival · Free cancellation · Best direct price guaranteed
      </p>
    </form>
  );
};

export default BookingForm;
