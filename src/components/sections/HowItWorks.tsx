import { UserPlus, BookOpen, Rocket, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  { icon: UserPlus, title: "Sign Up", desc: "Create your free account and tell us about your interests and goals." },
  { icon: BookOpen, title: "Choose Your Path", desc: "Browse our curated programs in AI, automation, design, and more." },
  { icon: Rocket, title: "Learn & Build", desc: "Dive into hands-on projects, labs, and real-world challenges." },
  { icon: Award, title: "Get Certified", desc: "Earn industry-recognized certificates and join our alumni network." },
];

const HowItWorks = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Your journey from curious learner to certified innovator in four simple steps.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connection line */}
        <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />

        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.15}>
            <div className="text-center relative">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <step.icon className="text-primary" size={28} />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
              </motion.div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
