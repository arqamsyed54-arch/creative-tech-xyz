import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const stack = [
  { name: "Python", color: "from-primary/20 to-primary/5" },
  { name: "TensorFlow", color: "from-secondary/20 to-secondary/5" },
  { name: "React", color: "from-primary/20 to-blue-glow/5" },
  { name: "Node.js", color: "from-primary/15 to-primary/5" },
  { name: "Docker", color: "from-secondary/15 to-secondary/5" },
  { name: "Kubernetes", color: "from-primary/20 to-secondary/5" },
  { name: "AWS", color: "from-secondary/20 to-primary/5" },
  { name: "GPT APIs", color: "from-primary/20 to-primary/5" },
  { name: "Figma", color: "from-secondary/15 to-secondary/5" },
  { name: "Firebase", color: "from-primary/15 to-secondary/5" },
  { name: "GraphQL", color: "from-secondary/20 to-primary/5" },
  { name: "Flutter", color: "from-primary/20 to-secondary/5" },
];

const TechStack3D = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Technologies You'll <span className="gradient-text">Master</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Get hands-on experience with the same tools and frameworks used by top tech companies worldwide.
        </p>
      </AnimatedSection>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {stack.map((tech, i) => (
          <AnimatedSection key={tech.name} delay={i * 0.05}>
            <motion.div
              className={`glass gradient-border rounded-full px-6 py-3 bg-gradient-to-r ${tech.color}`}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-display font-medium text-foreground text-sm">{tech.name}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack3D;
