import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, LucideIcon } from "lucide-react";

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Link to="/" className="text-lg font-bold tracking-tighter">
            HOUSE<span className="text-accent">FADA</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div>
              <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">{tag}</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4 leading-[0.95]">
                {title} <span className="text-accent">{accent}</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                {description}
              </p>
              <div className="mt-10">
                <a
                  href={`https://wa.me/2348160169189?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-accent/90 transition-all group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-64 h-64 bg-card border border-border flex items-center justify-center">
                <Icon className="w-24 h-24 text-accent/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long description */}
      <section className="py-20 md:py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Overview</span>
            <p className="mt-6 text-foreground/80 text-lg md:text-xl leading-relaxed">
              {longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-4">
              Our <span className="text-accent">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 md:p-10"
              >
                <div className="font-mono text-xs text-accent mb-4">0{index + 1}</div>
                <h3 className="text-lg font-bold tracking-tight mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              Ready to Get <span className="text-accent">Started?</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-10">
              Reach out to us on WhatsApp and let's discuss how we can help you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/2348160169189?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-accent/90 transition-all group"
              >
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-border text-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-surface-hover transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} HouseFada · RC 9363567
          </div>
          <Link to="/" className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors">
            housefada.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ServicePageLayout;
