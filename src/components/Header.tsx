import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-brand-red/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tight text-brand-red">
            Purani Delhi
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 text-brand-gold">
            Restaurant
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wider">
          <Link
            to="/menu"
            className="hover:text-brand-gold transition-colors"
            activeProps={{ className: "text-brand-gold" }}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="hover:text-brand-gold transition-colors"
            activeProps={{ className: "text-brand-gold" }}
          >
            Our Story
          </Link>
          <Link
            to="/visit"
            className="hover:text-brand-gold transition-colors"
            activeProps={{ className: "text-brand-gold" }}
          >
            Location
          </Link>
        </div>
        <a
          href="tel:+97338220515"
          className="bg-brand-red text-brand-cream px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-charcoal transition-all"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
