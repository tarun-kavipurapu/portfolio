"use client";
import React from "react";
import ProjectCard from "./Content/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Vtube-Video Streaming Platform"
          description="A backend clone implementation of Video Streaming Platform "
          url="https://github.com/tarun-kavipurapu/vTube"
          stack="Typescript|Express|MongoDB|Node.js"
        />
        <ProjectCard
          src="/CardImage.png"
          title=" Blog"
          description="This is a basic blog website with CRUD operations leveraged with Appwrite as a Backend and React as Frontend"
          url="https://github.com/tarun-kavipurapu/blog-appwrite"
          stack="React|Appwrite"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Timer Plus"
          description="A productivity chrome extension which has features of Pomodoro,TodoList and SiteBlocker."
          stack="HTML|CSS|Javascript"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title=" Portfolio"
          description="Website to showcase my projects and skills its what you are  viewing right now"
          stack="Next.js, TailwindCSS"
        />
      </div>
    </div>
  );
};

export default Projects;
