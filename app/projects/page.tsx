"use client";
import DataProjects from "@/components/DataProjects";
import WebProjects from "@/components/WebProjects";
import React from "react";
import { Button } from "@nextui-org/react";
import { FiArrowLeft, FiSkipBack } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  return (
    <>
      <section className="z-30 max-container flex flex-col items-start padding-container gap-8  mt-10 ">
        <Button
          isIconOnly
          className="z-30 "
          variant="shadow"
          onClick={() => router.push("/")}
        >
          <FiArrowLeft />
        </Button>
        {/* data projects */}

        <DataProjects />

        {/* web projects */}
        <WebProjects />
      </section>
    </>
  );
};

export default Projects;
