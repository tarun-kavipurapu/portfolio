"use client";
import { motion } from "framer-motion";
import React from "react";
import HeroContent from "./Content/Herocontent";

const Hero = () => {
  return (
    <motion.div className="relative flex flex-col h-full w-full" id="about-me">
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </motion.div>
  );
};

export default Hero;
