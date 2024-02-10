import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20  ">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default page;
