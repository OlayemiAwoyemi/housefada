import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Truck, Utensils, Car, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Premium living
              <br />
              solutions built for
              <br />
              <span className="text-accent">modern Nigeria</span>
            </h1>

            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              HouseFada delivers top-tier services across cleaning, culinary, mobility, agriculture, automotive, and technology — all under one trusted brand.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-accent/90 transition-all group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-border text-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-surface-hover transition-all group"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right: Visual grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Sparkles, label: "Cleaning" },
                { icon: Utensils, label: "Culinary" },
                { icon: Truck, label: "Mobility" },
                { icon: Shield, label: "AgroFresh" },
                { icon: Car, label: "AutoHub" },
                { icon: Cpu, label: "Tech" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="bg-card border border-border p-6 flex flex-col items-center justify-center gap-3 hover:border-accent/40 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-5 py-3 shadow-lg z-10"
            >
              <div className="font-mono text-xs uppercase tracking-widest">6+ Services</div>
              <div className="font-mono text-[10px] text-accent-foreground/70 mt-0.5">One Brand</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
