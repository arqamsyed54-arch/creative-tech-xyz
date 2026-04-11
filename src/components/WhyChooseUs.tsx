import { motion } from "framer-motion";
import { Shield, Cpu, Users, TrendingUp, Award, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reasons = [
  { icon: Cpu, title: "AI-First Curriculum", desc: "Every program is built around artificial intelligence and emerging technologies from day one." },
  { icon: Users, title: "Global Community", desc: "Connect with thousands of innovators, mentors, and industry leaders across the world." },
  { icon: TrendingUp, title: "Real-World Projects", desc: "Learn by building actual products, not just theory. Ship projects that matter." },
  { icon: Shield, title: "Industry-Ready Skills", desc: "Graduate with skills that top companies are actively hiring for right now." },
  { icon: Award, title: "Expert Mentorship", desc: "Get guidance from founders, engineers, and researchers who've built the future." },
  { icon: Layers, title: "Lifetime Access", desc: "Once you're part of the movement, you have unlimited access to all resources forever." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(190_95%_55%/0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're not just another learning platform. We're a technology movement.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 0.1}>
              <motion.div
                className="group relative glass gradient-border rounded-xl p-6 transition-all duration-500"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <r.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
