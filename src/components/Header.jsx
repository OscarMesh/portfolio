import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import sanityClient from "../client.js";



const Header = () => {
  const [socialData, setSocialData] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "social"]`)
      .then((data) => setSocialData(data))
      .catch(console.error);
  }, [sanityClient, setSocialData]);

  // console.log(socialData);

  return (
    <>
      <header
        className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 
      xl:items-center"
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          {/* Social Icons */}

          {socialData.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="grey"
              bgColor="transparent"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <a href="#contact">
            <SocialIcon
              className="cusor-pointer"
              network="email"
              fgColor="grey"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
              Get in Touch
            </p>
          </a>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
