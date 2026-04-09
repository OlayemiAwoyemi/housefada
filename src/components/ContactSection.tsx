import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 lg:px-10 section-grey">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card border border-border p-8 md:p-14 lg:p-16 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get in Touch</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-3 leading-tight font-display">
                Ready to Experience <span className="text-accent">HouseFada?</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-md">
                Whether you need a spotless home, a gourmet meal, a reliable ride, fresh produce, a new vehicle, or expert tech support — we're just one message away. Join thousands of satisfied clients who have trusted HouseFada since 2017.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2347069510606?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-accent/90 transition-all group"
                >
                  Chat on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Phone</div>
                <a href="tel:+2348160169189" className="text-foreground hover:text-accent transition-colors text-base">
                  +234 816 016 9189
                </a>
                <br />
                <a href="tel:+2347069510606" className="text-foreground hover:text-accent transition-colors text-base">
                  +234 706 951 0606
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Email</div>
                <a href="mailto:housefada@yahoo.com" className="text-foreground hover:text-accent transition-colors text-base">
                  housefada@yahoo.com
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Address</div>
                <p className="text-foreground text-base">
                  Redemption City, Mowe,
                  <br />
                  Ogun State, Nigeria
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Established</div>
                <p className="text-foreground text-base">2017</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
