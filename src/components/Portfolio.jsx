import React from 'react'
import web1 from "../assets/project1.png";
import web2 from "../assets/project2.png";
import web3 from "../assets/project3.png";
import web4 from "../assets/project4.png";

const Portfolio = () => {
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full'>
        <div className=" max-w-screen-lg mx-auto text-white p-4 ">
            <div>
                <p className='text-6xl font-bold flex justify-center'>Portfolio</p>
                <p className='text-2xl mt-20 text-gray-400'>Check out some fo my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 py-8'>
                <div className='basis-1/3 flex-1'>
                    <img src={web2} alt='' className='rounded-lg object-cover hover:scale-105 duration-500'/>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img src={web3} alt='' className='rounded-lg object-cover hover:scale-105 duration-500'/>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img src={web4} alt='' className='rounded-lg object-cover hover:scale-105 duration-500'/>
                </div>

                <div className='basis-1/3 flex-1'>
                    <img src={web1} alt='' className='rounded-lg object-cover hover:scale-105 duration-500'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio