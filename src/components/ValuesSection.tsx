import { motion } from "framer-motion";

const values = [
  { title: "Excellence", description: "We set the highest standards in every service we offer." },
  { title: "Reliability", description: "Consistent quality and punctual delivery you can count on." },
  { title: "Tailored", description: "Every service is customized to fit your exact needs." },
  { title: "Customer Focus", description: "Your satisfaction is our only measure of success." },
];

const ValuesSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent uppercase tracking-widest">Why HouseFada</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4">
            BUILT ON <span className="text-accent">TRUST</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 md:p-10 group hover:bg-surface-hover transition-colors"
            >
              <div className="font-mono text-xs text-accent mb-6">0{index + 1}</div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
