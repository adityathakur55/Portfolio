import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets"
import { StarsCanvas } from "./canvas";
import { github } from "../assets";

<StarsCanvas />

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 gap-12    ${
        scrolled ? "bg-black " : "bg-"
      }`}
      
    >
      
      <div className='w-[45vw] flex  items-center max-w-7xl mx-auto -mt-6   '>
        
        <Link
          to='/'
          className='flex items-center gap-2 '
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        
        </Link>
        

        <ul className='list-none hidden sm:flex flex-row gap-20   px-[32vw] w-[30px] items-center justify-center'>
          
          
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:scale-50 hover:text-[40px] text-[20px] font-mono cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        

        <div className='sm:hidden flex flex-1  items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        
      </div>
      <div className="w-[30vw] flex justify-center items-center ml-[30px] -mt-3">
  <button className="rounded-3xl bg-gray-500 w-[200px] h-[50px] px-2 cursor-pointer hover:scale-50 ml-[16vw] mt-2 flex items-center justify-center space-x-2">
    <a className="text-gray-300 text-xl" href="https://github.com/adityathakur55">Checkout my </a>
    <img className="w-8 h-8 " src={github} alt="GitHub Icon" />
  </button>
</div>

    </nav>
    
  );
};

export default Navbar;