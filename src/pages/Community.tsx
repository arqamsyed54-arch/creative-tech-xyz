import { Users, GraduationCap, Palette, Cpu, Rocket, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const members = [
  { icon: GraduationCap, title: "Students", desc: "Eager learners building their technology foundation." },
  { icon: Palette, title: "Creators", desc: "Digital artists and builders crafting innovative solutions." },
  { icon: Cpu, title: "Tech Enthusiasts", desc: "Passionate individuals exploring the frontiers of technology." },
  { icon: Rocket, title: "Future Entrepreneurs", desc: "Visionaries building the startups of tomorrow." },
];

const Community = () => {
  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-8">
              <Users size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Join Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Community</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A strong global community of learners and innovators who collaborate, share ideas, and grow together.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
            {members.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.1}>
                <GlowCard className="text-center py-8">
                  <m.icon className="text-primary mx-auto mb-4" size={32} />
                  <h3 className="font-display font-semibold text-foreground text-lg mb-2">{m.title}</h3>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="glass gradient-border rounded-2xl p-12 md:p-16 text-center glow-cyan relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
              <div className="relative z-10">
                <Users className="text-primary mx-auto mb-6" size={40} />
                <h2 className="text-3xl font-display font-bold mb-4">Join the Movement</h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
                  Become part of a community that's shaping the future of technology and innovation. Collaborate, learn, and grow together.
                </p>
                <Button asChild size="lg" className="font-display bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan">
                  <Link to="/contact">Get in Touch <ArrowRight size={18} /></Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Community;
