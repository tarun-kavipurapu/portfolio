"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url?: string;
  stack: string;
}

const ProjectCard = ({ src, title, description, url, stack }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <a href={url} target="_blank">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </a>
        <p className="mt-2 text-gray-300">{description}</p>
        <p className="mt-2 text-gray-300 font-bold">{stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
