import { ReactNode } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface SocialMedia {
  icon: ReactNode;
  color: string;
  link: string;
}

type SocialMediaArray = SocialMedia[];

export const SocialMediaData: SocialMediaArray = [
  {
    icon: <FaLinkedinIn />,
    color: "#0072b1",
    link: "https://www.linkedin.com/in/pablo-montes-jordan/",
  },
  {
    icon: <BsGithub />,
    color: "#171515",
    link: "https://github.com/pabloIO",
  },
];
