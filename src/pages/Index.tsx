import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Lightbulb, Sparkles, BookOpen, Rocket, Brain, Target, Users, Zap,
  ArrowRight, Globe, TrendingUp, GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleGrid from "@/components/ParticleGrid";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Learning Areas", value: 8, suffix: "+" },
  { label: "Core Values", value: 7, suffix: "" },
  { label: "Innovation Programs", value: 10, suffix: "+" },
  { label: "Future Leaders", value: 1000, suffix: "s" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries of what's possible with technology." },
  { icon: Sparkles, title: "Creativity", desc: "Transforming ideas into groundbreaking solutions." },
  { icon: BookOpen, title: "Knowledge Sharing", desc: "Making technology education accessible to all." },
  { icon: Rocket, title: "Future Thinking", desc: "Preparing minds for tomorrow's challenges." },
  { icon: Brain, title: "Continuous Learning", desc: "Embracing growth through lifelong education." },
  { icon: Target, title: "Entrepreneurship", desc: "Building the founders of tomorrow." },
  { icon: Zap, title: "Problem Solving", desc: "Developing intelligent solutions for real-world problems." },
];

const ecosystem = [
  { icon: GraduationCap, title: "Technology Programs", desc: "Structured learning paths in AI, automation, and digital skills." },
  { icon: Lightbulb, title: "Innovation Training", desc: "Hands-on labs and creative thinking workshops." },
  { icon: Users, title: "Community", desc: "A global network of innovators, creators, and founders." },
  { icon: Globe, title: "Global Impact", desc: "Empowering the next generation worldwide." },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleGrid />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-glow/5 blur-2xl animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8">
              <Zap size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Next-Generation Technology Education</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6 max-w-5xl mx-auto"
          >
            Building the{" "}
            <span className="gradient-text">Intelligent Generation</span>
            {" "}of Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Creative Tech XYZ is a futuristic technology learning platform dedicated to empowering the next generation with knowledge of artificial intelligence, modern technology, and innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="glow-cyan font-display text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/programs">
                Explore Programs <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glow-border font-display text-base px-8 border-primary/30 text-foreground hover:bg-primary/10">
              <Link to="/community">
                Join the Community
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-2 text-center">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that drive our mission to build a strong and intelligent generation of innovators.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <GlowCard>
                  <v.icon className="text-primary mb-4" size={28} />
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              The Learning <span className="gradient-text">Ecosystem</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              More than a course platform — a complete ecosystem for developing intelligence, skills, and entrepreneurial thinking.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ecosystem.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <GlowCard className="flex items-start gap-5">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="glass gradient-border rounded-2xl p-12 md:p-16 text-center glow-cyan relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
              <div className="relative z-10">
                <TrendingUp className="text-primary mx-auto mb-6" size={40} />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Shape the Future?
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                  Join Creative Tech XYZ and become part of a movement that's building the next generation of innovators, creators, and technology leaders.
                </p>
                <Button asChild size="lg" className="font-display text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                  <Link to="/programs">
                    Get Started <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
