import { Brain, Video, Code, PenTool, BarChart3, Megaphone, Camera, Globe, Shield, Cpu, Layers, Smartphone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const skills = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    importance: "AI is transforming every industry. Professionals with AI skills earn 40% more and are in the top 1% most sought-after talent globally.",
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    importance: "Video content drives 82% of internet traffic. Skilled editors are essential for brands, creators, and media companies worldwide.",
  },
  {
    icon: Code,
    title: "Programming & Development",
    importance: "Software development remains the backbone of the digital economy, with millions of unfilled developer positions globally.",
  },
  {
    icon: PenTool,
    title: "UI/UX & Graphic Design",
    importance: "Great design increases conversion by 200%. Companies invest billions in user experience to stay competitive.",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    importance: "Data-driven decisions increase profitability by 6%. Data scientists are called the 'sexiest job of the 21st century.'",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & SEO",
    importance: "Digital ad spending exceeds $600B annually. Marketers who understand AI-powered tools command premium salaries.",
  },
  {
    icon: Camera,
    title: "Content Creation & Social Media",
    importance: "The creator economy is worth $250B+. Content creators shape culture, build brands, and drive global conversations.",
  },
  {
    icon: Globe,
    title: "Web3 & Blockchain",
    importance: "Decentralized technologies are redefining finance, ownership, and trust. Early adopters lead the next digital revolution.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    importance: "Cybercrime costs $10.5 trillion annually. Security professionals are critical for protecting digital infrastructure worldwide.",
  },
  {
    icon: Cpu,
    title: "Automation & Robotics",
    importance: "Automation will transform 85 million jobs by 2025. Understanding automation tools is essential for future-proof careers.",
  },
  {
    icon: Layers,
    title: "Cloud Computing",
    importance: "The cloud market exceeds $500B. Cloud skills are required in 80% of enterprise tech roles today.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    importance: "5 billion smartphone users worldwide depend on apps daily. Mobile developers shape how humanity interacts with technology.",
  },
];

const FutureSkills = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Next-Gen Skills</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Skills That <span className="gradient-text">Define the Future</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We focus on teaching the most in-demand skills of tomorrow — the skills that will empower the next generation to lead, innovate, and build the future.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.06}>
            <GlowCard className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <s.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground">{s.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.importance}</p>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FutureSkills;
