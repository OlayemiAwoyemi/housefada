import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-NG", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Africa/Lagos",
        })
      );
      setDate(
        now.toLocaleDateString("en-NG", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: "Africa/Lagos",
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Corner brackets */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-foreground/30" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-foreground/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-foreground/30" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-foreground/30" />
      </div>

      {/* Time widget - top left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-12 left-12 md:top-20 md:left-20 font-mono text-xs text-muted-foreground"
      >
        <div className="text-foreground text-sm">{time}</div>
        <div>{date} · Ibadan, NG</div>
      </motion.div>

      {/* Status widget - top right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute top-12 right-12 md:top-20 md:right-20 font-mono text-xs text-muted-foreground text-right"
      >
        <div>RC 9363567</div>
        <div>Est. Ibadan</div>
      </motion.div>

      {/* Center content */}
      <div className="text-center max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
            HOUSE
            <span className="text-glow text-accent">FADA</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase font-mono mb-10"
        >
          Premium living, effortless
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-foreground/70 text-sm md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Whatever better looks like to you, we'll make it happen — cleaning, food,
          transport, produce, vehicles, and tech across Nigeria.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="border border-foreground px-8 py-3 text-sm uppercase tracking-widest font-mono hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/2348160169189?text=Hello%20HouseFada%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20services!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground/30 px-8 py-3 text-sm uppercase tracking-widest font-mono text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-0 right-0 overflow-hidden"
      >
        <div className="flex animate-ticker whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 text-xs font-mono text-muted-foreground/40 uppercase tracking-widest mr-8">
              <span>Trusted by 500+ clients</span>
              <span className="text-accent/40">◆</span>
              <span>5-Star rated</span>
              <span className="text-accent/40">◆</span>
              <span>Nationwide coverage</span>
              <span className="text-accent/40">◆</span>
              <span>RC 9363567 Registered</span>
              <span className="text-accent/40">◆</span>
              <span>Trusted by 500+ clients</span>
              <span className="text-accent/40">◆</span>
              <span>5-Star rated</span>
              <span className="text-accent/40">◆</span>
              <span>Nationwide coverage</span>
              <span className="text-accent/40">◆</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
