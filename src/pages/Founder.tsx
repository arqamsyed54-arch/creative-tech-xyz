import { Quote, Target, Heart, Lightbulb, Rocket, Users, Globe, Sparkles, TrendingUp, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import ParticleGrid from "@/components/ParticleGrid";

const visionPoints = [
  { icon: Target, title: "Our Vision", desc: "To build a generation that doesn't just consume technology — they create it. A world where every young mind has the tools, mentorship, and belief to invent the future." },
  { icon: Heart, title: "What I Want to Help With", desc: "I want to help young creators escape outdated education systems, learn the skills the future actually rewards, and turn their curiosity into careers and companies." },
  { icon: Rocket, title: "The Mission", desc: "Make world-class technology, AI, and entrepreneurship education accessible to anyone with the will to learn — regardless of geography, age, or background." },
];

const industries = [
  { icon: Sparkles, title: "Artificial Intelligence", desc: "Training the engineers, researchers, and product builders who will shape the AI era." },
  { icon: Lightbulb, title: "Creative Industries", desc: "Empowering designers, video editors, and content creators with modern AI-powered tools." },
  { icon: Globe, title: "Web & Digital Products", desc: "Helping the next wave of indie founders and product teams ship faster than ever." },
  { icon: TrendingUp, title: "Startups & Entrepreneurship", desc: "Mentoring young founders through ideation, building, and scaling real businesses." },
  { icon: Users, title: "Education & EdTech", desc: "Reimagining how technology, design, and business are taught in the AI age." },
  { icon: Zap, title: "Innovation Labs", desc: "Partnering with organisations to run hands-on innovation and upskilling programs." },
];

const journey = [
  { year: "Origin", title: "The Spark", desc: "Saw too many talented young people locked out of the tech industry by access, not ability." },
  { year: "Year 1", title: "First Cohort", desc: "Started teaching small groups — focusing on practical skills, not certificates." },
  { year: "Year 2", title: "Going Global", desc: "Expanded online, reaching learners across continents with the same quality." },
  { year: "Today", title: "Creative Tech XYZ", desc: "A full ecosystem for the next generation of creators, engineers, and founders." },
  { year: "Tomorrow", title: "1M Innovators", desc: "Building toward a million-strong community of trained, shipping, building creators." },
];

const Founder = () => {
  return (
    <div className="min-h-screen pt-28 relative">
      <ParticleGrid />
      <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute top-96 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <section className="py-12 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
              <Award size={14} className="text-primary" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Founder's Letter</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
              A Message from the <span className="gradient-text">Founder</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The story, the mission, and the future we're building — straight from Ahmad.
            </p>
          </AnimatedSection>

          {/* Letter */}
          <AnimatedSection delay={0.15}>
            <div className="glass gradient-border rounded-3xl p-8 md:p-14 glow-violet relative overflow-hidden mb-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Quote className="text-primary/40 mb-6" size={56} />

                <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I started Creative Tech XYZ with one belief: <span className="text-foreground font-medium">talent is everywhere, but opportunity isn't.</span> Every day I meet young people overflowing with curiosity, ambition, and ideas — and almost none of them have a clear path to turn that into a real career.
                  </p>
                  <p>
                    The world is moving faster than schools can teach. AI is rewriting industries. Software is eating everything. The next generation deserves an education built for *this* world, not the one from twenty years ago.
                  </p>
                  <p>
                    That's why we exist. We teach the skills that actually matter — AI, modern programming, design, video, entrepreneurship — alongside the mindset to ship, iterate, and build.
                  </p>
                  <p className="text-foreground font-medium text-xl">
                    Creative Tech XYZ isn't just a learning platform. It's a launchpad for the people who will build the next era of technology.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 flex items-center gap-5">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                  >
                    <span className="font-display font-bold text-primary-foreground text-xl">AS</span>
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-xl">Ahmad Syed</h3>
                    <p className="text-muted-foreground text-sm">Founder, President & CEO — Creative Tech XYZ</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Vision blocks */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Vision, <span className="gradient-text-warm">Mission & Purpose</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">What drives every decision we make at Creative Tech XYZ.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {visionPoints.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 inline-block mb-4">
                    <p.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Industries to help */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Industries We Want to <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Where Creative Tech XYZ is focused on creating real-world impact.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.title} delay={i * 0.08}>
                <GlowCard className="h-full">
                  <ind.icon className="text-secondary mb-3" size={28} />
                  <h3 className="font-display font-semibold text-foreground mb-2">{ind.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Journey timeline */}
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From a single spark to a global movement.</p>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto mb-16">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            {journey.map((j, i) => (
              <AnimatedSection key={j.title} delay={i * 0.1}>
                <div className={`relative pl-12 md:pl-0 mb-10 md:flex md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="glass gradient-border rounded-2xl p-6 hover:glow-violet transition-all duration-500">
                      <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">{j.year}</div>
                      <h3 className="font-display font-bold text-foreground text-lg mb-2">{j.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{j.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary glow-violet border-2 border-background" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;
