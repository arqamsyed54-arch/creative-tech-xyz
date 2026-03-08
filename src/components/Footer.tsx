import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Creative Tech XYZ" className="h-10 w-auto" />
              <span className="font-display font-bold text-lg text-foreground">
                Creative Tech <span className="text-primary">XYZ</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              Building the intelligent generation of tomorrow through cutting-edge technology education, innovation training, and entrepreneurial thinking.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <div className="flex flex-col gap-2">
              {[
                { path: "/programs", label: "Programs" },
                { path: "/skills", label: "Skills" },
                { path: "/innovation-lab", label: "Innovation Lab" },
                { path: "/community", label: "Community" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { path: "/about", label: "About" },
                { path: "/vision", label: "Vision & Mission" },
                { path: "/founder", label: "Founder" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Creative Tech XYZ. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Building the future, one innovator at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
