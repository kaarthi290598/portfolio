"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";

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

import { Chip } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

import { HiMiniDocument, HiMiniLink } from "react-icons/hi2";

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
      documentation?: string | undefined;
    };
  };
};

const CardUI = ({ project }: CardProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card className="p-4 flex w-fit  bg-zinc-50 hover:scale-105  ">
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
      <CardBody className="overflow-visible py-2 mt-4 grid grid-rows-[auto_1fr_auto]  gap-4 items-center justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={350}
          height={350}
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
                    width={0}
                    height={0}
                    className=" h-full w-full"
                  />
                  <div>
                    <h1 className="font-bold text-lg">Stack</h1>
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((item, index) => (
                        <li key={index}>
                          <Chip color="primary">{item}</Chip>{" "}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h1 className="font-bold text-lg">Links</h1>
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
                          className="font-bold"
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
                          className="text-white font-bold"
                          size="sm"
                          target="_blank"
                        >
                          Live
                        </Button>
                      )}
                      {project.links.documentation && (
                        <Button
                          aria-label="Like"
                          as={Link}
                          href={project.links.live}
                          endContent={<HiMiniDocument />}
                          color="primary"
                          className="text-white font-bold"
                          size="sm"
                          target="_blank"
                        >
                          Documentation
                        </Button>
                      )}
                    </div>
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

export default CardUI;
