import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 relative">
      {/* Corner brackets */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/20" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/20" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-foreground/20" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/20" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-6">
            READY TO EXPERIENCE
            <br />
            <span className="text-accent">HOUSEFADA?</span>
          </h2>
          <p className="text-foreground/70 max-w-lg mx-auto mb-12">
            Whatever you need — cleaning, food, transport, produce, vehicles, or tech — we're one message away.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <a
            href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent text-accent px-10 py-4 text-sm uppercase tracking-widest font-mono hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Chat with Us on WhatsApp
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">Phone</div>
              <a href="tel:+2348160169189" className="text-foreground/80 hover:text-accent transition-colors text-sm">
                +234 816 016 9189
              </a>
              <br />
              <a href="tel:+2348125461853" className="text-foreground/80 hover:text-accent transition-colors text-sm">
                +234 812 546 1853
              </a>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">Email</div>
              <a href="mailto:housefada@yahoo.com" className="text-foreground/80 hover:text-accent transition-colors text-sm">
                housefada@yahoo.com
              </a>
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">Address</div>
              <p className="text-foreground/80 text-sm">
                49B, Wakajaye, Off Iyana-Church,
                <br />
                Iwo Road, Ibadan, Oyo State
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
