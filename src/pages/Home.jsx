import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/my-profile.jpeg";
import handIcon from "../assets/hand-icon.png";
import rightArrow from "../assets/right-arrow-bold.png";
import downloadIcon from "../assets/download-icon.png";
const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
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
  return (
    <div
      className={
        "w-11/12 max-w-3xl h-screen flex items-center justify-center mx-auto text-center gap-4 flex-col dark:text-white "
      }
    >
      <div>
        <img src={profileImg} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="font-serif font-semibold flex items-end gap-2 text-xl md:text-2xl">
        Hi! I'm Philip Nicholas <img src={handIcon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-serif">
        frontend web developer based in Ghana
      </h1>
      <p className="max-w-2xl mx-auto font-serif">
        I am a software engineer based in Accra, Ghana, passionate about
        building responsive and user-friendly web applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          to={"/contact"}
          className="px-10 py-3 border rounded-full border-gwhite flex items-center gap-2 bg-black text-white  dark:text-white "
        >
          Contact me
          <img src={rightArrow} alt="" className="rounded-full w-4" />
        </Link>

        <Link
          to={"/sample-resume.pdf"}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2  dark:text-white "
        >
          my resume
          <img src={downloadIcon} alt="" className="rounded-full w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
