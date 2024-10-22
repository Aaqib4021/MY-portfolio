import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import mtm from "../images/MTM poster.png";
import youtube from "../images/youtube.png";
import netflix from "../images/netflix.png";
import age from "../images/age.png";
const style =
  "px-2 py-1 font-medium bg-gray-700 mr-[2px] text-xs rounded-lg inline-block mb-1 ";

const MyWork = () => {
  return (
    <div className="mb-20 mt-10 ">
      <div className="main-div flex flex-col ">
        <div className="head-div text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">Check out my work</h1>
          <p className="  text-gray-400">
            I've worked on a variety of projects,Here are a few of my favorites.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 px-2 ">
          <div className="MTM-project  rounded-lg border border-gray-600">
            <div className="logo-div">
              <img src={mtm} alt="logo" className="rounded-t-lg " />
            </div>

            <div className="info-div p-2">
              <div className=" font-medium mb-1">
                MTM - Your Favorite Money Sending Plateform
              </div>
              <time className="text-xs font-medium">Sept 2024</time>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                A full-stack money-sending web app where users can sign up,
                receive a random amount of money, and send money to friends in
                real-time, with instant updates and a smooth user experience!
              </p>
              <div className="tech-used mt-14">
                <span className={style}>React.js</span>
                <span className={style}>Node.js</span>
                <span className={style}>Express.js</span>
                <span className={style}>mongodb.js</span>
              </div>
              <div className="links-div flex mt-1">
                <a
                  href="https://github.com/Aaqib4021/MTM"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <FaGithub />
                  </span>
                  Source code
                </a>
              </div>
            </div>
          </div>
          <div className="Youtube-project  rounded-lg border border-gray-600">
            <div className="logo-div">
              <img src={youtube} alt="logo" className="rounded-t-lg " />
            </div>

            <div className="info-div p-2">
              <div className=" font-medium mb-1">
                Youtube Clone - Go where you feel entertained
              </div>
              <time className="text-xs font-medium">Aug 2024</time>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                A YouTube clone project featuring multiple routes like Home,
                Results, and Watch pages. It includes real-time search
                recommendations, a watch page with video and comments, and
                additional popular video suggestions for a smooth user
                experience.
              </p>
              <div className="tech-used">
                <span className={style}>React.js</span>
                <span className={style}>TailwindCSS</span>
                <span className={style}>Redux.js</span>
                <span className={style}>JS</span>
              </div>
              <div className="links-div flex mt-1">
                <a
                  href="https://github.com/Aaqib4021/Youtube-clone"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <FaGithub />
                  </span>
                  Source code
                </a>
                <a
                  href="https://youtube-clone-three-pink.vercel.app/"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <CiGlobe />
                  </span>
                  Website
                </a>
              </div>
            </div>
          </div>

          <div className="Netflix-project  rounded-lg border border-gray-600">
            <div className="logo-div">
              <img src={netflix} alt="logo" className="rounded-t-lg " />
            </div>

            <div className="info-div p-2">
              <div className=" font-medium mb-1">
                Netflix Clone - Your go to streaming partner
              </div>
              <time className="text-xs font-medium">June 2024</time>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                A Netflix clone project that includes sign-up and sign-in pages
                with validation, Firebase authentication, a language change
                option, and a GPT-powered search feature for personalized
                recommendations, providing a smooth and interactive user
                experience.
              </p>
              <div className="tech-used mt-9">
                <span className={style}>React.js</span>
                <span className={style}>TailwindCSS</span>
                <span className={style}>Redux.js</span>
                <span className={style}>JS</span>
              </div>
              <div className="links-div flex mt-1">
                <a
                  href="https://github.com/Aaqib4021/netflix-gpt"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <FaGithub />
                  </span>
                  Source code
                </a>
                <a
                  href="https://netflix-gpt-cyan-mu.vercel.app/"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <CiGlobe />
                  </span>
                  Website
                </a>
              </div>
            </div>
          </div>

          <div className="Age-project rounded-lg border border-gray-600">
            <div className="logo-div">
              <img src={age} alt="logo" className="rounded-t-lg " />
            </div>

            <div className="info-div p-2">
              <div className=" font-medium mb-1">
                Age Calculator - Calculate its never to late
              </div>
              <time className="text-xs font-medium">June 2024</time>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                A project that allows users to calculate their age based on
                their date of birth. The application provides a user-friendly
                interface where users can input their birth date and instantly
                receive their current age, enhancing their understanding of how
                age is calculated in real time.
              </p>
              <div className="tech-used mt-9">
                <span className={style}>HTML</span>
                <span className={style}>CSS</span>
                <span className={style}>JavaScript</span>
              </div>
              <div className="links-div flex mt-1">
                <a
                  href="https://github.com/Aaqib4021/age-calci"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <FaGithub />
                  </span>
                  Source code
                </a>
                <a
                  href="https://super-manatee-844e15.netlify.app/"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <CiGlobe />
                  </span>
                  Website
                </a>
              </div>
            </div>
          </div>

          <div className="news-project  rounded-lg border border-gray-600">
            <div className="logo-div">
              <img
                src="https://www.technipages.com/wp-content/uploads/2022/02/News.jpg"
                alt="logo"
                className="rounded-t-lg "
              />
            </div>

            <div className="info-div p-2">
              <div className=" font-medium mb-1">
                News app - Stay updated its important
              </div>
              <time className="text-xs font-medium">July 2024</time>
              <p className="text-sm text-gray-400 mt-2 mb-4">
                A news app featuring a search functionality that allows users to
                find specific news articles. The app also displays news based on
                user-selected categories, providing a personalized experience
                tailored to their interests.
              </p>
              <div className="tech-used mt-14">
                <span className={style}>React.js</span>
                <span className={style}>TailwindCSS</span>
                <span className={style}>Redux.js</span>
                <span className={style}>JS</span>
              </div>
              <div className="links-div flex mt-1">
                <a
                  href="https://github.com/Aaqib4021/my_newz-app"
                  className="w-28 bg-white px-2 py-1 font-medium text-xs text-black rounded-md mr-2 flex items-center justify-center"
                >
                  <span className="inline-block mr-2">
                    <FaGithub />
                  </span>
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWork;
