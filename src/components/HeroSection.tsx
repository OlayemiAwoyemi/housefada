import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Truck, Utensils, Car, Cpu, Building2, BookOpen, Plane } from "lucide-react";

const services = [
  { icon: Sparkles, label: "Cleaning", href: "/cleaning" },
  { icon: Utensils, label: "Culinary", href: "/culinary" },
  { icon: Truck, label: "Mobility", href: "/mobility" },
  { icon: Shield, label: "AgroFresh", href: "/agrofresh" },
  { icon: Car, label: "AutoHub", href: "/autohub" },
  { icon: Cpu, label: "Tech", href: "/tech" },
  { icon: Building2, label: "Real Estate", href: "/realestate" },
  { icon: BookOpen, label: "Publishing", href: "/publishing" },
  { icon: Plane, label: "Travel", href: "/travel" },
];

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 subtle-grid bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] text-foreground">
              Premium living
              <br />
              solutions built for
              <br />
              <span className="text-accent">modern Nigeria</span>
            </h1>

            <p className="mt-5 text-muted-foreground text-base max-w-md leading-relaxed">
              Since 2017, HouseFada has delivered top-tier services across cleaning, culinary, mobility, agriculture, automotive, technology, real estate, publishing, and travel — empowering thousands of Nigerians to live smarter, better, and more conveniently every day.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-accent/90 transition-all shadow-sm group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 text-foreground text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-gray-50 transition-all group shadow-sm"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-3">
              {services.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className="service-card flex flex-col items-center justify-center gap-3 hover:scale-[1.02] cursor-pointer block group"
                  >
                    <item.icon className="w-6 h-6 text-accent transition-colors" />
                    <span className="text-[12px] font-medium text-muted-foreground text-center group-hover:text-foreground transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white border border-gray-200 px-5 py-3 rounded-lg shadow-lg z-10"
            >
              <div className="text-xs font-bold text-foreground">Since 2017</div>
              <div className="text-[12px] text-muted-foreground mt-0.5">9 Services</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
