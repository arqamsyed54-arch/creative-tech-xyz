import { motion } from "framer-motion";
import { Brain, Cpu, Globe, Zap, Code, Shield, Wifi, Database } from "lucide-react";

const techs = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Globe, label: "Web3 Technologies" },
  { icon: Zap, label: "Automation" },
  { icon: Code, label: "Full-Stack Dev" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Wifi, label: "IoT Systems" },
  { icon: Database, label: "Data Science" },
];

const TechMarquee = () => {
  const doubled = [...techs, ...techs];

  return (
    <section className="py-12 overflow-hidden border-y border-border/20">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-3 shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <tech.icon size={20} className="text-primary" />
              <span className="text-sm font-display font-medium text-muted-foreground whitespace-nowrap">{tech.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;
