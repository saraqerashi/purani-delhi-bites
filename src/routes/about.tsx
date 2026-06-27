import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "../components/Footer";
import tandoori from "../assets/tandoori.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Purani Delhi Restaurant" },
      {
        name: "description",
        content:
          "Discover the story of Purani Delhi Restaurant. Authentic Indian cuisine, heritage recipes, and the taste of Old Delhi in Al Hoora, Manama, Bahrain.",
      },
      { property: "og:title", content: "Our Story — Purani Delhi Restaurant" },
      {
        property: "og:description",
        content:
          "Discover the story of Purani Delhi Restaurant. Authentic Indian cuisine, heritage recipes, and the taste of Old Delhi in Al Hoora, Manama, Bahrain.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-brand-red text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
            Heritage
          </span>
          <h1 className="font-display text-5xl lg:text-7xl mt-4">Our Story</h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl text-brand-red leading-tight">
              From the Streets of Old Delhi to the Heart of Manama
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Purani Delhi Restaurant was born from a simple belief: that great food carries memory.
              Every dish on our menu traces back to the kitchens, street carts, and royal feasts of
              North India — especially the winding lanes of Old Delhi, where generations of cooks
              perfected the balance of spice, smoke, and soul.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              In Bahrain, we recreate that same warmth and authenticity. Our chefs bring decades of
              experience, using traditional clay tandoors, slow-cooking techniques, and carefully
              sourced spices to deliver the true taste of India.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Whether you are here for a quick Chaat, a family dinner of Tandoori and Biryani, or a
              celebratory feast of Mughlai classics, we welcome you to a dining experience that
              honors the past while feeling right at home in Al Hoora.
            </p>
          </div>
          <div className="relative">
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={tandoori}
                alt="Sizzling clay oven tandoori chicken at Purani Delhi Restaurant"
                width={816}
                height={816}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 text-brand-cream max-w-[200px] hidden md:block">
              <p className="font-display text-3xl">Since</p>
              <p className="text-[10px] uppercase tracking-widest">Serving Bahrain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-brand-red mb-2">What We Stand For</h2>
            <p className="text-brand-gold font-medium uppercase tracking-[0.2em] text-xs">
              Tradition, Quality, Hospitality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/5 flex items-center justify-center mx-auto mb-6 ring-1 ring-brand-red/10">
                <span className="font-display text-2xl text-brand-red">1</span>
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-3">Authentic Recipes</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Heritage dishes prepared with traditional techniques passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/5 flex items-center justify-center mx-auto mb-6 ring-1 ring-brand-red/10">
                <span className="font-display text-2xl text-brand-red">2</span>
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-3">Fresh Ingredients</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Carefully sourced spices, premium meats, and farm-fresh produce in every dish.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-brand-red/5 flex items-center justify-center mx-auto mb-6 ring-1 ring-brand-red/10">
                <span className="font-display text-2xl text-brand-red">3</span>
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-3">Warm Hospitality</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                A welcoming atmosphere where every guest is treated like family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
