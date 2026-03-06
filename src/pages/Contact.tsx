import { useState } from "react";
import { Send, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setSending(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection className="md:col-span-2">
              <form onSubmit={handleSubmit} className="glass gradient-border rounded-2xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Name</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  size="lg"
                  className="w-full font-display bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={18} />
                </Button>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", desc: "hello@creativetechxyz.com" },
                  { icon: Globe, title: "Website", desc: "www.creativetechxyz.com" },
                  { icon: MapPin, title: "Global", desc: "Building the future, everywhere" },
                ].map((item) => (
                  <div key={item.title} className="glass gradient-border rounded-xl p-5 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
