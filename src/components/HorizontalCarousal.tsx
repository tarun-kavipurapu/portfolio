import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projectsList } from "@/constants";
import Link from "next/link";
import { Socials } from "@/constants";

import Image from "next/image";
interface ProjectType {
  src: string;
  title: string;
  description: string;
  url?: string;
  stack?: string;
}

const HorizontalCarousal = () => {
  return (
    <div className="bg-inhert z-[150]" id="projects">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center z-[150]">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-inhert z-[150]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {projectsList.map((card) => {
            return <Card card={card} key={card.title} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: ProjectType }) => {
  return (
    <div
      key={card.title}
      className="group relative h-[650px] w-[650px] overflow-hidden bg-neutral-200 z-[150]"
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-[100] transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-[100] grid place-content-center">
        <span className="flex flex-row z-[150]">
          {/* Render a link for the project title */}
          {card.url && (
            <Link href={card.url} target="_blank">
              <span
                className="flex items-center"
                style={{ textDecoration: "none" }}
              >
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase backdrop-blur-lg text-white hover:text-gray-500">
                  {card.title}
                </p>
              </span>
            </Link>
          )}
        </span>

        <p className="mt-2 bg-gradient-to-br from-white/20 to-white/0 text-xl font-black uppercase text-white backdrop-blur-lg">
          {card.description}
        </p>
        <p className="mt-2 bg-gradient-to-br from-white/20 to-white/0  text-xl font-black uppercase text-white backdrop-blur-lg">
          {card.stack}
        </p>
      </div>
    </div>
  );
};

export default HorizontalCarousal;
