import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description: "Consistent quality and punctual delivery you can count on, every single time.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Round-the-clock support and service scheduling to fit your lifestyle.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We set the highest standards across every service vertical we operate in.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every service is customized to your exact needs. Your satisfaction is our metric.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 section-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Why Choose HouseFada</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight font-display text-foreground-on-light">
            Redefining What's Possible with <span className="text-accent">HouseFada</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light border border-foreground-on-light/8 p-7 md:p-10 rounded-xl group hover:shadow-lg transition-all"
            >
              <value.icon className="w-8 h-8 text-accent mb-5" />
              <h3 className="text-base font-bold tracking-tight mb-2 text-foreground-on-light">{value.title}</h3>
              <p className="text-muted-on-light text-xs leading-relaxed max-w-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
