import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedSection from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "You're in! 🎉", description: "Welcome to the Creative Tech XYZ community." });
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
      <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-border mb-6">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Stay Updated</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Join Our <span className="gradient-text">Newsletter</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Get the latest insights on AI, technology trends, and exclusive learning resources delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="pl-10 bg-muted/50 border-border/50 focus:border-primary/50 h-11"
              />
            </div>
            <Button type="submit" className="h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-display">
              Subscribe <ArrowRight size={16} />
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Newsletter;
