import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import sanityClient from "../client.js";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "experience"]{
    ...,
    companyImage {
      asset-> {
        _id,
        url
      }
    },
    technologies[] ->
      {
        image{
         asset -> {
                  _id,
                  url
                },
                alt
              }
      }
 
  }
 `
      )
      .then((data) => setExperiences(data))
      .catch(console.error);
  }, [sanityClient, setExperiences]);

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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h1 className="absolute top-20 text-center uppercase tracking-[20px]  text-gray-500 text-2xl">
        Experience
      </h1>
      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-28 xl:mt-40 
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#898989]/80"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
