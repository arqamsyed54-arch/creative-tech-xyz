import { Eye, Target, CheckCircle, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const missionPoints = [
  "Spread knowledge of technology and artificial intelligence",
  "Train students with modern digital skills",
  "Encourage creative and analytical thinking",
  "Develop entrepreneurial mindset in young people",
  "Prepare the next generation for the technology-driven future",
  "Build a community of innovators and learners",
  "Inspire people to create startups and new ideas",
];

const Vision = () => {
  return (
    <div className="min-h-screen pt-28">
      {/* Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8">
              <Eye size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Our Vision</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Building One of the Most <span className="gradient-text">Impactful</span> Technology Education Platforms
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We aim to develop a generation that is technologically intelligent, creatively innovative, entrepreneurially driven, and capable of building new solutions for humanity.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {["Technologically Intelligent", "Creatively Innovative", "Entrepreneurially Driven", "Solution Builders"].map((item, i) => (
                <GlowCard key={i} className="text-center py-8">
                  <p className="font-display font-semibold text-sm text-foreground">{item}</p>
                </GlowCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
                <Target size={14} className="text-primary" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Empowering the <span className="gradient-text">Next Generation</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creative Tech XYZ believes that education should not only deliver information but should develop intelligence and creativity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The long-term vision is to create a global community of innovators who understand technology deeply and use their knowledge to solve real-world problems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 glass rounded-lg p-4 glow-border">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                    <p className="text-foreground text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Be Part of the <span className="gradient-text">Movement</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Creative Tech XYZ wants to inspire millions of young minds to think bigger, create smarter solutions, and build the future.
            </p>
            <Button asChild size="lg" className="font-display bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
              <Link to="/programs">Explore Programs <ArrowRight size={18} /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Vision;
