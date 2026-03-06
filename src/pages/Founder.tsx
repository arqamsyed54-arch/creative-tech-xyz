import { Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Founder = () => {
  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Message from the <span className="gradient-text">Founder</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="glass gradient-border rounded-2xl p-8 md:p-12 glow-purple relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Quote className="text-primary/30 mb-6" size={48} />

                <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    Creative Tech XYZ was created with a vision to empower the new generation with intelligence, creativity, and technological knowledge.
                  </p>
                  <p>
                    The future belongs to those who understand technology and use it to build powerful solutions.
                  </p>
                  <p>
                    This platform exists to inspire young minds, train innovators, and help create the next generation of founders and entrepreneurs.
                  </p>
                  <p className="text-foreground font-medium">
                    Creative Tech XYZ is not just a learning platform — it is a mission to build the innovators of tomorrow.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center border border-primary/30">
                      <span className="font-display font-bold text-primary text-lg">AS</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-lg">Ahmad Syed</h3>
                      <p className="text-muted-foreground text-sm">Founder, President & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Founder;
