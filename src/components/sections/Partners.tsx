import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const partners = [
  "Stanford University", "MIT OpenCourseWare", "Google for Education",
  "Microsoft Learn", "AWS Educate", "NVIDIA Deep Learning Institute",
  "OpenAI Research", "Meta AI Lab", "IBM Skills Network",
];

const Partners = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Knowledge <span className="gradient-text">Partners</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We collaborate with the world's leading institutions and tech giants to bring you cutting-edge learning experiences.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {partners.map((partner, i) => (
          <AnimatedSection key={partner} delay={i * 0.06}>
            <motion.div
              className="glass gradient-border rounded-xl p-5 text-center transition-all duration-300"
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <Handshake className="text-primary mx-auto mb-2" size={20} />
              <p className="text-foreground font-display font-medium text-sm">{partner}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
