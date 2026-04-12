import { motion } from "framer-motion";
import { Building2, Heart, Banknote, GraduationCap, Plane, ShoppingBag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const industries = [
  { icon: Building2, name: "Technology", desc: "Software, AI, Cloud Computing" },
  { icon: Heart, name: "Healthcare", desc: "AI Diagnostics, Health Tech" },
  { icon: Banknote, name: "Finance", desc: "FinTech, Blockchain, DeFi" },
  { icon: GraduationCap, name: "Education", desc: "EdTech, E-Learning, LMS" },
  { icon: Plane, name: "Aviation & Space", desc: "Drone Tech, Space Innovation" },
  { icon: ShoppingBag, name: "E-Commerce", desc: "Digital Marketing, AI Commerce" },
];

const IndustryFocus = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Industries We <span className="gradient-text">Prepare You For</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our training aligns with the fastest-growing industries shaping the future of work.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.name} delay={i * 0.1}>
            <motion.div
              className="glass gradient-border rounded-2xl p-6 text-center group"
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:glow-cyan transition-all">
                <ind.icon className="text-primary" size={26} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{ind.name}</h3>
              <p className="text-muted-foreground text-xs">{ind.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryFocus;
