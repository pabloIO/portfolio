"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData, type ITechSkills } from "@/constants/SkillsData.tsx";

const TechStack = () => {
  const [sectionData, setSectionData] = useState<ITechSkills[]>([]);
  const [istechStack, setIsTechStack] = useState<boolean>(false);
  const techStackRef = useRef<HTMLDivElement>(null);
  const techBoxesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    if (techStackRef.current !== null){
      techStackObserver.observe(techStackRef.current);

      if (istechStack) {
        techBoxesRef.current?.classList.add("pop-up-child");
      } else {
        techBoxesRef.current?.classList.remove("pop-up-child");
      }
    }
    
  }, [istechStack]);

  useEffect(() => {
    setSectionData(TechStackData);

    setTimeout(() => {
      techBoxesRef.current?.classList.add("pop-up-child");
    }, 300);

  }, []);

  return (
    <Fragment>
      {
        sectionData.map((tech) => 
          <div
            className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-hidden'
            id='techStack'
            key={tech.type}
            ref={techStackRef}
          >
            <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
              <FaLaptopCode /> {tech.type}
            </h2>

            <div
              className='pop-down-child flex min-h-[450px] py-[30px] px-[20px] md:px-[100px] flex-wrap justify-center items-center gap-5'
              ref={techBoxesRef}
            >
              {tech.skills.map((skill) => (
                <div
                  className='transition-all duration-700 px-2 h-fit py-3 md:py-5 w-[120px] md:w-[150px] border border-black dark:border-white border-solid rounded flex flex-col gap-3 items-center'
                  key={skill.name}
                >
                  <p>{skill.icon}</p>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>   
        )
      }
    </Fragment>
  );
};

export default TechStack;
