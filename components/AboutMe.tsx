"use client";

import { motion, useInView } from "framer-motion";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import ColourButton from "./ui/ColourButton";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      console.log("in view");
    }
  }, [isInView]);

  return (
    <section
      className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-20   items-center  max-container   mt-10 z-30 min-h-[90dvh]"
      id="about"
    >
      <motion.div
        className="z-30 w-full flex items-center justify-center h-full "
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 2.5, type: "spring" }}
      >
        <Image
          src="/assets/images/coderboy.svg"
          alt="me"
          width={350}
          height={350}
          ref={ref}
          className="z-20  md:w-1/2 lg:w-full h-full"
        />
      </motion.div>

      <motion.div
        className="z-20 flex flex-col gap-10 items-center lg:items-start justify-center  w-full p-6  "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="dark-blue_gradient head_text   lg:justify-start  ">
          About me
        </h1>
        <p className="text-red max-w-[500px] lg:max-w-[600px] ">
          Inspired by a passion for technology, I embarked on a journey of
          self-learning to become a proficient app developer. With a solid
          foundation in business analysis, I bring a unique perspective to my
          projects, blending technical prowess with strategic insights. <br />{" "}
          <br />
          My portfolio showcases a range of web app projects where I leverage
          the latest technologies to deliver innovative solutions that drive
          business success.
        </p>

        <Link href="#contact" className="">
          <ColourButton color="blue2">Contact me</ColourButton>
        </Link>
      </motion.div>
    </section>
  );
}

export default AboutMe;
