import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const tools = [
  { name: "Google AI", desc: "Gemini, TensorFlow, Cloud AI" },
  { name: "Microsoft", desc: "Azure AI, Copilot, Power Platform" },
  { name: "OpenAI", desc: "ChatGPT, GPT-5, DALL·E, Whisper" },
  { name: "Meta AI", desc: "LLaMA, PyTorch, Segment Anything" },
  { name: "Amazon AWS", desc: "SageMaker, Bedrock, Rekognition" },
  { name: "NVIDIA", desc: "CUDA, TensorRT, Omniverse" },
  { name: "IBM", desc: "Watson, Granite Models" },
  { name: "Adobe", desc: "Firefly, Sensei, Creative Cloud AI" },
  { name: "Anthropic", desc: "Claude AI, Constitutional AI" },
  { name: "Hugging Face", desc: "Transformers, Model Hub, Spaces" },
  { name: "Canva", desc: "Magic Studio, AI Design Tools" },
  { name: "Notion AI", desc: "AI Writing, Knowledge Management" },
];

const PoweredByTools = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Industry-Leading Technology</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Powered by the <span className="gradient-text">World's Best</span> AI Tools
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We train our students using the same cutting-edge tools and platforms trusted by Fortune 500 companies and top tech innovators worldwide.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <AnimatedSection key={tool.name} delay={i * 0.05}>
            <motion.div
              className="glass gradient-border rounded-xl p-5 text-center transition-all duration-500 hover:glow-cyan group"
              whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.3 } }}
            >
              <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{tool.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PoweredByTools;
