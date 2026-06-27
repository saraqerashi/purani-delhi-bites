import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-cream py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-2xl font-bold tracking-tight text-brand-cream">
            Purani Delhi
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 text-brand-gold">
            Restaurant
          </span>
        </Link>
        <div className="flex gap-8">
          <Link to="/menu" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors">
            Our Story
          </Link>
          <Link to="/visit" className="text-sm text-brand-cream/60 hover:text-brand-gold transition-colors">
            Visit
          </Link>
        </div>
        <p className="text-xs text-brand-cream/40">
          © {new Date().getFullYear()} Purani Delhi Restaurant. Al Hoora, Manama.
        </p>
      </div>
    </footer>
  );
}
