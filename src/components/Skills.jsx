import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import sanityClient from "../client.js";

const Skills = () => {
  const [directionLeft, setDirectionLeft] = useState(true);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "skill"]{
        progress,
          _id,
          image{
          asset -> {
            url,
            _id
          }
          }
      }
      `
      )
      .then((data) => setSkills(data))
      .catch(console.error);
  }, [sanityClient, setSkills]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 text-center uppercase tracking-[20px]  text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-28 md:top-36 uppercase tracking-[3px] text-gray-500 text-[12px] md:text-sm">
        Hover over a skill for current profieciency
      </h3>
      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5 mt-28 md:mt-36 xl:mt-56 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft={directionLeft} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
