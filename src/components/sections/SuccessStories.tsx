import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const stories = [
  {
    name: "Aisha K.",
    role: "AI Engineer at a Fortune 500",
    story: "Creative Tech XYZ completely changed my career trajectory. The AI program gave me the confidence and skills to land my dream job.",
    rating: 5,
  },
  {
    name: "James L.",
    role: "Startup Founder",
    story: "The entrepreneurship mindset training was a game-changer. I launched my startup within 6 months of completing the program.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Data Scientist",
    story: "The hands-on approach to learning here is unmatched. Real projects, real mentors, real impact on my career.",
    rating: 5,
  },
];

const SuccessStories = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real people, real transformations. See how our community members are changing the world.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.15}>
            <GlowCard className="h-full flex flex-col">
              <Quote className="text-primary/30 mb-3" size={28} />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">"{s.story}"</p>
              <div className="flex gap-0.5 my-3">
                {Array.from({ length: s.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">{s.name}</p>
                <p className="text-muted-foreground text-xs">{s.role}</p>
              </div>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStories;
