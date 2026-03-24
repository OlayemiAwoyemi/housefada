import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-accent uppercase tracking-widest">About</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 leading-none">
              ONE BRAND,
              <br />
              EVERY
              <br />
              <span className="text-accent">SOLUTION</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground/70 leading-relaxed">
              HouseFada delivers top-tier quality across convenience sectors. Our vision:
              exceed expectations whether it's impeccable hygiene, wholesome food, seamless
              travel, farm-fresh goods, dependable vehicles, or innovative technology.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Headquartered in Ibadan and serving clients nationwide, we're building a brand
              synonymous with trust, excellence, and modern living.
            </p>
            <div className="pt-4 border-t border-border">
              <span className="font-mono text-xs text-muted-foreground">RC 9363567 · Ibadan, Nigeria</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
