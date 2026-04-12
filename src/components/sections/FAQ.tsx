import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  { q: "What is Creative Tech XYZ?", a: "Creative Tech XYZ is a futuristic technology education platform dedicated to empowering the next generation with knowledge of AI, modern technology, innovation, and entrepreneurial thinking." },
  { q: "Who can join the programs?", a: "Anyone passionate about technology and innovation! Our programs are designed for students, professionals, and lifelong learners of all backgrounds and experience levels." },
  { q: "Are the programs free?", a: "We offer a mix of free and premium programs. Our core mission is to make technology education accessible to everyone, regardless of financial background." },
  { q: "What technologies do you teach?", a: "We cover AI & Machine Learning, automation tools, web development, video editing, cybersecurity, blockchain, data science, UI/UX design, and much more." },
  { q: "Do I get a certificate?", a: "Yes! Upon completing any program, you receive an industry-recognized digital certificate that you can share on LinkedIn and your portfolio." },
  { q: "How is this different from other platforms?", a: "We don't just teach skills — we build mindsets. Our focus on innovation thinking, entrepreneurship, and real-world problem-solving sets us apart from traditional course platforms." },
];

const FAQ = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Everything you need to know about Creative Tech XYZ and our programs.
        </p>
      </AnimatedSection>

      <AnimatedSection className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass gradient-border rounded-xl px-6 border-none">
              <AccordionTrigger className="text-foreground font-display font-medium text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQ;
