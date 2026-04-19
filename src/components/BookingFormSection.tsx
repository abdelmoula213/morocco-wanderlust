import BookingForm, { TourOption, AddOn } from "./BookingForm";

interface BookingFormSectionProps {
  lockedTour?: string;
  tourOptions?: TourOption[];
  addOns?: AddOn[];
  title?: string;
  subtitle?: string;
}

const BookingFormSection = ({ lockedTour, tourOptions, addOns, title, subtitle }: BookingFormSectionProps) => {
  return (
    <section id="booking-widget" className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          {title ?? "Book Your Tour"}
        </h2>
        <p className="font-body text-muted-foreground text-center mb-8">
          {subtitle ?? "Fill in your details and our team will get back to you by email to confirm your booking"}
        </p>

        <div className="bg-card rounded-2xl p-4 md:p-8 shadow-warm">
          <BookingForm lockedTour={lockedTour} tourOptions={tourOptions} addOns={addOns} />
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
