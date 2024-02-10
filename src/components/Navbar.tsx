"use client";

import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div>
          <a href="">
            {/* <Image/>  //logo*/}
            <span className=" font-bold ml-[10px]  md:block text-gray-300 cursor pointer">
              Tarun
            </span>
          </a>
        </div>
        <div className="text-white flex justify-between gap-20 border  border-[#7042f861] bg-[#0300145e] px-[20px] py-[15px] rounded-full hidden sm:hidden md:flex">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>
        <div className={"flex flex-row gap-5"}>
          {Socials.map((social) => (
            <Link href={social.url} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="rounded-full cursor-pointer bg-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
