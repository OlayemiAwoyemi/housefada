import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Utensils, Truck, Leaf, Car, Cpu } from "lucide-react";

const services = [
  {
    name: "Cleaning Services",
    description: "Premium residential & office cleaning — every corner spotless, every time.",
    icon: Sparkles,
    href: "/cleaning",
  },
  {
    name: "Culinary Services",
    description: "Gourmet meals, event catering, and daily meal plans crafted with fresh ingredients.",
    icon: Utensils,
    href: "/culinary",
  },
  {
    name: "Mobility Solutions",
    description: "Executive rides, airport transfers, and corporate fleet services across Nigeria.",
    icon: Truck,
    href: "/mobility",
  },
  {
    name: "AgroFresh",
    description: "Farm-fresh vegetables, fruits, and grains delivered directly to your doorstep.",
    icon: Leaf,
    href: "/agrofresh",
  },
  {
    name: "AutoHub",
    description: "New & pre-owned vehicles, auto maintenance, inspections, and flexible financing.",
    icon: Car,
    href: "/autohub",
  },
  {
    name: "Tech Innovations",
    description: "Latest gadgets, smart home setups, IT services, and expert tech support.",
    icon: Cpu,
    href: "/tech",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 section-grey">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Who We Are</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight font-display">
            One Brand. Every <span className="text-accent">Solution.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            HouseFada empowers modern living by providing premium services across six verticals. This allows you to focus on what matters, while we handle the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={service.href}
                onClick={() => window.scrollTo(0, 0)}
                className="block bg-background border border-border p-7 md:p-8 rounded-xl group hover:bg-surface hover:border-accent/30 transition-all h-full"
              >
                <service.icon className="w-8 h-8 text-accent mb-5" />
                <h3 className="text-base font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-accent group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
