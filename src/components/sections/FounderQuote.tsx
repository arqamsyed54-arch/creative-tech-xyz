import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const FounderQuote = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <Quote className="text-primary/20 mx-auto mb-6" size={60} />
        <motion.blockquote
          className="text-2xl md:text-3xl font-display font-medium text-foreground leading-relaxed mb-8 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          "The future doesn't belong to those who wait for it — it belongs to those who build it. At Creative Tech XYZ, we're not just teaching technology; we're igniting a revolution of minds."
        </motion.blockquote>
        <div>
          <p className="font-display font-bold text-foreground text-lg">Ahmad Syed</p>
          <p className="text-primary text-sm">Founder, President & CEO — Creative Tech XYZ</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FounderQuote;
