import { motion } from "framer-motion";
import logoIcon from "@/assets/HouseFada_Icon.png";

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
              <img src={logoIcon} alt="HouseFada" className="w-44 h-44 object-contain" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl">
              <div className="text-xs font-bold uppercase tracking-widest">Est. 2017</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Mission</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 leading-tight font-display text-foreground-on-light">
              The Future is <span className="text-accent">Effortless Living</span>
            </h2>
            <p className="mt-5 text-muted-on-light text-base leading-relaxed">
              Since 2017, HouseFada has been on a mission to redefine convenience for modern Nigeria. We believe that premium living shouldn't be reserved for the few — it should be accessible, seamless, and woven into the fabric of everyday life. That conviction drives everything we build.
            </p>
            <p className="mt-3 text-muted-on-light text-base leading-relaxed">
              From immaculate cleaning services and chef-curated meals to reliable executive transport, farm-fresh produce, trusted automotive solutions, and cutting-edge technology — HouseFada brings together six distinct verticals under one brand, unified by an unwavering commitment to quality.
            </p>
            <p className="mt-3 text-muted-on-light text-base leading-relaxed">
              Headquartered in Redemption City, Mowe, Ogun State, we serve clients across Nigeria with a growing network of trained professionals, vetted suppliers, and technology-driven operations. Our goal is simple: handle the details of modern life so you can focus on what truly matters.
            </p>
            <div className="mt-6 pt-5 border-t border-foreground-on-light/10 flex items-center gap-6">
              <span className="text-sm text-muted-on-light">RC 9363567</span>
              <span className="text-sm text-muted-on-light">Redemption City, Mowe, Ogun State, Nigeria</span>
              <span className="text-sm text-muted-on-light">Est. 2017</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
