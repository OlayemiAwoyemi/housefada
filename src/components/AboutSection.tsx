import { motion } from "framer-motion";
import logoIcon from "@/assets/HouseFada_Logo_Full.png";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-surface-light border border-foreground-on-light/10 rounded-2xl flex items-center justify-center">
              <img src={logoIcon} alt="HouseFada" className="w-40 h-40 object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Mission</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 leading-tight font-display text-foreground-on-light">
              The Future is <span className="text-accent">Effortless Living</span>
            </h2>
            <p className="mt-5 text-muted-on-light text-sm leading-relaxed">
              Convenience isn't a luxury — it's the foundation. HouseFada introduces seamless, premium services across every aspect of modern life. From impeccable cleaning to gourmet meals, reliable transport to farm-fresh deliveries — all without compromise.
            </p>
            <p className="mt-3 text-muted-on-light text-sm leading-relaxed">
              Serving clients nationwide, we're building a brand synonymous with trust, excellence, and modern living across Nigeria.
            </p>
            <div className="mt-6 pt-5 border-t border-foreground-on-light/10">
              <span className="text-xs text-muted-on-light">RC 9363567 · Redemption City, Mowe, Ogun State, Nigeria</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
