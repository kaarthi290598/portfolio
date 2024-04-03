"use client";
import React, { useRef } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { HoverEffect } from "./ui/card-hover-effect";
import { AiFillHtml5 } from "react-icons/ai";
import { FaChartBar, FaGit, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import Icon from "./ui/Icon";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { HiLightBulb } from "react-icons/hi";

const skills = [
  { title: "React", icon: <FaReact className="h-8 w-8 text-blue-500" /> },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="h-8 w-8  text-black-500" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="h-8 w-8 text-blue-900" />,
  },
  { title: "GitHub", icon: <FaGithub className="h-8 w-8 text-purple-500" /> },
  {
    title: "Supabase",
    icon: <SiSupabase className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Data Analysis",
    icon: <FaChartBar className="h-8 w-8 text-red-500" />,
  },
  { title: "Python", icon: <FaPython className="h-8 w-8 text-yellow-500 " /> },
  {
    title: " Business Analysis",
    icon: <HiLightBulb className="h-8 w-8 text-gray-400" />,
  },
];
const Skills = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardRef = useRef(null);

  const isInView = useInView(cardRef);

  return (
    <section
      className="flex flex-col items-center    padding-container gap-8 max-container  mt-20 z-30 "
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
        transition={{ type: "spring" }}
      >
        <HoverEffect items={skills} />
      </motion.div>
    </section>
  );
};

export default Skills;

// type CardProps = {
//   skill: object;
// };

// const CardUI = ({ skill }: CardProps) => {
//   return (
//     <Card className="p-4 flex   ">
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
//         <h4 className="font-bold text-large">{skill.skill}</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <p>{skill.description}</p>
//       </CardBody>
//     </Card>
//   );
// };

{
  /* <div className="grid grid-cols-3 gap-8 ">
        {skills.map((skill, index) => (
          <CardUI key={index} skill={skill} />
        ))}{" "}
      </div> */
}
