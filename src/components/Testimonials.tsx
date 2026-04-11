import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import GlowCard from "./GlowCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "AI Research Student",
    text: "Creative Tech XYZ completely transformed how I think about technology. The AI fundamentals program gave me the confidence to build my own projects.",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Tech Entrepreneur",
    text: "The entrepreneurship mindset training was a game-changer. I launched my startup within 6 months of completing the program.",
    stars: 5,
  },
  {
    name: "Aisha Patel",
    role: "Innovation Lead",
    text: "The Innovation Lab is unlike anything else. It's a playground for ideas where creativity meets cutting-edge technology.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What Our <span className="gradient-text">Community Says</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real stories from innovators who started their journey with Creative Tech XYZ.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.15}>
              <GlowCard className="h-full flex flex-col">
                <Quote size={24} className="text-primary/40 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                  "{t.text}"
                </p>
                <div className="flex gap-0.5 my-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-primary fill-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
