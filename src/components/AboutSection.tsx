import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-surface border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl md:text-9xl font-bold tracking-tighter text-accent/20">HF</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.3em] mt-4">Est. 2024</div>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Mission</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-4 leading-tight">
              The Future is <span className="text-accent">Effortless Living</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Convenience isn't a luxury — it's the foundation. HouseFada introduces seamless, premium services across every aspect of modern life. From impeccable cleaning to gourmet meals, reliable transport to farm-fresh deliveries — all without compromise.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Headquartered in Ibadan and serving clients nationwide, we're building a brand synonymous with trust, excellence, and modern living across Nigeria.
            </p>
            <div className="mt-8 pt-6 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground">RC 9363567 · Ibadan, Oyo State, Nigeria</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
