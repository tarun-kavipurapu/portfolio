"use client";

import { motion } from "framer-motion";
import React from "react";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import HorizontalCarousal from "@/components/HorizontalCarousal";
const Page = () => {
  return (
    <main className="h-full w-full">
      <Hero />
      <Skills />
      <HorizontalCarousal />
      <Contact />
    </main>
  );
};

export default Page;
