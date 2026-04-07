import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Truck, Utensils, Car, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] font-display">
              Premium living
              <br />
              solutions built for
              <br />
              <span className="text-accent">modern Nigeria</span>
            </h1>

            <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
              HouseFada delivers top-tier services across cleaning, culinary, mobility, agriculture, automotive, and technology — all under one trusted brand.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-accent/90 transition-all group"
              >
                Explore Services
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/2347069510606?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-border text-foreground text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-surface-hover transition-all group"
              >
                Talk to Our Team
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-2.5">
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
                  className="bg-card border border-border p-5 rounded-xl flex flex-col items-center justify-center gap-2.5 hover:border-accent/40 transition-colors"
                >
                  <item.icon className="w-7 h-7 text-accent" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-5 -right-5 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg shadow-lg z-10"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest">6+ Services</div>
              <div className="text-[9px] text-accent-foreground/70 mt-0.5">One Brand</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
