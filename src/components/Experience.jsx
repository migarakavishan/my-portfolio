import React from "react";
import bootstrapimage from "../assets/bootstrapImage.png";
import cssimage from "../assets/cssimage.png";
import githubimage from "../assets/githubImage.png";
import htmlimage from "../assets/html.png";
import jsimage from "../assets/jsImage.png";
import phpimage from "../assets/phpImage.png";
import reactimage from "../assets/reactImage.png";
import tailwindimage from "../assets/tailwindImage.png";

import aiimage from "../assets/aiImage.png";
import dartImage from "../assets/dartImage.png";
import figmaimage from "../assets/figmaImage.png";
import firebaseImage from "../assets/firebaseImage.webp";
import flutterImage from "../assets/flutterImage.png";
import psimage from "../assets/psImage.png";
import xdimage from "../assets/xdImage.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-gray-800 to-black h-full w-screen py-96"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div className="">
          <div>
            <p className="text-6xl font-bold flex justify-center">Experience</p>
          </div>
          <p className="text-2xl mt-20 text-gray-400">
            There are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-14 text-center py-8 px-12 sm:px-10">
          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={flutterImage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Flutter</p>
          </div>
          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={dartImage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Dart</p>
          </div>
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
            <p className="text-gray-300 mt-10 ">Php</p>
          </div>

          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={githubimage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Github</p>
          </div>
          <div className="shadow-xl hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={firebaseImage} alt="" className="w-40 mx-auto" />
            <p className="text-gray-300 mt-4">Firebase</p>
          </div>
        </div>

        <div>
          <p className="text-2xl mt-20 text-gray-400">
            There are the softwares I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-14 text-center py-8 px-10 sm:px-10">
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
