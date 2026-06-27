import { createFileRoute, Link } from "@tanstack/react-router";

import heroFood from "../assets/hero-food.jpg";
import chaat from "../assets/chaat.jpg";
import tandoori from "../assets/tandoori.jpg";
import curry from "../assets/curry.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Purani Delhi Restaurant — Authentic Indian Dining in Bahrain" },
      {
        name: "description",
        content:
          "Purani Delhi Restaurant serves authentic Indian food in Bahrain. Enjoy Soups, Appetisers, Tandooris, Grills, Chaats, Indian & Chinese mains. Located in Al Hoora, Manama.",
      },
      {
        property: "og:title",
        content: "Purani Delhi Restaurant — Authentic Indian Dining in Bahrain",
      },
      {
        property: "og:description",
        content:
          "Purani Delhi Restaurant serves authentic Indian food in Bahrain. Enjoy Soups, Appetisers, Tandooris, Grills, Chaats, Indian & Chinese mains. Located in Al Hoora, Manama.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-brand-gold/30 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Authentic North Indian
            </div>
            <h1 className="font-display text-6xl lg:text-8xl leading-[1.1] text-brand-red">
              The Soul of <span className="italic font-normal">Old Delhi</span> in Al Hoora
            </h1>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-lg">
              Experience the rich heritage of Mughal spices and contemporary Indian-Chinese
              fusion. From our traditional Tandoors to the streets of Manama.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex px-8 py-4 bg-brand-red text-brand-cream font-semibold rounded-sm shadow-xl shadow-brand-red/10 hover:bg-brand-charcoal transition-colors"
              >
                View Full Menu
              </Link>
              <a
                href="tel:+97338220515"
                className="inline-flex items-center gap-3 px-6 py-4 border border-brand-red/10 bg-white text-foreground hover:bg-brand-cream transition-colors"
              >
                <span className="text-sm font-bold">+973 3822 0515</span>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={heroFood}
                alt="A gourmet spread of Indian tandoori platter and biryani at Purani Delhi Restaurant"
                width={1200}
                height={1408}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-gold p-8 text-brand-cream max-w-[200px] hidden md:block">
              <p className="font-display text-3xl">30+</p>
              <p className="text-[10px] uppercase tracking-widest">Years of Culinary Tradition</p>
            </div>
          </div>
        </div>
      </header>

      {/* Signature Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="font-display text-4xl text-brand-red mb-2">Our Specialities</h2>
              <p className="text-brand-gold font-medium uppercase tracking-[0.2em] text-xs">
                Crafted by Master Chefs
              </p>
            </div>
            <div className="h-px flex-1 bg-brand-gold/20 mx-12 mb-4 hidden md:block"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={chaat}
                  alt="Traditional Indian street chaat with vibrant colors and toppings"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Artisanal Chaats</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Crispy, tangy, and sweet flavors from the bustling lanes of Chandni Chowk.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={tandoori}
                  alt="Sizzling clay oven tandoori chicken with lemon and onions"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Clay Oven Grills</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Smoky tandoori classics marinated for 24 hours in our secret spice blend.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={curry}
                  alt="Rich creamy curry in a copper bowl with garlic naan"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Mughlai Classics</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Luxurious gravies and slow-cooked mains that define authentic Indian cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <footer className="bg-brand-charcoal text-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-5xl mb-8">
              Visit Us in <span className="text-brand-gold italic">Manama</span>
            </h2>
            <p className="text-brand-cream/60 text-lg mb-12 max-w-md">
              Located in the heart of Al Hoora, we bring the vibrant flavors of India to the
              Kingdom of Bahrain.
            </p>
            <div className="space-y-4">
              <p className="flex flex-col">
                <span className="text-brand-gold uppercase tracking-widest text-xs mb-1">
                  Address
                </span>
                <span className="font-medium">
                  Building 851, Road 1811, Block 318, Al Hoora, Manama, Bahrain
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-brand-gold uppercase tracking-widest text-xs mb-1">
                  Contact
                </span>
                <span className="font-medium">+973 3822 0515 / 3822 0515</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm">
              <h3 className="font-display text-2xl mb-6 text-brand-gold">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-cream/60">Mon — Fri</span>
                  <span>10:00 AM - 11:45 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2 text-brand-gold">
                  <span>Friday</span>
                  <span>10:00 AM - 11:45 PM</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-brand-cream/60">Saturday</span>
                  <span>11:00 AM - 11:45 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-cream/60">Sunday</span>
                  <span>10:00 AM - 11:45 PM</span>
                </div>
              </div>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-xs text-brand-cream/40 uppercase tracking-widest mb-4">
                  Experience
                </p>
                <div className="flex gap-6">
                  <span className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Dine-in
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Takeaway
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
