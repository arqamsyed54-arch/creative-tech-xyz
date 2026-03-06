import { Code, Database, Cloud, Shield, Cpu, Globe, Wifi, Layers } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const skills = [
  { icon: Cpu, title: "Artificial Intelligence", level: 95 },
  { icon: Code, title: "Programming & Development", level: 88 },
  { icon: Database, title: "Data Science & Analytics", level: 85 },
  { icon: Cloud, title: "Cloud Computing", level: 82 },
  { icon: Shield, title: "Cybersecurity", level: 78 },
  { icon: Globe, title: "Web Technologies", level: 90 },
  { icon: Wifi, title: "IoT & Connected Systems", level: 75 },
  { icon: Layers, title: "Blockchain & Web3", level: 72 },
];

const techStack = [
  "Python", "TensorFlow", "React", "Node.js", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "TypeScript", "Next.js", "Figma", "Git",
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A comprehensive showcase of the skills and technologies we teach to prepare you for the technology-driven future.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {skills.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <GlowCard>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <s.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
                    <span className="ml-auto text-primary font-display font-bold text-sm">{s.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Tech Stack */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech} delay={i * 0.05}>
                <div className="glass glow-border rounded-xl px-6 py-3 hover:glow-cyan transition-all duration-300 hover:scale-105 cursor-default">
                  <span className="font-display font-medium text-foreground text-sm">{tech}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
