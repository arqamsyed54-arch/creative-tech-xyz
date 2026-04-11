import { motion } from "framer-motion";
import { Rocket, Globe, Cpu, Sparkles, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const milestones = [
  { icon: Sparkles, year: "Phase 1", title: "Foundation", desc: "Launch core AI & technology education programs with world-class curriculum." },
  { icon: Globe, year: "Phase 2", title: "Global Expansion", desc: "Expand to 50+ countries with localized content and community chapters." },
  { icon: Cpu, year: "Phase 3", title: "Innovation Hub", desc: "Open physical and virtual innovation labs for hands-on experimentation." },
  { icon: Rocket, year: "Phase 4", title: "Startup Incubator", desc: "Launch a global incubator to fund and mentor student-led startups." },
  { icon: Star, year: "Phase 5", title: "The Movement", desc: "Become the world's largest technology education movement shaping the future." },
];

const RoadmapTimeline = () => {
  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A bold vision mapped out in phases — each step closer to transforming technology education worldwide.
          </p>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50" />

          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={m.title} delay={i * 0.12}>
                <div className={`relative flex items-start gap-6 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center glow-cyan"
                      whileInView={{ scale: [0.5, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <m.icon size={20} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <span className="text-xs font-display font-bold text-primary uppercase tracking-widest">{m.year}</span>
                    <h3 className="font-display font-semibold text-foreground text-lg mt-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
