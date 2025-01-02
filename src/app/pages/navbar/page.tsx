// "use client";
// import React from "react";
// import { FloatingNav } from "../../component/ui/navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// const FloatingNavDemo=()=> {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
//       ),
//     },
//   ];
//   return (
//     <div className="relative  w-full">
//       <FloatingNav navItems={navItems} />
//       <DummyContent />
//     </div>
//   );
// }
// const DummyContent = () => {
//   return (
//     <div className="grid grid-cols-1  w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
//       {/* <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
//         Scroll back up to reveal Navbar
//       </p> */}
//       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
//     </div>
//   );
// };
//  export default FloatingNavDemo;


// import React from 'react'

// export default function page() {
//   return (
//     <div>

// {/* <!-- component --> */}
// <div className="w-full shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] bg-white fixed top-0 z-50">
//     <div className="lg:ml-12 h-14 max-w-6xl">
//         <ul className="relative mx-6 flex h-full flex-row items-center justify-between text-[16px] font-medium sm:text-[18px]">
//         <Link  to="about"
//             smooth={true}
//             duration={900}><li className="hover:cursor-pointer">About</li></Link>
//            <Link  to="skills"
//             smooth={true}
//             duration={900}> <li className="hover:cursor-pointer">Skills</li></Link>
//             <Link  to="experience"
//             smooth={true}
//             duration={900}><li className="hover:cursor-pointer">Experience</li></Link>
//             <Link  to="project"
//             smooth={true}
//             duration={900}><li className="hover:cursor-pointer">Projects</li></Link>
//            <Link  to="contact"
//             smooth={true}
//             duration={900}> <li className="hover:cursor-pointer">Contact</li></Link>
//              {/* <li className="hover:cursor-pointer">Download Resume</li> */}
//         </ul>
//     </div>
// </div>


//     </div>
//   )
// }

"use client";
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';
// import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow fixed w-full z-50">
      <div className="container flex flex-wrap  items-center mx-auto">
        {/* <Link href="/"
           className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Website
            </span>
          
        </Link> */}
        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto  ${isMenuOpen ? '' : 'hidden'}`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row lg:space-x-16 md:space-x-12 md:mt-0 md:text-xl md:font-medium">
            <li>
            <Link  to="about"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-blue-700  md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:p-0 dark:text-white" aria-current="page">
                  About
                
              </Link>
            </li>
            <li>
            <Link  to="skills"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Skills
                
              </Link>
            </li>
            <li>
            <Link  to="experience"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Experience
                
              </Link>
            </li>
            <li>
            <Link  to="project"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Project
                
              </Link>
            </li>
            <li> <Link  to="resume"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Resume
                
              </Link>
            </li>
            <li>
            <Link  to="contact"
             smooth={true}
             duration={900}
                 className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
