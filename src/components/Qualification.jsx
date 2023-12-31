import React from "react";
import {motion} from "framer-motion";
import {fadeIn} from '../variants';

export const Qualification = () => {
  return (
    <div
      name="qualification"
      className="w-full h-screen from-gray-800 to-black bg-gradient-to-b"
    >
      <div className="max-w-screen-lg mx-auto p-4 justify-center w-full h-full text-white">
      <motion.div 
      variants={fadeIn("down",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
      ><p className="text-6xl font-bold flex justify-center">Qualification</p></motion.div>
        
        <div className="flex justify-center w-full my-10">
          <ol className="border-l border-neutral-100 dark:border-neutral-100">
            <motion.li
            variants={fadeIn("up",0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.7}}
            >
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-gray-400">2021 - completed at 2024</p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">Computer Science and Software Engineer</h4>
                <p className="mb-3 text-gray-400">University of Bedfordshere</p>
              </div>
            </motion.li>          
          </ol>
        </div>
      </div>
    </div>
  );
};
