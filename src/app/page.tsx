"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import React, { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <main className="h-full w-full ">
      <motion.div className="flex flex-col gap-20  ">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </main>
  );
};

export default page;
