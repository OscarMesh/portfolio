import React, { useState } from "react";
import { motion } from "framer-motion";

const Skill = (props) => {
  const [directionLeft, setDirectionLeft] = useState(true);
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://drive.google.com/uc?id=1HW_u-dg5eEsEAxcxyWkypyEWODpDQZpL"
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-20
        xl:h-20 filter  group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-16 w-16 xl:w-20 xl:h-20 rounded-full z-0 "
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-[18px] font-bold text-black justify-center opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
