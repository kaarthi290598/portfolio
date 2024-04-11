"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import ColourButton from "./ui/ColourButton";
import Link from "next/link";

function AboutMe() {
  return (
    <section
      className="flex flex-col md:flex-row  justify-between  items-center flex-between   padding-container gap-16 max-container mt-20 lg:h-[100dvh]"
      id="about"
    >
      <Image
        src="/assets/images/coderboy.png"
        alt="me"
        width={350}
        height={350}
        className="z-20"
      />

      <div className="z-20 flex flex-col gap-8 items-start ">
        <h1 className="orange_gradient head_text flex items-center justify-center w-full lg:justify-start">
          About me
        </h1>
        <p className="text-red ">
          Inspired by a passion for technology, I embarked on a journey of
          self-learning to become a proficient app developer. With a solid
          foundation in business analysis, I bring a unique perspective to my
          projects, blending technical prowess with strategic insights. <br />{" "}
          <br />
          My portfolio showcases a range of web app projects where I leverage
          the latest technologies to deliver innovative solutions that drive
          business success. From concept to execution, I thrive on transforming
          ideas into impactful digital experiences, fueled by my dual expertise
          in app development and business analysis.
        </p>
        <Link href="#contact">
          <ColourButton color="orange">Contact me</ColourButton>
        </Link>
      </div>
    </section>
  );
}

export default AboutMe;
