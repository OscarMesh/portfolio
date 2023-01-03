import React from "react";
import { motion } from "framer-motion";

const Skill = ({}) => {
  return (
    <div className="group relative flex cursor-pointer:">
      <motion.img
        initial={{
          opacity: 0,
          x: 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://drive.google.com/uc?id=1HW_u-dg5eEsEAxcxyWkypyEWODpDQZpL"
      />
    </div>
  );
};

export default Skill;
