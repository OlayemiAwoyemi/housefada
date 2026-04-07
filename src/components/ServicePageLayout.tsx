import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";
import logo from "@/assets/HouseFada_Logo.png";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  tag: string;
  title: string;
  accent: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  icon: LucideIcon;
  whatsappMessage: string;
}

const ServicePageLayout = ({
  tag,
  title,
  accent,
  description,
  longDescription,
  features,
  icon: Icon,
  whatsappMessage,
}: ServicePageLayoutProps) => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Sticky top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link to="/" className="shrink-0">
            <img src={logo} alt="HouseFada" className="h-8" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            <div>
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">{tag}</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3 leading-[1.05] font-display">
                {title} <span className="text-accent">{accent}</span>
              </h1>
              <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                {description}
              </p>
              <div className="mt-8">
                <a
                  href={`https://wa.me/2347069510606?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-accent/90 transition-all group"
                >
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-56 h-56 bg-card border border-border rounded-2xl flex items-center justify-center">
                <Icon className="w-20 h-20 text-accent/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-16 md:py-24 px-6 section-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Overview</span>
            <p className="mt-5 text-foreground-on-light/80 text-base md:text-lg leading-relaxed">
              {longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-24 px-6 section-grey">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">What We Offer</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3 font-display">
              Our <span className="text-accent">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-background border border-border p-7 md:p-8 rounded-xl"
              >
                <div className="text-[10px] font-bold text-accent mb-3 tracking-wider">0{index + 1}</div>
                <h3 className="text-sm font-bold tracking-tight mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 section-light">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-5 font-display text-foreground-on-light">
              Ready to Get <span className="text-accent">Started?</span>
            </h2>
            <p className="text-muted-on-light text-sm max-w-md mx-auto mb-8">
              Reach out to us on WhatsApp and let's discuss how HouseFada can simplify your life. We've been doing this since 2017 — you're in good hands.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/2347069510606?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-accent/90 transition-all group"
              >
                Chat on WhatsApp
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-foreground-on-light/20 text-foreground-on-light text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-surface-light-hover transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} HouseFada · RC 9363567 · Est. 2017
          </div>
          <Link to="/" className="text-[10px] text-muted-foreground hover:text-accent transition-colors">
            housefada.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ServicePageLayout;
