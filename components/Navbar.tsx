"use client"
import { useState } from 'react';
import { close, logo, menu, zxlogos } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${isNavVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <Image src={zxlogos} alt="HooBank" width={200} height={60} className='logo-size' />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image src={toggle ? close : menu}
              alt="menu"
              className="object-contain bg-primary"
              width={28}
              height={28}
              onClick={() => setToggle((prev) => !prev)} />
            <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-primary absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar