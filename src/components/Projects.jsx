import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import sanityClient from "../client.js";

const Projects = () => {
  // const projects = [1, 2, 3, 4, 5];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        ` *[_type == "project"]{
        ...,
        image {
          asset -> {
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
      }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, [sanityClient, setProjects]);

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 text-center uppercase tracking-[20px]  text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-hidden overflow-y-hidden snap-x
      snap-mandatory z-10"
      >
        {projects.map((project, i) => {
          return (
            <div
              className="w-screen mt-10 flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-10 md:p-33 h-screen"
            >
              <motion.img
                initial={{
                  opacity: 0,
                  y: -300,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                src={project?.image?.asset.url}
                alt=""
                className="w-56 h-56 object-cover rounded-md md:w-60 md:h-60 xl:w-80 xl:h-80"
              />
              <div className="space-y-3 px-0 md:px-5 max-w-6xl">
                <h4 className="text-2xl font-semibold text-center">
                  <span className="underline decoration-[#898989]">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  {project.title}
                </h4>
                <div className="flex items-center justify-center">
                  {project.technologies.map((technology) => (
                    <>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={technology.image.asset.url}
                        alt=""
                        key={technology.image.asset._id}
                      />
                    </>
                  ))}
                </div>
                <a
                  href={project.linkToBuild}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-center flex items-center justify-center hover:underline "
                >
                  Link to Build
                </a>
                <p className="text-base text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30] bg-[#898989]/10 left-0 h-[400px] -skew-y-12 "></div>
    </div>
  );
};

export default Projects;
// https://drive.google.com/file/d/1K8ryHqQHyccENdgl_VCSCtX1Y4g_2Gfp/view?usp=sharing
