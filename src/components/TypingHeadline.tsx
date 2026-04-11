import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Intelligent", "Innovative", "Creative", "Unstoppable"];

const TypingHeadline = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block min-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="gradient-text inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default TypingHeadline;
