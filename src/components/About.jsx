import React from "react";
import { MdDownload } from "https://drive.google.com/file/d/1X5xoc6DgDbg-M6b7A_qyy74FSkqLagZe/view?usp=sharing";

const About = () => {
  const fileUrl = "./assets/Resume.pdf";
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b h-screen from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 py-80">
          <p className="text-6xl font-bold flex justify-center">About</p>
        </div>
        <p className="text-2xl mt-20 text-gray-300">
          👋 Hello! Welcome to my portfolio!
        </p>
        <p className="text-gray-400">
          I am a passionate UI/UX designer and frontend developer, dedicated to
          crafting seamless and visually captivating digital experiences. With a
          deep-rooted fascination for the intersection of design and technology,
          I strive to create user-centric solutions that leave a lasting impact.
        </p>
        <br />
        <p className="text-xl text-gray-300">🎨 UI/UX Design:</p>
        <p className="text-gray-400">
          Design is at the core of my creative journey. I approach each project
          with meticulous attention to detail, empathizing with users to
          understand their needs and pain points. From wireframes to
          high-fidelity prototypes, I ensure that the user journey is intuitive
          and engaging, while maintaining a focus on aesthetics and brand
          identity.
        </p>
        <br />
        <p className="text-xl text-gray-300">💻 Frontend Development:</p>
        <p className="text-gray-400">
          As a frontend developer, I transform design concepts into functional,
          responsive, and performant websites and web applications. My
          proficiency in HTML, CSS, JavaScript, and modern frontend frameworks
          like React enables me to bring designs to life with smooth
          interactions and seamless user interfaces.
        </p>

        <div className="flex justify-center py-8">
          <a href={fileUrl} download>
            <button className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer">
              Resume
              <span className="group-hover:animate-bounce">
                <MdDownload size={25} className="ml-2 " />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
