import { motion } from "framer-motion";

const services = [
  {
    name: "Cleaning Services",
    description: "Premium residential & office cleaning — every corner spotless, every time.",
    tag: "01",
    href: "/cleaning",
  },
  {
    name: "Culinary Services",
    description: "Gourmet meals, event catering, and daily meal plans crafted with fresh ingredients.",
    tag: "02",
    href: "/culinary",
  },
  {
    name: "Mobility Solutions",
    description: "Executive rides, airport transfers, and corporate fleet services across Nigeria.",
    tag: "03",
    href: "/mobility",
  },
  {
    name: "AgroFresh",
    description: "Farm-fresh vegetables, fruits, and grains delivered directly to your doorstep.",
    tag: "04",
    href: "/agrofresh",
  },
  {
    name: "AutoHub",
    description: "New & pre-owned vehicles, auto maintenance, inspections, and flexible financing.",
    tag: "05",
    href: "/autohub",
  },
  {
    name: "Tech Innovations",
    description: "Latest gadgets, smart home setups, IT services, and expert tech support.",
    tag: "06",
    href: "/tech",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">Services</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            THE HOUSEFADA <span className="text-accent">FAMILY</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.a
              key={service.tag}
              href={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block border-t border-border py-8 md:py-10 cursor-pointer transition-colors hover:bg-surface"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-xs text-muted-foreground mt-1">{service.tag}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-accent transition-colors hidden md:block">
                      EXPLORE →
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
