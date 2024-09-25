import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ProfileImage from "../assets/yellopro.png"; // Replace with your profile image path
import { motion } from "framer-motion";
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-t from-gray-800 to-black h-full w-full py-52"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col justify-center my-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Mobile App Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello! I'm Migara Kavishan, a dedicated and ambitious mobile app developer with a focus on Flutter. I am eager to learn and create seamless and intuitive applications that enhance user experiences.
          </p>

          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-5"
        >
          <img
            src={ProfileImage}
            alt="my profile"
            className="rounded-2xl h-80 mx-auto max-w-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
