import { Button, Link } from "@nextui-org/react";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const socialData = [
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="h-6 w-6" />,
    link: "https://www.linkedin.com/in/kaarthikeyan-v-e-312a8818b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

    className: "bg-blue-500 text-white",
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="h-6 w-6" />,
    link: "https://www.instagram.com/ispreadtech?igsh=MXBrd2p1MjZ5ODBqYQ==",

    className: "bg-pink-500 text-white",
  },
  {
    title: "Youtube",
    icon: <FaYoutube className="h-6 w-6" />,
    link: "https://youtube.com/@ISpreadTech?si=0Wm5SCsSRk9fSOWe",

    className: "bg-red-500 text-white",
  },
];

const Socials = () => {
  return (
    <section className="max-container padding-container flex  items-center gap-4 justify-center md:justify-between z-30 md:w-[28rem] p-10">
      {socialData.map((item, index) => (
        <Button
          isIconOnly
          className={`${item.className} rounded-full p-3`}
          aria-label="Like"
          as={Link}
          key={index}
          target="_blank"
          href={item.link}
        >
          {item.icon}
        </Button>
      ))}
    </section>
  );
};

export default Socials;
