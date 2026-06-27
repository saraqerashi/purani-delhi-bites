import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "../components/Footer";
import tandoori from "../assets/tandoori.jpg";
import chaat from "../assets/chaat.jpg";
import curry from "../assets/curry.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Purani Delhi Restaurant" },
      {
        name: "description",
        content:
          "Explore the Purani Delhi menu: Soups, Appetisers, Indian & Chinese Main Course, Tandooris, Grills, Chaats, and more. Authentic Indian cuisine in Al Hoora, Manama.",
      },
      { property: "og:title", content: "Menu — Purani Delhi Restaurant" },
      {
        property: "og:description",
        content:
          "Explore the Purani Delhi menu: Soups, Appetisers, Indian & Chinese Main Course, Tandooris, Grills, Chaats, and more. Authentic Indian cuisine in Al Hoora, Manama.",
      },
    ],
  }),
  component: MenuPage,
});

const categories = [
  {
    title: "Soups",
    items: [
      "Tomato Soup",
      "Sweet Corn Soup",
      "Hot & Sour Soup",
      "Chicken Clear Soup",
      "Manchow Soup",
    ],
  },
  {
    title: "Appetisers",
    items: [
      "Paneer Tikka",
      "Hara Bhara Kebab",
      "Chicken Tikka",
      "Seekh Kebab",
      "Fish Amritsari",
      "Chilli Chicken",
    ],
  },
  {
    title: "Tandooris & Grills",
    items: [
      "Tandoori Chicken",
      "Tandoori Prawns",
      "Mutton Seekh Kebab",
      "Malai Broccoli",
      "Achari Tangdi",
    ],
  },
  {
    title: "Indian Main Course",
    items: [
      "Butter Chicken",
      "Chicken Tikka Masala",
      "Mutton Rogan Josh",
      "Palak Paneer",
      "Dal Makhani",
      "Kadai Vegetables",
    ],
  },
  {
    title: "Chinese Main Course",
    items: [
      "Chicken Manchurian",
      "Chilli Paneer",
      "Vegetable Chow Mein",
      "Hakka Noodles",
      "Schezwan Fried Rice",
    ],
  },
  {
    title: "Chaats",
    items: [
      "Pani Puri",
      "Dahi Papdi Chaat",
      "Aloo Tikki Chaat",
      "Samosa Chaat",
      "Bhel Puri",
    ],
  },
  {
    title: "Breads & Rice",
    items: [
      "Butter Naan",
      "Garlic Naan",
      "Roomali Roti",
      "Jeera Rice",
      "Chicken Biryani",
      "Mutton Biryani",
    ],
  },
  {
    title: "Beverages",
    items: [
      "Mango Lassi",
      "Sweet Lassi",
      "Masala Chaas",
      "Fresh Lime Soda",
      "Masala Chai",
    ],
  },
];

function MenuPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Page Header */}
      <section className="pt-16 pb-12 bg-brand-red text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium">
            Explore
          </span>
          <h1 className="font-display text-5xl lg:text-7xl mt-4">Our Menu</h1>
          <p className="mt-4 text-lg text-brand-cream/80 max-w-xl">
            A curated selection of authentic Indian and Chinese-inspired dishes, each prepared with
            heritage recipes and the finest spices.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5">
                <img
                  src={chaat}
                  alt="Traditional Indian street chaat with vibrant colors and toppings"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Artisanal Chaats</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Crispy, tangy, and sweet flavors from the bustling lanes of Chandni Chowk.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5">
                <img
                  src={tandoori}
                  alt="Sizzling clay oven tandoori chicken with lemon and onions"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Clay Oven Grills</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Smoky tandoori classics marinated for 24 hours in our secret spice blend.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="w-full aspect-square rounded-sm overflow-hidden mb-6 ring-1 ring-black/5">
                <img
                  src={curry}
                  alt="Rich creamy curry in a copper bowl with garlic naan"
                  width={816}
                  height={816}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl text-brand-red mb-2">Mughlai Classics</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Luxurious gravies and slow-cooked mains that define authentic Indian cuisine.
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categories.map((category) => (
              <div key={category.title} className="border-t border-brand-red/10 pt-6">
                <h2 className="font-display text-3xl text-brand-red mb-6">{category.title}</h2>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-cream border-y border-brand-red/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-red mb-4">Ready to Order?</h2>
          <p className="text-foreground/70 mb-8">
            Call us directly for takeaway, delivery, or table reservations.
          </p>
          <a
            href="tel:+97338220515"
            className="inline-flex px-8 py-4 bg-brand-red text-brand-cream font-semibold rounded-sm shadow-xl shadow-brand-red/10 hover:bg-brand-charcoal transition-colors"
          >
            +973 3822 0515
          </a>
        </div>
      </section>
    </main>
  );
}
