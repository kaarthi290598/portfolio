"use client";

import { AiFillHtml5 } from "react-icons/ai";
import { FaChartBar, FaGit, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

export const skills = [
  { title: "React", icon: <FaReact className="h-8 w-8 text-blue-500" /> },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="h-8 w-8 text-black-50" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss className="h-8 w-8 text-blue-800" />,
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

export const webProjects = [
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
    description: "Travel and mark your journey app",
    bigDescription:
      "World Wise is your ultimate companion for documenting and reminiscing about your travel adventures. Capture your memories, mark your favorite destinations, and relive your journeys with World Wise.",
    image: "/assets/images/worldwise.png",
    stack: ["React", "CSS Module", "Context API"],
    links: {
      github: "https://github.com/kaarthi290598/worldwise",
    },
  },
];

export const dataProjects = [
  {
    title: "Pizza Sales report",
    description:
      "Leveraging Power BI and SQL for In-depth Analysis of Pizza Sales Data",
    bigDescription:
      "Incorporating Power BI and SQL analysis, the project delved into pizza sales data from a SQL Server database, crafting a comprehensive dashboard exhibiting key KPIs, daily and monthly sales trends, as well as insights into sales distribution by size and category, and identifying top and bottom sellers by order count and revenue.",
    image: "/assets/dataprojects/pizzasales.png",
    stack: ["Power BI", "SQL", "DAX", "Microsoft SQL Server"],
    links: {
      github:
        "https://github.com/kaarthi290598/dataanalysis/tree/38796990d4ef0a17c0591f43348c7e03f9635c73/Pizza%20Sales%20Data%20analysis%20-%20PBI%2C%20SQL",
      documentation:
        "https://kaarthi.notion.site/Pizza-Sales-SQL-Power-BI-ddb6b2efbb9e472a9331a664ed845c45?pvs=4",
    },
  },
  {
    title: "HR Data analytics",
    description:
      "Utilizing Power BI for In-depth Analysis of HR data of company Atliq",
    bigDescription:
      "Analyzing HR data for Atliq, Power BI was employed to create a dynamic dashboard showcasing essential KPIs like present, WFH, and leave percentages, along with monthly trends. Leveraging PBI parameters/functions enabled seamless data loading for future months.This project equips Atliq smarter workforce planning and decision-making",
    image: "/assets/dataprojects/hrdataanalysis.png",
    stack: ["Power BI", "Power query", "DAX"],
    links: {
      github:
        "https://github.com/kaarthi290598/dataanalysis/tree/38796990d4ef0a17c0591f43348c7e03f9635c73/HR%20data%20analytics-%20PBI",
      documentation:
        "https://kaarthi.notion.site/HR-Data-analytics-82abbe6afac74e1e8e482c9425921551?pvs=4",
    },
  },
];
