import React, { useState } from "react";
import { motion } from "framer-motion";

const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        
        src={skill.image.asset.url}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-20
        xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-16 w-16 xl:w-20 xl:h-20 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-[18px] font-bold text-black justify-center opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
