"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

import { BorderButton } from "./ui/moving-border";
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
    <section className="flex flex-col items-center py-20 px-5 md:py-30  lg:gap-10 h-full lg:h-screen">
      <BackgroundBeams />
      <div className=" w-full  relative z-30  ">
        <div className="    flex flex-col items-center gap-6   ">
          <h1 className=" z-10 text-5xl md:text-7xl lg:text-8xl  bg-clip-text text-transparent blue_gradient  text-center  font-semibold font-cinzel">
            Kaarthikeyan{" "}
          </h1>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      <div>
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center
          h-[300px] lg:h-[350px] w-auto"
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
