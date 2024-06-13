import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFirebase,
  SiTypescript,
  SiJquery
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass,  } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaAngular, FaPhp, FaShopify, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { ReactNode } from "react";

export interface ITechStack {
  name: string;
  icon: ReactNode;
};

export const TechStackData: ITechStack[] = [
    {
      name: "ReactJS",
      icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
    },
    {
      name: "Redux-toolkit",
      icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
    },
    {
      name: "HTML5",
      icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
    },
    {
      name: "Meterial UI",
      icon: <SiMui className="md:text-4xl text-2xl" color="#29b6f6" />,
    },
    {
      name: "Chakra UI",
      icon: <SiChakraui className="md:text-4xl text-2xsl" color="#50cbc0" />
    },
    {
      name: "Vercel",
      icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
    },
    {
      name: "Github",
      icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />
    },
]