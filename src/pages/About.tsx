import { Lightbulb, Sparkles, BookOpen, Rocket, Brain, Target, Zap, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const timeline = [
  { year: "The Vision", desc: "Recognizing the gap between technology evolution and education accessibility." },
  { year: "The Foundation", desc: "Creative Tech XYZ was born — a platform to empower minds with AI and innovation knowledge." },
  { year: "The Mission", desc: "Building structured programs in AI, digital skills, automation, and entrepreneurship." },
  { year: "The Future", desc: "Growing into a global ecosystem of innovators, creators, and technology leaders." },
];

const values = [
  { icon: Lightbulb, title: "Innovation" },
  { icon: Sparkles, title: "Creativity" },
  { icon: BookOpen, title: "Knowledge Sharing" },
  { icon: Rocket, title: "Future Thinking" },
  { icon: Brain, title: "Continuous Learning" },
  { icon: Target, title: "Entrepreneurship" },
  { icon: Zap, title: "Problem Solving" },
];

const About = () => {
  return (
    <div className="min-h-screen pt-28">
      {/* Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Creative Tech XYZ</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Creative Tech XYZ is a next-generation technology education platform designed to help the new generation develop intelligence, creativity, technical knowledge, and entrepreneurial thinking.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Philosophy</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Creative Tech XYZ is based on a simple belief: <strong className="text-foreground">Knowledge creates power, and technology multiplies that power.</strong></p>
                <p>In today's world, technology is evolving rapidly. Artificial intelligence, automation, and digital innovation are transforming industries and societies.</p>
                <p>However, many people do not have access to the knowledge required to understand these technologies. Creative Tech XYZ exists to bridge this gap between knowledge and opportunity.</p>
                <p>The goal is to help individuals unlock their intellectual potential and become creators of the future.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="glass gradient-border rounded-2xl p-8 glow-purple relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <div className="relative z-10 text-center">
                  <Brain className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-xl font-display font-semibold text-foreground italic">
                    "Knowledge creates power, and technology multiplies that power."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto space-y-8">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Clock className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-1">{item.year}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Core <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <GlowCard className="text-center">
                  <v.icon className="text-primary mx-auto mb-3" size={28} />
                  <h3 className="font-display font-semibold text-foreground text-sm">{v.title}</h3>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
