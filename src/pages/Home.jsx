import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/my-profile.jpeg";
import handIcon from "../assets/hand-icon.png";
import rightArrow from "../assets/right-arrow-bold.png";
import downloadIcon from "../assets/download-icon.png";
import Aos from "aos";
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
  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl h-screen flex items-center justify-center mx-auto text-center gap-4 flex-col dark:text-white"
    >
      <div data-aos="fade-up" data-aos-duration="1000">
        <img src={profileImg} alt="" className="rounded-full w-32" />
      </div>

      <h3
        className="font-serif font-semibold flex items-end gap-2 text-xl md:text-2xl"
        data-aos="slide-right"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        Hi! I'm Philip Nicholas <img src={handIcon} alt="" className="w-6" />
      </h3>

      <h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-serif"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        frontend web developer based in Ghana
      </h1>

      <p
        className="max-w-2xl mx-auto font-serif"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
      >
        I am a software engineer based in Accra, Ghana, passionate about
        building responsive and user-friendly web applications.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        data-aos="flip-left"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <Link
          to={"/contact"}
          className="px-10 py-3 border rounded-full border-gwhite flex items-center gap-2 bg-black text-white dark:text-white"
        >
          Contact me
          <img src={rightArrow} alt="" className="rounded-full w-4" />
        </Link>

        <a
          href="/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-black flex items-center gap-2 dark:border-white"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          Download CV
          <img src={downloadIcon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Home;
