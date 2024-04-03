"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { HiLink } from "react-icons/hi";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

import { HiMiniLink } from "react-icons/hi2";

//data
const projects = [
  {
    title: "Wild Oasis",
    description: "Hotel booking management app ",
    bigDescription:
      "Wild Oasis is a comprehensive hotel booking management application designed to streamline the booking process for hotel owners. With features for checking in and out guests, creating, and deleting bookings, it simplifies hotel management tasks.",
    image: "/assets/images/wildoasis.png",
    stack: ["React", "PostgreSQL", "Styled Components", "Supabase"],
    links: {
      github: "https://github.com/kaarthi290598/hotel-booking-app",
      live: "https://hotel-booking-app-phi.vercel.app/login",
    },
  },
  {
    title: "Prompt Share",
    description: "AI prompt sharing app",
    bigDescription:
      "Prompt Share is an innovative AI-powered platform for sharing prompts. Whether you're a writer seeking inspiration or looking to share your creative ideas, Prompt Share connects users with a diverse range of writing prompts generated using artificial intelligence.",
    image: "/assets/images/promptshare.png",
    stack: ["Next.js", "React", "Tailwind CSS", "Next Auth", "MongoDB"],
    links: {
      github: "https://github.com/kaarthi290598/AI-Prompt-Share",
      live: "https://ai-prompt-share-one.vercel.app/",
    },
  },
  {
    title: "Pizza Order",
    description: "Pizza ordering app",
    bigDescription:
      "Pizza Order is a convenient application for ordering your favorite pizzas. With a user-friendly interface and seamless ordering process, Pizza Order ensures you get your pizza just the way you like it, every time.",
    image: "/assets/images/pizza-order.png",
    stack: ["React", "Tailwind CSS", "Redux"],
    links: {
      github: "https://github.com/kaarthi290598/pizzaApp",
      live: "https://pizza-app-vite.netlify.app/",
    },
  },
  {
    title: "World Wise",
    description: "Travel and mark your memories",
    bigDescription:
      "World Wise is your ultimate companion for documenting and reminiscing about your travel adventures. Capture your memories, mark your favorite destinations, and relive your journeys with World Wise.",
    image: "/assets/images/worldwise.png",
    stack: ["React", "CSS Module", "Context API"],
    links: {
      github: "https://github.com/kaarthi290598/worldwise",
    },
  },
];

//components

const Projects = () => {
  return (
    <section
      className="flex flex-col  justify-between  items-center flex-between   padding-container gap-10 max-container mb-20"
      id="projects"
    >
      <h1 className="blue_gradient head_text text-center md:text-start z-30">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between w-full ">
        {projects.map((project, index) => (
          <CardUI key={index} project={project} />
        ))}{" "}
      </div>
    </section>
  );
};

type CardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    stack: string[];
    bigDescription: string;
    links: {
      github: string;
      live?: string | undefined;
    };
  };
};

const CardUI = ({ project }: CardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="p-4 flex bg-zinc-50 hover:scale-105  ">
      <CardHeader className="pb-0 pt-2 px-4 flex gap-4 justify-between items-center ">
        <h4 className="font-bold text-large">{project.title}</h4>
        <Button
          isIconOnly
          aria-label="Like"
          as={Link}
          href={project.links.live || project.links.github}
          target="_blank"
        >
          <HiLink />
        </Button>
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-4 grid grid-rows-[auto_1fr_auto]  items-start gap-4">
        <Image
          src={project.image}
          alt={project.title}
          width={350}
          height={250}
          className=" h-full"
        />
        <p>{project.description}</p>

        <Button color="primary" size="sm" onPress={onOpen}>
          View project details
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
          <ModalContent className="bg-zinc-50 p-4  ">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {project.title}
                </ModalHeader>
                <ModalBody>
                  <p>{project.bigDescription}</p>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={350}
                    height={250}
                    className=" h-full"
                  />
                  <div>
                    <h1 className="font-bold text-lg">Stack</h1>
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((item, index) => (
                        <li key={index}>
                          {" "}
                          <Chip color="primary">{item}</Chip>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4 mt-2">
                    {project.links.github && (
                      <Button
                        aria-label="Like"
                        as={Link}
                        href={project.links.github}
                        endContent={<FaGithub />}
                        color="secondary"
                        size="sm"
                        target="_blank"
                      >
                        Github
                      </Button>
                    )}

                    {project.links.live && (
                      <Button
                        aria-label="Like"
                        as={Link}
                        href={project.links.live}
                        endContent={<HiMiniLink />}
                        color="success"
                        size="sm"
                        target="_blank"
                      >
                        Live
                      </Button>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default Projects;
