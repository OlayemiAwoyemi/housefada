import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Utensils, Truck, Leaf, Car, Cpu, Building2, BookOpen, Plane } from "lucide-react";

const services = [
  {
    name: "Cleaning Services",
    description: "Premium residential and commercial cleaning solutions. From deep sanitisation to routine upkeep, our trained professionals ensure every space is spotless, hygienic, and welcoming — on your schedule.",
    icon: Sparkles,
    href: "/cleaning",
  },
  {
    name: "Culinary Services",
    description: "From daily meal plans to full-scale event catering, our chefs craft delicious, nutritious meals using the freshest local ingredients. Experience restaurant-quality dining in the comfort of your home.",
    icon: Utensils,
    href: "/culinary",
  },
  {
    name: "Mobility Solutions",
    description: "Executive rides, airport transfers, corporate fleet management, and logistics support across Nigeria. Travel in comfort and style with our professional, vetted drivers and well-maintained vehicles.",
    icon: Truck,
    href: "/mobility",
  },
  {
    name: "AgroFresh",
    description: "Farm-to-table freshness delivered to your doorstep. We source premium vegetables, fruits, grains, and spices directly from trusted farms, ensuring quality produce with complete traceability.",
    icon: Leaf,
    href: "/agrofresh",
  },
  {
    name: "AutoHub",
    description: "Your one-stop automotive partner — offering new and pre-owned vehicles, comprehensive maintenance, professional inspections, and flexible financing options tailored to your needs.",
    icon: Car,
    href: "/autohub",
  },
  {
    name: "Tech Innovations",
    description: "Stay ahead with the latest gadgets, smart home installations, IT infrastructure services, and dedicated tech support. We bring cutting-edge technology solutions to homes and businesses alike.",
    icon: Cpu,
    href: "/tech",
  },
  {
    name: "Real Estate & Construction",
    description: "From land acquisition and architectural design to full-scale construction, renovation, and bespoke interior decoration — we transform your property visions into stunning realities.",
    icon: Building2,
    href: "/realestate",
  },
  {
    name: "Publishing & Printing",
    description: "Complete book publishing, commercial printing, branded stationery, and print media solutions. We bring your ideas to life with precision, quality, and exceptional craftsmanship.",
    icon: BookOpen,
    href: "/publishing",
  },
  {
    name: "Travel & Tourism",
    description: "Flight bookings, visa processing, curated holiday packages, and corporate travel management. We make every journey seamless, affordable, and unforgettable for Nigerians everywhere.",
    icon: Plane,
    href: "/travel",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Services</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
            One Brand. Every <span className="text-accent">Solution.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-base leading-relaxed">
            Since 2017, HouseFada has empowered modern living by delivering premium services across nine verticals. We handle the complexities of everyday life so you can focus on what truly matters — your family, your career, and your ambitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Link
                to={service.href}
                onClick={() => window.scrollTo(0, 0)}
                className="service-card block h-full group"
              >
                <service.icon className="w-8 h-8 text-accent mb-5 transition-colors" />
                <h3 className="text-lg font-bold tracking-tight mb-2 text-foreground group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-gray-100 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
