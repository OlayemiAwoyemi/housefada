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
    <section id="services" className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Who We Are</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
            One Brand. Every <span className="text-accent">Solution.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            HouseFada empowers modern living by providing premium services across six verticals. This allows you to focus on what matters, while we handle the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="block bg-background p-8 md:p-10 group hover:bg-surface transition-colors h-full"
              >
                <service.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-lg font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-3.5 h-3.5" />
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
