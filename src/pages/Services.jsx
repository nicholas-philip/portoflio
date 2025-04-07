import React, { useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { AiFillAndroid } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";
import Aos from "aos";

const Services = () => {
  const boxData = [
    {
      icons: <CiGlobe />,
      title: "Web Development",
      description: "I can create high-quality websites and web applications.",
      read: "read more ",
    },
    {
      icons: <AiFillAndroid />,
      title: "Mobile App Development",
      description:
        "I can help you develop mobile apps using React Native or Flutter.",
      read: "read more ",
    },
    {
      icons: <CgIfDesign />,
      title: "UI/UX Design",
      description:
        "I can create beautiful and user-friendly interfaces for your web and mobile applications.",
      read: "read more ",
    },
  ];

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <div
      className="bg:px-[12%] bg:py-10 scroll-mt-20 text-black dark:text-white flex flex-col items-center"
      id="services"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1200"
    >
      <h4
        className="text-center mb-2 text-lg font-serif"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        What I Offer
      </h4>
      <h1
        className="text-center text-2xl sm:text-5xl font-serif"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        My Services
      </h1>
      <p
        className="font-semibold m-2 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        I am a passionate Frontend Developer from Accra, Ghana, eager to build
        engaging and responsive web experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {boxData.map((box, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800  p-8 flex flex-col items-start gap-6 border h-[300px] w-[250px]  border-gray-300 rounded-xl  cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-black"
            data-aos="fade-up"
            data-aos-delay={500 + index * 100}
          >
            <div
              className="flex h-16 w-8 bg-pink-600 rounded-md justify-center items-center text-white"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              {box.icons}
            </div>
            <h2
              className="text-xl font-bold"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {box.title}
            </h2>
            <p
              className="text-neutral-500"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {box.description}
            </p>
            <span
              className="text-blue-500 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              {box.read}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
