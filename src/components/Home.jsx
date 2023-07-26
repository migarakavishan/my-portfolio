import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white py-4">
            I am Migara Kavishan{" "}
          </h2>
          <h3 className="text-3xl sm:text-6xl text-gray-400">UI/UX designer</h3>
          <h3 className="text-3xl sm:text-6xl text-gray-400">and</h3>
          <h3 className="text-3xl sm:text-6xl text-gray-400">
            Frontend developer
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! I'm a dedicated and ambitious UI/UX and Frontend Development
            intern, eager to learn and grow in the world of design and
            development. In this portfolio, I'm thrilled to share my projects
            and experiences as I embark on this exciting journey into the realm
            of creating captivating user experiences and bringing them to life
            through frontend development.
          </p>
          <div>
            <Link className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-500 cursor-pointer">
              Contact Me
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img />
        </div>
      </div>
    </div>
  );
};

export default Home;
