import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@nextui-org/react";
import React from "react";

function page() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default page;
