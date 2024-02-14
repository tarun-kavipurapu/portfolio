"use client";
import { motion } from "framer-motion";
import React from "react";
import HeroContent from "./Content/Herocontent";

const Hero = () => {
  return (
    <motion.div
      className="relative flex flex-col h-full w-full z-[2]"
      id="about-me"
    >
      <HeroContent />
    </motion.div>
  );
};

export default Hero;
