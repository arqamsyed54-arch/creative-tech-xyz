import {
  Code, Database, Cloud, Shield, Cpu, Globe, Wifi, Layers,
  Video, Palette, Camera, Music, PenTool, Brush, Box, Smartphone,
  Bot, Briefcase, Megaphone, BarChart3, Lock, Gamepad2, Zap, Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import ParticleGrid from "@/components/ParticleGrid";

const skillCategories = [
  {
    title: "AI & Data",
    color: "from-primary to-purple-glow",
    skills: [
      { icon: Cpu, title: "Artificial Intelligence", level: 95, desc: "Building intelligent systems with LLMs, ML, and neural networks." },
      { icon: Bot, title: "Generative AI & Prompt Engineering", level: 92, desc: "Mastering ChatGPT, Claude, Midjourney, and AI workflows." },
      { icon: Database, title: "Data Science & Analytics", level: 85, desc: "Turning raw data into business insights and predictions." },
      { icon: BarChart3, title: "Business Intelligence", level: 80, desc: "Dashboards, reporting, and data-driven decision making." },
    ],
  },
  {
    title: "Engineering",
    color: "from-accent to-blue-glow",
    skills: [
      { icon: Code, title: "Full-Stack Development", level: 90, desc: "Modern web apps with React, Next.js, Node, and TypeScript." },
      { icon: Smartphone, title: "Mobile App Development", level: 82, desc: "iOS & Android apps with React Native and Flutter." },
      { icon: Cloud, title: "Cloud & DevOps", level: 84, desc: "AWS, Vercel, Docker, CI/CD, and scalable infrastructure." },
      { icon: Shield, title: "Cybersecurity", level: 78, desc: "Securing applications, ethical hacking, and threat modeling." },
      { icon: Layers, title: "Blockchain & Web3", level: 75, desc: "Smart contracts, dApps, and decentralized systems." },
      { icon: Wifi, title: "IoT & Connected Systems", level: 72, desc: "Hardware, sensors, and edge computing." },
    ],
  },
  {
    title: "Creative & Media",
    color: "from-secondary to-pink-glow",
    skills: [
      { icon: Video, title: "Video Editing", level: 90, desc: "Premiere Pro, DaVinci Resolve, CapCut — long-form & short-form." },
      { icon: Camera, title: "Cinematography & Filmmaking", level: 82, desc: "Shooting, lighting, storytelling for digital creators." },
      { icon: Palette, title: "UI/UX Design", level: 88, desc: "Figma, design systems, prototyping, user research." },
      { icon: Brush, title: "Graphic Design", level: 85, desc: "Branding, social media graphics, and visual identity." },
      { icon: PenTool, title: "Motion Graphics", level: 80, desc: "After Effects animations, kinetic typography, transitions." },
      { icon: Box, title: "3D Design & Modeling", level: 75, desc: "Blender, Spline, and 3D for web and film." },
      { icon: Music, title: "Sound Design & Audio", level: 70, desc: "Music production, podcast editing, and audio mixing." },
    ],
  },
  {
    title: "Business & Growth",
    color: "from-amber-glow to-secondary",
    skills: [
      { icon: Briefcase, title: "Entrepreneurship", level: 88, desc: "Idea validation, MVP building, and startup strategy." },
      { icon: Megaphone, title: "Digital Marketing", level: 85, desc: "SEO, paid ads, content marketing, and growth hacking." },
      { icon: Sparkles, title: "Content Creation", level: 90, desc: "YouTube, Instagram, TikTok — building personal brands." },
      { icon: Globe, title: "E-commerce & Dropshipping", level: 78, desc: "Shopify, product research, and online store building." },
      { icon: Zap, title: "No-Code Development", level: 85, desc: "Webflow, Bubble, Lovable — ship without writing code." },
      { icon: Gamepad2, title: "Game Development", level: 70, desc: "Unity, Unreal, and indie game design." },
    ],
  },
];

const techStack = [
  "Python", "TensorFlow", "PyTorch", "React", "Next.js", "Node.js", "TypeScript",
  "AWS", "Vercel", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Supabase",
  "Figma", "Premiere Pro", "DaVinci Resolve", "After Effects", "Blender", "Spline",
  "ChatGPT", "Claude", "Midjourney", "Lovable", "Webflow", "Notion", "Git", "GitHub",
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-28 relative">
      <ParticleGrid />
      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-96 right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
              <Sparkles size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Skills We Teach</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
              Skills for the <span className="gradient-text">Future</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From artificial intelligence to video editing, from no-code to entrepreneurship — every skill you need to build, ship, and thrive in the modern world.
            </p>
          </AnimatedSection>

          {/* Skill categories */}
          {skillCategories.map((cat, ci) => (
            <div key={cat.title} className="mb-20">
              <AnimatedSection className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{cat.title}</h2>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.skills.map((s, i) => (
                  <AnimatedSection key={s.title} delay={i * 0.06}>
                    <GlowCard className="h-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                          <s.icon className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-foreground text-base">{s.title}</h3>
                          <span className="text-secondary font-mono font-bold text-xs">{s.level}%</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                      <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        />
                      </div>
                    </GlowCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}

          {/* Tech Stack */}
          <AnimatedSection className="text-center mb-12 mt-24">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Tools & <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The exact tools used by industry professionals — and what we train you on.
            </p>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <AnimatedSection key={tech} delay={i * 0.03}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="glass glow-border rounded-xl px-5 py-2.5 hover:glow-violet transition-all duration-300 cursor-default"
                >
                  <span className="font-mono font-medium text-foreground text-sm">{tech}</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
