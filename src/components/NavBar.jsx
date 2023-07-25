import React, { useState } from 'react'
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const link = [
        {
            id:1,
            link: "home",
        },
        {
            id:2,
            link: "about",
        },
        {
            id:3,
            link: "portfolio",
        },
        {
            id:4,
            link: "skills",
        },
        {
            id:5,
            link: "contact",
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-20 text-white bg-black fixed py-10'>
        <div>
            <h1 className='text-5xl'>Migara</h1>
        </div>
        <ul className='hidden md:flex'>
        {link.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200'><Link to={link} soomth duration={500}>{link}</Link></li>
            ))} 
        </ul>
    </div>
  )
}

export default NavBar