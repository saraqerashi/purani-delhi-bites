import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "../components/Footer";
import { MapPin, Phone, Clock, Utensils } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Purani Delhi Restaurant" },
      {
        name: "description",
        content:
          "Visit Purani Delhi Restaurant in Al Hoora, Manama, Bahrain. Find our address, phone number, opening hours, and directions.",
      },
      { property: "og:title", content: "Visit Us — Purani Delhi Restaurant" },
      {
        property: "og:description",
        content:
          "Visit Purani Delhi Restaurant in Al Hoora, Manama, Bahrain. Find our address, phone number, opening hours, and directions.",
      },
    ],
  }),
  component: VisitPage,
});

const hours = [
  { day: "Monday", time: "10:00 AM - 11:45 PM" },
  { day: "Tuesday", time: "10:00 AM - 11:45 PM" },
  { day: "Wednesday", time: "10:00 AM - 11:45 PM" },
  { day: "Thursday", time: "10:00 AM - 11:45 PM" },
  { day: "Friday", time: "10:00 AM - 11:45 PM" },
  { day: "Saturday", time: "11:00 AM - 11:45 PM" },
  { day: "Sunday", time: "10:00 AM - 11:45 PM" },
];

function VisitPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-brand-red text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
            Location
          </span>
          <h1 className="font-display text-5xl lg:text-7xl mt-4">Visit Us</h1>
          <p className="mt-4 text-lg text-brand-cream/80 max-w-xl">
            We are located in the vibrant Al Hoora district of Manama, ready to serve you authentic
            Indian flavors.
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-brand-gold" />
                <h2 className="font-display text-3xl text-brand-red">Address</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Building 851, Road 1811, Block 318
                <br />
                Al Hoora, Manama, Bahrain
              </p>
              <a
                href="https://maps.google.com/?q=Building+851,+Road+1811,+Block+318,+Al+Hoora,+Manama,+Bahrain"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-4 px-6 py-3 bg-brand-gold text-brand-charcoal font-semibold rounded-sm hover:bg-brand-gold/90 transition-colors"
              >
                Get Directions
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-5 h-5 text-brand-gold" />
                <h2 className="font-display text-3xl text-brand-red">Contact</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                <a href="tel:+97338220515" className="hover:text-brand-red transition-colors">
                  +973 3822 0515
                </a>
              </p>
              <p className="text-sm text-foreground/60 mt-2">Call us for reservations, takeaway, or delivery.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-5 h-5 text-brand-gold" />
                <h2 className="font-display text-3xl text-brand-red">Dining Options</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 border border-brand-red/10 text-sm">Dine-in</span>
                <span className="px-4 py-2 border border-brand-red/10 text-sm">Takeaway</span>
                <span className="px-4 py-2 border border-brand-red/10 text-sm">Delivery</span>
              </div>
              <p className="text-sm text-foreground/60 mt-4">Price Range · $$</p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white border border-brand-red/5 rounded-sm p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-brand-gold" />
              <h2 className="font-display text-3xl text-brand-red">Opening Hours</h2>
            </div>
            <div className="space-y-4">
              {hours.map(({ day, time }) => (
                <div
                  key={day}
                  className="flex justify-between border-b border-brand-red/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-foreground/80">{day}</span>
                  <span className="font-medium text-brand-charcoal">{time}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-foreground/50 uppercase tracking-widest">
              Last orders 30 minutes before closing
            </p>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full h-[400px] rounded-sm overflow-hidden ring-1 ring-black/5 bg-muted">
            <iframe
              title="Purani Delhi Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7!2d50.5789!3d26.2334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE0JzAwLjIiTiA1MMKwMzQnNDQuMCJF!5e0!3m2!1sen!2sbh!4v1600000000000!5m2!1sen!2sbh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

