import { FlaskConical, Lightbulb, Wrench, Rocket } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const features = [
  { icon: Lightbulb, title: "Experiment with Ideas", desc: "A safe space to explore, test, and validate your most creative concepts without limits." },
  { icon: Wrench, title: "Build Creative Solutions", desc: "Transform theoretical knowledge into practical, working prototypes and products." },
  { icon: Rocket, title: "Develop Innovative Projects", desc: "Take your ideas from concept to completion with structured project development." },
  { icon: FlaskConical, title: "Think Like Founders", desc: "Adopt the mindset of entrepreneurs and innovators who build world-changing technologies." },
];

const InnovationLab = () => {
  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8">
              <FlaskConical size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Virtual Lab</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Innovation <span className="gradient-text">Lab</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A virtual environment where students experiment with ideas, build creative solutions, develop innovative projects, and think like founders.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.12}>
                <GlowCard className="h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-5">
                      <f.icon className="text-primary" size={28} />
                    </div>
                    <h3 className="font-display font-semibold text-foreground text-xl mb-3">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Lab visual */}
          <AnimatedSection delay={0.3} className="mt-20">
            <div className="glass gradient-border rounded-2xl p-12 text-center glow-purple relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
              <div className="relative z-10">
                <FlaskConical className="text-primary mx-auto mb-6" size={48} />
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Where Ideas Become Reality
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                  The Innovation Lab will inspire students to transform ideas into real-world solutions, building the bridge between imagination and impact.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default InnovationLab;
