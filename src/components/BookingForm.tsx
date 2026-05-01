import { useMemo, useState } from "react";
import { Send, CheckCircle, Loader2, Wallet } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export type TourOption = { value: string; label: string; price?: number };
export type AddOn = { id: string; label: string; price?: number };

// Extract first numeric price found in a string like "Sahara Tour - Standard (800 DH)"
const extractPrice = (s: string | undefined | null): number => {
  if (!s) return 0;
  const m = /(\d+)\s*DH/i.exec(s.replace(/[,\s]/g, ""));
  return m ? parseInt(m[1], 10) : 0;
};

interface BookingFormProps {
  /** If set, the tour field is locked to this exact value (no select shown). */
  lockedTour?: string;
  /** If set (and lockedTour is not), shows a select limited to these options (e.g. Standard / Luxury). */
  tourOptions?: TourOption[];
  /** Optional add-ons (e.g. Hot Air Balloon, Buggy). Selected ones are appended to the message. */
  addOns?: AddOn[];
}

const DEFAULT_TOUR_OPTIONS: TourOption[] = [
  {
    value: "3-Day Sahara Desert Tour - Standard (800 DH)",
    label: "Sahara Tour - Standard (800 DH)",
  },
  {
    value: "3-Day Sahara Desert Tour - Luxury (2000 DH)",
    label: "Sahara Tour - Luxury (2,000 DH)",
  },
  {
    value: "Agafay Desert - Standard (400 DH)",
    label: "Agafay Desert - Standard (400 DH)",
  },
  {
    value: "Agafay Desert - Luxury (700 DH)",
    label: "Agafay Desert - Luxury (700 DH)",
  },
  { value: "Imlil Day Tour (150 DH)", label: "Imlil Day Tour (150 DH)" },
  { value: "Ouzoud Waterfalls (200 DH)", label: "Ouzoud Waterfalls (200 DH)" },
  { value: "Ourika Valley (150 DH)", label: "Ourika Valley (150 DH)" },
  {
    value: "Essaouira Day Trip (200 DH)",
    label: "Essaouira Day Trip (200 DH)",
  },
];

// Tour-specific add-ons shown automatically when no explicit `addOns` prop is passed.
// Matched against the selected tour's value (case-insensitive substring).
const TOUR_ADDONS: { match: RegExp; addOns: AddOn[] }[] = [
  {
    match: /agafay/i,
    addOns: [
      { id: "balloon-first", label: "🎈 Hot Air Balloon — First Departure (+1,400 DH/pers)", price: 1400 },
      { id: "balloon-sunset", label: "🎈 Hot Air Balloon — Sunset Departure (+1,200 DH/pers)", price: 1200 },
      { id: "buggy-small", label: "🏜️ Small Buggy Adventure (+1,000 DH/pers)", price: 1000 },
      { id: "buggy-big", label: "🏜️ Big Buggy Adventure (+2,000 DH/pers)", price: 2000 },
    ],
  },
];

const BookingForm = ({ lockedTour, tourOptions, addOns }: BookingFormProps) => {
  const options = tourOptions ?? DEFAULT_TOUR_OPTIONS;
  const initialTour =
    lockedTour ??
    (tourOptions && tourOptions.length === 1 ? tourOptions[0].value : "");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "", // ✅ remplace email par phone
    tour: initialTour,
    date: "",
    guests: "2",
    message: "",
  });

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // ---- Live total price ----
  const guestCount = useMemo(() => {
    if (formData.guests === "10+") return 10;
    const n = parseInt(formData.guests, 10);
    return isNaN(n) ? 0 : n;
  }, [formData.guests]);

  const tourPrice = useMemo(() => {
    if (lockedTour) return extractPrice(lockedTour);
    const opt = options.find((o) => o.value === formData.tour);
    return opt?.price ?? extractPrice(opt?.value ?? formData.tour);
  }, [lockedTour, options, formData.tour]);

  // Effective add-ons: explicit prop wins, otherwise infer from selected tour value.
  const effectiveAddOns = useMemo<AddOn[]>(() => {
    if (addOns && addOns.length > 0) return addOns;
    const currentTour = lockedTour ?? formData.tour;
    if (!currentTour) return [];
    const match = TOUR_ADDONS.find((t) => t.match.test(currentTour));
    return match?.addOns ?? [];
  }, [addOns, lockedTour, formData.tour]);

  const addOnsTotalPerPerson = useMemo(() => {
    if (!effectiveAddOns.length) return 0;
    return effectiveAddOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + (a.price ?? extractPrice(a.label)), 0);
  }, [effectiveAddOns, selectedAddOns]);

  const totalPrice = useMemo(
    () => (tourPrice + addOnsTotalPerPerson) * guestCount,
    [tourPrice, addOnsTotalPerPerson, guestCount],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const tourToSave = lockedTour ?? formData.tour;

    const addOnLabels = effectiveAddOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => a.label);

    const messageParts: string[] = [];
    if (addOnLabels.length > 0) {
      messageParts.push(`Add-ons: ${addOnLabels.join(", ")}`);
    }
    if (formData.message.trim()) {
      messageParts.push(formData.message.trim());
    }
    const messageToSave = messageParts.join("\n\n") || null;

    // Build a human-readable price breakdown
    const breakdownParts: string[] = [];
    if (tourPrice > 0) {
      breakdownParts.push(
        `Tour ${tourPrice.toLocaleString()} DH × ${guestCount} = ${(tourPrice * guestCount).toLocaleString()} DH`,
      );
    }
    if (addOnsTotalPerPerson > 0) {
      breakdownParts.push(
        `Extras ${addOnsTotalPerPerson.toLocaleString()} DH × ${guestCount} = ${(addOnsTotalPerPerson * guestCount).toLocaleString()} DH`,
      );
    }
    const priceBreakdown =
      totalPrice > 0
        ? `${breakdownParts.join(" + ")} → Total ${totalPrice.toLocaleString()} DH`
        : "TBD";

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      tour: tourToSave,
      preferred_date: formData.date || null,
      guests: formData.guests,
      message: messageToSave,
      price: priceBreakdown,
    };

    // Save to database (backup)
    const { error: insertError } = await supabase
      .from("bookings")
      .insert(payload);

    // Push to Excel (primary visible copy) — don't block user if it fails
    try {
      await supabase.functions.invoke("excel-append-booking", {
        body: { ...payload, total: totalPrice, price: priceBreakdown },
      });
    } catch (excelErr) {
      console.error("Excel sync failed:", excelErr);
    }

    setLoading(false);

    if (insertError) {
      setError("Sorry, we couldn't submit your request. Please try again.");
      return;
    }

    // ✅ WhatsApp alert
    const text = `🚨 New Booking!
Name: ${formData.name}
Phone: ${formData.phone}
Tour: ${tourToSave}
Date: ${formData.date}
Guests: ${formData.guests}
Add-ons: ${addOnLabels.length > 0 ? addOnLabels.join(", ") : "None"}
💰 Total: ${totalPrice > 0 ? `${totalPrice.toLocaleString()} DH` : "TBD"}
Message: ${formData.message || "None"}`;

    window.open(
      `https://wa.me/212679684999?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Thank You! 🎉
        </h3>
        <p className="font-body text-muted-foreground max-w-md mx-auto">
          Your booking request has been received. Our team will review it and
          contact you by phone shortly to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Full Name *
          </label>
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

        {/* ✅ Nouveau champ téléphone */}
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Phone Number *
          </label>
          <input
            type="number"
            required
            maxLength={20}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            placeholder="Your phone number"
          />
        </div>
      </div>

      {lockedTour ? (
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Your Tour
          </label>
          <div className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/40 font-body text-sm text-foreground">
            {lockedTour}
          </div>
        </div>
      ) : options.length > 1 ? (
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            {tourOptions ? "Choose Type *" : "Select Tour *"}
          </label>
          <select
            required
            value={formData.tour}
            onChange={(e) => { setFormData({ ...formData, tour: e.target.value }); setSelectedAddOns([]); }}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            <option value="">
              {tourOptions ? "Choose a type..." : "Choose a tour..."}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Preferred Date *
          </label>
          <input
            type="date"
            required
            value={formData.date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-1">
            Number of Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
            <option value="10+">10+ guests</option>
          </select>
        </div>
      </div>

      {effectiveAddOns.length > 0 && (
        <div>
          <label className="block font-body text-sm font-medium text-foreground mb-2">
            Add Extras (optional)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {effectiveAddOns.map((addOn) => {
              const checked = selectedAddOns.includes(addOn.id);
              return (
                <label
                  key={addOn.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border font-body text-sm cursor-pointer transition-colors ${
                    checked
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleAddOn(addOn.id)}
                    className="h-4 w-4 accent-primary"
                  />
                  <span>{addOn.label}</span>
                </label>
              );
            })}
          </div>
          <p className="font-body text-xs text-muted-foreground mt-2">
            We'll confirm pricing and availability for selected extras by phone.
          </p>
        </div>
      )}

      <div>
        <label className="block font-body text-sm font-medium text-foreground mb-1">
          Special Requests
        </label>
        <textarea
          maxLength={1000}
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
          placeholder="Any special requirements or questions..."
        />
      </div>

      {tourPrice > 0 && (
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet size={20} className="text-primary" />
              <span className="font-body text-sm font-medium text-foreground">
                Estimated Total
              </span>
            </div>
            <span className="font-heading text-xl font-bold text-primary">
              {totalPrice.toLocaleString()} DH
            </span>
          </div>
          <div className="mt-2 font-body text-xs text-muted-foreground space-y-0.5">
            <div className="flex justify-between">
              <span>Tour: {tourPrice.toLocaleString()} DH × {guestCount} {guestCount === 1 ? "guest" : "guests"}</span>
              <span>{(tourPrice * guestCount).toLocaleString()} DH</span>
            </div>
            {addOnsTotalPerPerson > 0 && (
              <div className="flex justify-between">
                <span>Extras: {addOnsTotalPerPerson.toLocaleString()} DH × {guestCount}</span>
                <span>{(addOnsTotalPerPerson * guestCount).toLocaleString()} DH</span>
              </div>
            )}
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive font-body text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {loading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {loading ? "Sending..." : "Send Booking Request"}
      </button>

      <p className="text-center font-body text-xs text-muted-foreground">
        💰 Pay on arrival · Free cancellation · Best direct price guaranteed
      </p>
    </form>
  );
};

export default BookingForm;
