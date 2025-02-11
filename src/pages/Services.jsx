import React from "react";
 import { CiGlobe } from "react-icons/ci";
 import { AiFillAndroid } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";

const Services = () => {
  const boxData = [
    { icons:<CiGlobe />,
      title: "Web Development", description: "I can create high-quality websites and web applications.",
    read:"read more "},
    { icons:<AiFillAndroid />,
      title: "Mobile App Development", description: "I can help you develop mobile apps using React Native or Flutter.",
    read:"read more " },
    { 
      icons:<CgIfDesign />,
      title: "UI/UX Design", description: "I can create beautiful and user-friendly interfaces for your web and mobile applications.",
    read:"read more " },
  
  ]
  return <div className=" bg:px-[12%] bg:py-10 scroll-mt-20 text-black dark:text-white flex flex-col items-center" id="about">
  <h4 className="text-center mb-2 text-lg font-serif">What I Offer</h4>
  <h1 className="text-center text-2xl sm:text-5xl font-serif">My Services</h1>
  <p className="font-semibold m-2 text-center">
    I am a passionate Frontend Developer from Accra, Ghana, eager to build engaging and responsive web experiences.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
    {boxData.map((box, index) => (
      <div key={index} className="bg-white dark:bg-gray-800 rounded-md p-8 flex flex-col items-start gap-6 border  h-[400px ] w-[250px] border border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:text-black">
        <div className="flex h-8 w-8 bg-pink-600 rounded-md justify-center items-center text-white">
          {box.icons}
        </div>
        <h2 className="text-xl font-bold">{box.title}</h2>
        <p className="text-neutral-500">{box.description}</p>
      </div>
    ))}
  </div>
</div>

};

export default Services;
