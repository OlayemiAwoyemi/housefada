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
    <section className="py-24 md:py-40 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Why Choose HouseFada</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Redefining What's Possible with <span className="text-accent">HouseFada</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 md:p-12 group"
            >
              <value.icon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold tracking-tight mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
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
