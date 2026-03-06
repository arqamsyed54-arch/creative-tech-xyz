import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <div
      className={`glass gradient-border rounded-xl p-6 transition-all duration-500 hover:glow-cyan hover:scale-[1.02] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowCard;
