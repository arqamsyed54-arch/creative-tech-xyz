import { Brain, Monitor, Lightbulb, Laptop, Settings, Rocket, Target, Cpu } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const programs = [
  { icon: Brain, title: "AI Fundamentals", desc: "Master the core concepts of artificial intelligence, machine learning, and neural networks to understand the technology shaping our future." },
  { icon: Monitor, title: "Technology Literacy", desc: "Build a strong foundation in understanding modern technology systems, digital infrastructure, and computing principles." },
  { icon: Lightbulb, title: "Innovation Thinking", desc: "Develop creative problem-solving skills and learn methodologies for generating breakthrough ideas." },
  { icon: Laptop, title: "Digital Productivity", desc: "Master digital tools and workflows that maximize efficiency and output in the modern workplace." },
  { icon: Settings, title: "Automation Tools", desc: "Learn to leverage automation technologies to streamline processes and build intelligent systems." },
  { icon: Rocket, title: "Entrepreneurship Mindset", desc: "Cultivate the mindset and skills needed to build startups, launch products, and create value." },
  { icon: Target, title: "Problem Solving Skills", desc: "Develop analytical and critical thinking capabilities to solve complex real-world challenges." },
  { icon: Cpu, title: "Future Tech Skills", desc: "Stay ahead with emerging technologies including blockchain, IoT, quantum computing, and beyond." },
];

const Programs = () => {
  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each program is designed to develop both technical knowledge and intelligent thinking — preparing you to build the future.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <GlowCard className="h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 w-fit mb-4">
                    <p.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
