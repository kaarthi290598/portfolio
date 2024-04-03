import { Button, Link } from "@nextui-org/react";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Socials = () => {
  return (
    <section className="max-container padding-container flex  items-center gap-4 justify-center md:justify-between z-30 md:w-[28rem] p-10">
      <Button
        isIconOnly
        color="primary"
        aria-label="Like"
        as={Link}
        target="_blank"
        href="https://www.linkedin.com/in/kaarthikeyan-v-e-312a8818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      >
        <FaLinkedin className="h-6 w-6" />
      </Button>
      <Button
        isIconOnly
        color="danger"
        aria-label="Like"
        as={Link}
        target="_blank"
        href="https://www.instagram.com/ispreadtech?igsh=MXBrd2p1MjZ5ODBqYQ=="
      >
        <FaInstagram className="h-6 w-6" />
      </Button>
      <Button
        isIconOnly
        className="bg-red-600 text-white"
        aria-label="Like"
        as={Link}
        target="_blank"
        href="https://youtube.com/@ISpreadTech?si=0Wm5SCsSRk9fSOWe"
      >
        <FaYoutube className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Socials;
