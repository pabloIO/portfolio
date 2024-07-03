import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiFastapi,
  SiDjango,
  SiVuedotjs,
  SiBootstrap,
  SiPython,
  SiFlask,
  SiJest,
  SiPytest,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass,  } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { ReactNode } from "react";

export interface ITechStack {
  name: string;
  icon: ReactNode;
};

export interface ITechSkills {
  type: string;
  skills: ITechStack[];
};

export const TechStackData: ITechSkills[] = [
  {
    type: "Frontend",
    skills: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "ReactNative",
        icon: <TbBrandReactNative className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "Redux-toolkit",
        icon: <SiRedux className="md:text-4xl text-2xl" color="#7e57c2" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "TailwindCss",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color={"#039be5"} />,
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
  },
  {
    type: "Backend",
    skills: [],
  },
  {
    type: "Cloud/DevOps",
    skills: [],
  }
];