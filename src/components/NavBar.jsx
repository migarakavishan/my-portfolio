import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex justify-between items-center w-full h-20 px-10 text-white bg-black bg-opacity-95 fixed dark:bg-gray-100 dark:text-black ">
          <div>
            <h1 className="text-5xl font-signature">Migara</h1>
          </div>
          <div className="flex">
            <ul className="hidden md:flex">
              {link.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 dark:text-gray-900"
                >
                  <Link to={link} soomth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <MdNightsStay size={25} />
              ) : (
                <MdLightMode onClick={() => setDarkMode(!darkMode)} size={25} />
              )}
            </div>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden flex justify-between dark:text-gray-900"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 dark:from-white dark:to-gray-200 dark:text-gray-900">
              {link.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-3xl"
                >
                  <Link
                    onClick={() => setNav(!nav)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
