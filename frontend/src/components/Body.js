import React from "react";
import Header from "./Header";
import Information from "./Information";
import SkillsInfo from "./SkillsInfo";
import WorkExp from "./WorkExp";
import Education from "./Education";
import MyWork from "./MyWork";
import Footer from "./Footer";
import { IoHomeOutline } from "react-icons/io5";
import { FaPen, FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin, IoMdMailOpen } from "react-icons/io";
const Body = () => {
  return (
    <div className="relative">
      <div className="fixed bottom-[1%] left-[50%] transform -translate-x-1/2 z-20">
        <div className="links-wrapper border border-gray-500  w-[370px] px-3 py-3 rounded-full flex gap-8 items-center justify-center bg-white/5 backdrop-blur-lg hover:scale-105 transition-transform duration-500 ">
          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300 ">
            {" "}
            <a href="#">
              <span>
                <IoHomeOutline />
              </span>
            </a>
          </div>
          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300 ">
            <a href="#">
              <span>
                <FaPen />
              </span>
            </a>
          </div>

          <span className="border h-8 border-gray-700"></span>

          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300">
            <a href="https://www.linkedin.com/in/aaqib-bashir-114865248/">
              <span>
                <IoLogoLinkedin />
              </span>
            </a>
          </div>
          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300">
            <a href="https://www.instagram.com/aaq_ib7">
              <span>
                <FaInstagram />
              </span>
            </a>
          </div>
          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300">
            <a href="https://github.com/Aaqib4021">
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
          <div className="rounded-md px-1 py-1 hover:scale-150 hover:bg-black transition-transform duration-300">
            <a href="mailto:aqibnengroo5@gmail.com">
              <span>
                <IoMdMailOpen />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto p-3 md:p-6 sm:p-4  ">
        <Header />
        <div className="max-w-full bg-black mx-auto relative z-1 xl:px-24 lg:px-20 md:px-11  ">
          <Information />
        </div>
        <SkillsInfo />
        <WorkExp />
        <Education />
        <MyWork />
        <Footer />
      </div>
    </div>
  );
};

export default Body;
