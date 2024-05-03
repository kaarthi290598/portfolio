"use client";
import React, { useRef } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

import { motion, useInView } from "framer-motion";
import { skills } from "@/constants/constant";

const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  };

  const cardRef = useRef(null);

  const isInView = useInView(cardRef);

  return (
    <section
      className="flex flex-col items-center padding-container gap-8 max-container  mt-20 z-30  "
      id="skills"
    >
      <h1 className="violet_gradient head_text text-center md:text-start z-30">
        Skills
      </h1>

      <motion.div
        className=" w-full"
        variants={container}
        ref={cardRef}
        initial="hidden"
        animate={isInView ? "visible" : {}}
        transition={{ duration: 0.2 }}
      >
        <HoverEffect items={skills} />
      </motion.div>
    </section>
  );
};

export default Skills;
