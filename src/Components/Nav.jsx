import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GoArrowUpRight } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

import { useRef } from "react";

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize theme based on localStorage or default to true
    return localStorage.theme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  const [isScroll, setScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 text-black px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-900 dark:bg-opacity-50 dark:shadow-sm"
            : ""
        }`}
      >
        <Link to={"/"}>
          <h1 className="w-28 cursor-pointer mr-14 font-serif font-bold text-4xl dark:text-white">
            PL .
          </h1>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-serif font-semibold ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg"
          } ${isDarkMode ? "bg-[#1D232A] text-white" : "bg-white text-black"}`}
        >
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("services")}>Services</button>
          <button onClick={() => scrollToSection("work")}>My Work</button>
          <button onClick={() => scrollToSection("contact")}>Contact me</button>
        </ul>
        <div className="flex items-center gap-4 dark:text-white">
          <label className="swap swap-rotate ">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="dark"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
            />

            {/* sun icon */}
            <CiLight
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            />

            {/* moon icon */}

            <MdNightlight
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            />
          </label>

          <Link
            onClick={() => scrollToSection("contact")}
            to={"/contact"}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border-black border rounded-full ml-4 font-semibold dark:text-white"
          >
            Contact{" "}
            <GoArrowUpRight className="w-5 dark:text-white text-black" />
          </Link>
          <button
            className="block md:hidden ml-3 dark:text-white"
            onClick={openMenu}
          >
            <RiMenu3Fill className="w-8 h-8 dark:text-white" />
          </button>
        </div>
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen transition duration-500 font-Ovo font-semibold ${
            isDarkMode ? "bg-[#1D232A] text-white" : "bg-rose-50 text-black"
          }`}
        >
          <div
            className="absolute right-6 top-6 dark:text-white"
            onClick={closeMenu}
          >
            <AiOutlineClose className="dark:text-white h-8 w-8" />
          </div>

          <Link
            className="dark:text-white"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Link>
          <Link onClick={() => scrollToSection("about")}>About</Link>
          <Link onClick={() => scrollToSection("services")}>Services</Link>
          <Link onClick={() => scrollToSection("work")}>My Work</Link>
          <Link onClick={() => scrollToSection("contact")}>Contact me</Link>
        </ul>
      </div>
    </>
  );
};

export default Nav;
