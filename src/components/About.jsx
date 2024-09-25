import React from "react";
import { MdDownload } from "react-icons/md";

const About = () => {
  const fileUrl =
    "https://drive.google.com/file/d/12Fml_1CJ6tYdKBH5tC9b6STLxzrssYD7/view?usp=sharing";
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b h-screen from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 py-80">
          <p className="text-6xl font-bold flex justify-center">About</p>
        </div>

        <div>
          <p className="text-2xl mt-20 text-gray-300">
            👋 Hello! Welcome to my portfolio!
          </p>
          <p className="text-gray-400">
            I am a passionate mobile app developer specializing in Flutter,
            dedicated to building seamless, efficient, and visually captivating
            cross-platform applications. I have a deep-rooted interest in
            transforming innovative ideas into intuitive and powerful mobile
            experiences.
          </p>
          <br />
          <p className="text-xl text-gray-300">🎨 UI/UX Design:</p>
          <p className="text-gray-400">
            Design is a critical part of my development process. I approach each
            project with empathy for users, ensuring that the interface is
            intuitive and visually engaging. From wireframes to polished
            prototypes, I create user flows that enhance the experience and
            align with the app's purpose.
          </p>
          <br />
          <p className="text-xl text-gray-300">📱 Mobile App Development:</p>
          <p className="text-gray-400">
            As a Flutter developer, I specialize in crafting mobile apps that
            run smoothly on both Android and iOS platforms. My expertise
            includes Dart, Flutter framework, and working with Firebase, and
            third-party integrations to deliver top-notch cross-platform apps.
          </p>

          <div className="flex justify-center py-8">
            <a href={fileUrl}>
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
    </div>
  );
};

export default About;
