import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="bg-surface/30 border border-white/10 p-8 md:p-14 lg:p-16 rounded-2xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Get in Touch</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-3 leading-tight text-white">
                Ready to Experience <span className="text-accent text-glow">HouseFada?</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-base leading-relaxed max-w-md relative z-10">
                Whether you need a spotless home, a gourmet meal, a reliable ride, fresh produce, a new vehicle, expert tech support, a dream home built, books published, or a trip planned — we're just one message away. Join thousands of satisfied clients who have trusted HouseFada since 2017.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3.5 rounded-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(255,40,80,0.4)] hover:shadow-[0_0_30px_rgba(255,40,80,0.6)] group relative z-10"
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
              className="space-y-6 flex flex-col justify-center relative z-10"
            >
              <div className="border-l-2 border-white/10 pl-5 hover:border-accent transition-colors">
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Phone</div>
                <a href="tel:+2348160169189" className="text-white hover:text-accent transition-colors text-base font-medium">
                  +234 816 016 9189
                </a>
              </div>
              <div className="border-l-2 border-white/10 pl-5 hover:border-accent transition-colors">
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Email</div>
                <a href="mailto:housefada@yahoo.com" className="text-white hover:text-accent transition-colors text-base font-medium">
                  housefada@yahoo.com
                </a>
              </div>
              <div className="border-l-2 border-white/10 pl-5 hover:border-accent transition-colors">
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Address</div>
                <p className="text-white text-base font-medium">
                  Redemption City, Mowe,
                  <br />
                  Ogun State, Nigeria
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-5 hover:border-accent transition-colors">
                <div className="text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-widest">Established</div>
                <p className="text-white text-base font-medium">2017</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
