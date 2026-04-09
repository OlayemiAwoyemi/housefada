import { motion } from "framer-motion";
import { ShieldCheck, Clock, Star, Users } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable",
    description: "Since 2017, we've built our reputation on consistency, transparency, and punctual delivery. Every service is backed by vetted professionals and rigorous quality standards you can depend on.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Life doesn't run on a 9-to-5 schedule, and neither do we. Our round-the-clock support and flexible scheduling ensure you get the help you need, exactly when you need it — day or night.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "We don't cut corners. From the products we use to the people we hire, HouseFada sets the highest standards across every service vertical. Excellence isn't aspirational — it's our baseline.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Every interaction is an opportunity to exceed expectations. We listen, adapt, and personalise our services to your unique needs. Your satisfaction isn't just a goal — it's the metric we measure everything by.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 md:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose HouseFada</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-display text-foreground-on-light">
            Built on Trust Since <span className="text-accent">2017</span>
          </h2>
          <p className="mt-3 text-muted-on-light text-base leading-relaxed max-w-xl">
            For over eight years, HouseFada has been setting the standard for premium living services in Nigeria. Here's what sets us apart from the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-light border border-foreground-on-light/8 p-8 md:p-10 rounded-xl group hover:shadow-lg transition-all"
            >
              <value.icon className="w-8 h-8 text-accent mb-5" />
              <h3 className="text-lg font-bold tracking-tight mb-2 text-foreground-on-light">{value.title}</h3>
              <p className="text-muted-on-light text-sm leading-relaxed">
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
