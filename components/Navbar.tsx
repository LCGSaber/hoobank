"use client"
import { close, logo, menu, zxlogos } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  // const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [isNavVisible, setNavVisible] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  // 计算导航栏高度
  useEffect(() => {
    const navElement = document.querySelector('header');
    if (navElement) {
      setNavHeight(navElement.offsetHeight);
    }
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // 处理导航栏显示/隐藏逻辑
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 向下滚动且超过100px时隐藏导航栏（仅菜单关闭时）
      // if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
      //   setNavVisible(false);
      // } else {
      //   setNavVisible(true);
      // }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // 平滑滚动到锚点
 
  // 优化后的滚动函数，避免导航栏遮挡内容
  const scrollToSection = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      // 计算调整后的滚动位置
      const adjustedTop = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: adjustedTop,
        behavior: 'smooth'
      });
      
      setMenuOpen(false);
    }
  };

  // 监听路由变化关闭菜单
  // React.useEffect(() => {
  //   setMenuOpen(false);
  // }, [router.asPath]);

  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${isNavVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="bg-white shadow-md">
        <div className="container mx-auto py-3 flex justify-between items-center">
          <Image src={zxlogos} alt="HooBank" width={200} height={60} className='ml-2' />
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              // <li
              //   key={nav.id}
              //   className={`font-poppins font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              //   <a href={`#${nav.id}`}>
              //     {nav.title}
              //   </a>
              // </li>
              <li
                key={nav.id}>
                <button
                  className="w-full text-left py-2 px-3 rounded hover:bg-primary/10 transition-colors"
                  onClick={() => scrollToSection(nav.id)}
                >
                  <span className="font-medium">{nav.title}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center mr-4">
            {/* <button
            className="object-contain left-2"
            onClick={() => setToggle((prev) => !prev)} 
            >
            <span className="font-medium">目录</span>
            </button> */}
            <Image src={toggle ? close : menu}
              alt="menu"
              className="object-contain bg-primary left-2"
              width={20}
              height={12}
              onClick={() => setToggle((prev) => !prev)} />
            <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-primary absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className="list-none flex flex-col justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}>
                    <button
                      className="w-full text-left py-2 px-3 rounded hover:bg-primary/10 transition-colors"
                      onClick={() => scrollToSection(nav.id)}
                    >
                      <span className="font-medium">{nav.title}</span>
                    </button>
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