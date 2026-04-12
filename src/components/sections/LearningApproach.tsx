import { motion } from "framer-motion";
import { Code, Layers, Cpu, Workflow, Puzzle, BarChart3 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const approaches = [
  { icon: Code, title: "Project-Based Learning", desc: "Build real products and solutions from day one. Theory meets practice in every module." },
  { icon: Layers, title: "Modular Curriculum", desc: "Pick your own path. Our stackable modules let you learn at your own pace and depth." },
  { icon: Cpu, title: "AI-Powered Personalization", desc: "Our intelligent system adapts content difficulty and pace to your learning style." },
  { icon: Workflow, title: "Mentor-Guided Progress", desc: "Industry experts review your work and guide you through challenges." },
  { icon: Puzzle, title: "Collaborative Challenges", desc: "Team up with peers worldwide to solve real-world problems in hackathons and labs." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track your progress, identify strengths, and focus on areas that need improvement." },
];

const LearningApproach = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Our Learning <span className="gradient-text">Approach</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We don't just deliver content — we engineer transformative learning experiences.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {approaches.map((a, i) => (
          <AnimatedSection key={a.title} delay={i * 0.08}>
            <GlowCard className="h-full">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 inline-flex mb-4">
                <a.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LearningApproach;
