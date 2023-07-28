import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ProfileImage from "../assets/yellopro.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Ui/Ux designer and Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! I'm a Migara Kavishan and I am dedicated and ambitious UI/UX
            and Frontend Development intern, eager to learn and grow in the
            world of design and development.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-64 h-64 md:w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
