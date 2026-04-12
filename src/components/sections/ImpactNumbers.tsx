import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const impacts = [
  { value: 50, suffix: "+", label: "Countries Reached" },
  { value: 25, suffix: "K+", label: "Students Impacted" },
  { value: 120, suffix: "+", label: "Industry Mentors" },
  { value: 95, suffix: "%", label: "Satisfaction Rate" },
  { value: 40, suffix: "+", label: "Programs Launched" },
  { value: 500, suffix: "+", label: "Projects Built" },
];

function AnimCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 2000;
        const step = target / (dur / 16);
        let c = 0;
        const t = setInterval(() => {
          c += step;
          if (c >= target) { setCount(target); clearInterval(t); }
          else setCount(Math.floor(c));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text">{count.toLocaleString()}{suffix}</div>
    </div>
  );
}

const ImpactNumbers = () => (
  <section className="py-24 gradient-bg">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Our Global <span className="gradient-text">Impact</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Numbers that tell the story of our mission to transform technology education worldwide.
        </p>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {impacts.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <AnimCounter target={item.value} suffix={item.suffix} />
            <p className="text-muted-foreground text-sm mt-2 text-center">{item.label}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactNumbers;
