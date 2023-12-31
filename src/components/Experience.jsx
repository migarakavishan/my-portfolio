import React from "react";
import htmlimage from "../assets/html.png";
import cssimage from "../assets/cssimage.png";
import jsimage from "../assets/jsImage.png";
import tailwindimage from "../assets/tailwindImage.png";
import bootstrapimage from "../assets/bootstrapImage.png";
import reactimage from "../assets/reactImage.png";
import githubimage from "../assets/githubImage.png";
import phpimage from "../assets/phpImage.png";

import aiimage from "../assets/aiImage.png";
import psimage from "../assets/psImage.png";
import figmaimage from "../assets/figmaImage.png";
import xdimage from "../assets/xdImage.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-gray-800 to-black h-full w-screen py-96"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <p className="text-6xl font-bold flex justify-center">Experience</p>
          </motion.div>
          <p className="text-2xl mt-20 text-gray-400">
            There are the technologies I've worked with
          </p>
        </div>

        <motion.div 
        variants={fadeIn("up",0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-14 text-center py-8 px-12 sm:px-10">
          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={htmlimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">HTML</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={cssimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">CSS</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={jsimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">JavaScript</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={tailwindimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Tailwind</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={bootstrapimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Bootstrap</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={reactimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">React</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={phpimage} alt="" className="w-40 mx-auto " />
            <p className="text-gray-300 mt-10 ">php</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={githubimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Github</p>
          </div>
        </motion.div>

        <div>
          <p className="text-2xl mt-20 text-gray-400">
            There are the softwares I've worked with
          </p>
        </div>

        <motion.div
         variants={fadeIn("up",0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
         className="w-full grid grid-cols-2 sm:grid-cols-4 gap-14 text-center py-8 px-10 sm:px-10">
          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={figmaimage} alt="" className="w-24 mx-auto" />
            <p className="text-gray-300 mt-4">Figma</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={aiimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Illustrator</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={psimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Photoshop</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={xdimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Xd</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
