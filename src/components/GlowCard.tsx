import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <motion.div
      className={`glass gradient-border rounded-xl p-6 transition-all duration-500 hover:glow-cyan ${className}`}
      whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
    >
      {children}
    </motion.div>
  );
};

export default GlowCard;
