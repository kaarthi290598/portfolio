"use client";
import React from "react";

import { webProjects } from "@/constants/constant";
import CardUI from "./CardUI";

const WebProjects = () => {
  return (
    <div className="z-30 flex flex-col gap-8 items-center w-full">
      <h1 className="orange_gradient head_text text-center md:text-start z-30">
        Web Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between w-full ">
        {webProjects.map((project, index) => (
          <CardUI key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default WebProjects;
