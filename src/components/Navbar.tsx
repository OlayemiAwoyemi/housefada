import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="text-lg font-bold tracking-tighter">
          HOUSE<span className="text-accent">FADA</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-sm uppercase tracking-widest text-accent"
              >
                Get a Quote →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
