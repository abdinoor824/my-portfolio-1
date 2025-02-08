import React from "react";
import AboutMeImage from "../assets/about-me.png";

const About = () => {
  return (
    <div className="bg-black text-white py-5 overflow-hidden" id="about">
      <div className="container  px-5 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <img
            src={AboutMeImage}
            alt=""
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web application, with strong foundation in
              both frontend and backend technologies, I strive to create
              seamless and efficient user experience.
            </p>
            <div className="space-y-2">
              <div className="flex  items-center ">
                <label htmlFor="htmlandcss" className="">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-1">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-4/7"></div>
                </div>
              </div>
              <div className="flex items-center ">
                <label htmlFor="htmlandcss" className="">
                  React Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-1">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-5/7"></div>
                </div>
              </div>
              <div className="flex items-center ">
                <label htmlFor="htmlandcss" className="">
                  Node Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5 ml-1">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/7"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex mx-0 justify-between  text-center">
              <div>
                <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">1</h3>
                <p>Year of experience </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">6+</h3>
                <p>projects completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">3+</h3>
                <p>Happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
