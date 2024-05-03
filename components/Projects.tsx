"use client";
import React from "react";

import { webProjects } from "@/constants/constant";
import CardUI from "./CardUI";
import ColourButton from "./ui/ColourButton";

import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  return (
    <section
      className="flex flex-col   items-center padding-container   gap-10 max-container-2 mt-20 md:min-h-[100dvh]"
      id="projects"
    >
      <h1 className="blue_gradient head_text text-center md:text-start z-30">
        Projects
      </h1>
      <div className="flex flex-wrap gap-8 justify-center items-center w-full ">
        {webProjects.map((project, index) => (
          <CardUI key={index} project={project} />
        ))}{" "}
      </div>
      <ColourButton color="blue2" onClick={() => router.push("/projects")}>
        View all projects
      </ColourButton>
    </section>
  );
};

export default Projects;
