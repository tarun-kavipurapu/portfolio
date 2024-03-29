"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const variants = {
  hidden: { width: 0 },
  visible: { width: "max-content", transition: { duration: 2 } },
};
const openResume = () => {
  window.open("/T_Resume.pdf", "_blank");
};

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[1]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        ></motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <motion.span>
            Hey,
            <br />
            I&apos;m Tarun, I
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              {" "}
              <Typewriter
                words={["Code", "Eat", "Sleep", "Repeat!", "Code"]}
                loop={1800}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[800px]"
        >
          Hey there! I&apos;m , a passionate Full Stack Software Engineer with a
          keen interest in Web Development, Software Development, Machine
          Learning, and Natural Language Processing. Currently pursuing my
          Engineering at Thapar University in India, I&apos;m dedicated to
          crafting innovative solutions that blend cutting-edge technology with
          user-centric design. Whether it&apos;s building intuitive web
          applications, creating robust software systems, or diving into the
          realms of AI and NLP, I thrive on the challenges and opportunities
          that come with each project. Let&apos;s connect and explore the
          endless possibilities together!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className=" inline-flex w-max items-center bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] cursor-pointer"
          onClick={openResume}
        >
          Resume!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
