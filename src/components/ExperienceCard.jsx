import React from "react";
import { motion } from "framer-motion";
const ExperienceCard = ({ experience }) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#464545] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
    overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        classname="max-w-30 max-h-30 rounded-full object-cover  xl:w-[200px] xl:h-[200px] object-center"
        src={experience.companyImage.asset.url}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-1xl mt-1">
          {experience.companyName}
          {/* <a
            className="font-light"
            href="https://www.tiquette.io"
            target="_blank"
            rel="noreferrer"
          >
            live
          </a> */}
        </p>
        <div className="grid grid-cols-3  gap-2 md:flex md:space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              className="h-10 w-10 rounded-full"
              src={technology.image.asset.url}
              alt=""
              key={technology.image.asset._id}
            />
          ))}
        </div>
      </div>
      <p className="uppercase py-1 text-gray-300">
        {new Date(experience.dateStarted).toDateString()} -{" "}
        {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience.dateEnded).toDateString()}
      </p>
      <ul
        className="list-disc space-y-2 ml-3 text-[18px] md:text-lg w-[300px] md:w-auto px-5 overflow-y-scroll md:overflow-hidden  
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#898989]/80 "
      >
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
