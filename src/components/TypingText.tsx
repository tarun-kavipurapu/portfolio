import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const fullText = "Your text goes here";

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText.length === fullText.length
          ? ""
          : fullText.slice(0, prevText.length + 1)
      );
    }, 100); // Adjust the speed of typing animation (in milliseconds)

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default TypingAnimation;
