"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import ColourButton from "./ui/ColourButton";
import Link from "next/link";
import Lottie from "lottie-react";
import animationData from "../public/assets/lotties/laptoplotties.json";

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Me.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-20  lg:gap-10 h-full-viewport md:h-full 3xl:h-screen pt-5 ">
      <BackgroundBeams />
      <div className=" w-full  relative z-30  ">
        <div className="    flex flex-col items-center gap-6   ">
          <h1 className=" z-10 text-5xl md:text-7xl lg:text-8xl  bg-clip-text text-transparent blue_gradient  text-center  font-semibold font-cinzel">
            Kaarthikeyan
          </h1>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      <div className="">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center
          h-auto w-auto"
          loop={true}
          preload="auto"
        />
      </div>

      <motion.div
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="z-30 "
      >
        <Link href="#skills">
          <ColourButton color="blue">Explore my portfolio</ColourButton>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
