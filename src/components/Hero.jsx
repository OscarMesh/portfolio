import React, { useState, useEffect } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import sanityClient from "../client.js";

const Hero = () => {
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "pageInfo"]{
        ...,
        heroImage{
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

  const [text] = useTypewriter({
    words: [
      "Hi there!",
      `I'm ${pageInfo[0]?.name}`,
      "Guy-who-loves-movies",
      "<ButLovesToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={pageInfo[0]?.heroImage?.asset.url}
        alt={pageInfo.heroImage?.alt}
      />
      <div className="z-20">
        <h2 className="text-[12px] md:text-sm uppercase text-gray-500 pb-2 tracking-[5px] md:tracking-[15px]">
          {pageInfo[0]?.role}
        </h2>
        <h1 className="text-[24px] md:text-5xl lg:text-6xl font-semibold scroll-px-10 ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#898989" />
        </h1>
        <div className="pt-5">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
