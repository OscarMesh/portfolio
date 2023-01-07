import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sanityClient from "../client.js";
const About = () => {
  const [pageInfo, setPageInfo] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "pageInfo"]{
        ...,
        profilePic{
          asset -> {
                 _id,
                 url
               },
               alt
             }
      } `
      )
      .then((data) => setPageInfo(data))
      .catch(console.error);
  }, []);
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 text-center uppercase tracking-[20px]  text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        src={pageInfo[0]?.profilePic.asset.url}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mt-28 md:mt-0 xl:mt-20"
      />
      <div className="space-y-4 px-0 md:px-10 mt-16 md:mt-0">
        <h4 className="text-2xl mt-4 md:mt-auto md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#898989]/58">little </span>
          backround
        </h4>
        <p className="text-[14px] md:text-base text-justify ">
          {pageInfo[0]?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
// https://drive.google.com/file/d/1Q4LxDAH35-VUx8ebdAw4mbFv1RZ2aDiQ/view?usp=sharing
// https://drive.google.com/file/d/1EDZ_88iqEIAPmY7qUWzpZFUgUPLiwgYp/view?usp=sharing
