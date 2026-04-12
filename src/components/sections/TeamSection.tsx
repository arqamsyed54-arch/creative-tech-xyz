import { motion } from "framer-motion";
import { Linkedin, Globe, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const team = [
  { name: "Ahmad Syed", role: "Founder, President & CEO", expertise: "AI Strategy & Vision", initials: "AS" },
  { name: "Tech Advisory Board", role: "Strategic Advisors", expertise: "Industry Leaders", initials: "TA" },
  { name: "Innovation Team", role: "Program Development", expertise: "Curriculum Design", initials: "IT" },
  { name: "Community Leaders", role: "Global Ambassadors", expertise: "Community Growth", initials: "CL" },
];

const TeamSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          The <span className="gradient-text">Team</span> Behind the Vision
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A dedicated group of innovators, educators, and technology enthusiasts building the future of learning.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={i * 0.1}>
            <GlowCard className="text-center">
              <motion.div
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xl font-display font-bold gradient-text">{member.initials}</span>
              </motion.div>
              <h3 className="font-display font-semibold text-foreground text-lg">{member.name}</h3>
              <p className="text-primary text-sm font-medium">{member.role}</p>
              <p className="text-muted-foreground text-xs mt-1">{member.expertise}</p>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
