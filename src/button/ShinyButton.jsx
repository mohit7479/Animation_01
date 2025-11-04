import React from "react";
import { motion } from "framer-motion";

function ShinyButton() {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative px-8 py-3 rounded-lg overflow-hidden 
        bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 
        text-white font-semibold tracking-wide shadow-lg hover:shadow-yellow-400/50
        transition-all duration-300"
    >
      <span className="relative z-10">Buy Now</span>
      {/* Shiny overlay */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
        animate-shine rounded-lg"
      />
    </motion.button>
  );
}

export default ShinyButton;
