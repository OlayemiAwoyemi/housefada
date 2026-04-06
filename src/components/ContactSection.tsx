import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border p-10 md:p-16 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs text-accent uppercase tracking-[0.3em]">Get in Touch</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-4 leading-tight">
                Ready to Experience <span className="text-accent">HouseFada?</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
                Whatever you need — cleaning, food, transport, produce, vehicles, or tech — we're one message away.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-mono text-xs uppercase tracking-[0.15em] px-7 py-3.5 hover:bg-accent/90 transition-all group"
                >
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right: Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 flex flex-col justify-center"
            >
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-[0.2em]">Phone</div>
                <a href="tel:+2348160169189" className="text-foreground hover:text-accent transition-colors text-sm">
                  +234 816 016 9189
                </a>
                <br />
                <a href="tel:+2348125461853" className="text-foreground hover:text-accent transition-colors text-sm">
                  +234 812 546 1853
                </a>
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-[0.2em]">Email</div>
                <a href="mailto:housefada@yahoo.com" className="text-foreground hover:text-accent transition-colors text-sm">
                  housefada@yahoo.com
                </a>
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-[0.2em]">Address</div>
                <p className="text-foreground text-sm">
                  49B, Wakajaye, Off Iyana-Church,
                  <br />
                  Iwo Road, Ibadan, Oyo State
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
