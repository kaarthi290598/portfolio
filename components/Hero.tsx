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
    <section
      className=" flex flex-col 2xl:flex-row  2xl:h-[90dvh] min-h-[90dvh] max-container-2
      z-30 "
    >
      {/* <BackgroundBeams /> */}
      <div className=" relative z-30 flex flex-col items-center justify-center  2xl:w-[60%] 2xl:p-16 gap-12 md:gap-14 2xl:gap-10 2xl:items-start   flex-1">
        <h1 className=" z-10 text-4xl xs:text-5xl md:text-7xl lg:text-8xl  bg-clip-text text-transparent blue_gradient font-semibold font-cinzel  ">
          Kaarthikeyan
        </h1>
        <TypewriterEffectSmooth words={words} />
        <div className="flex 2xl:hidden">
          <Lottie
            animationData={animationData}
            className="flex justify-center items-center
        h-[250px] w-[250px] md:w-[350px] md:h-[350px]  z-30"
            loop={true}
            preload="auto"
            placeholder="Loading"
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
      </div>

      <div className="hidden 2xl:flex w-full items-center justify-center lg:w-[40%] z-20">
        <Lottie
          animationData={animationData}
          className="flex justify-center items-center
        h-[450px] w-[450px] "
          loop={true}
          preload="auto"
        />
      </div>
    </section>
  );
};

export default Hero;
