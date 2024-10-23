import React from "react";
import AaqibCV from "../docs/Aaqib-CV.pdf";
import { FaFileAlt } from "react-icons/fa";

const Information = () => {
  return (
    <div className="flex flex-col sm:gap-3 md:gap-4 lg:gap-8 md:flex-row ">
      <div className="self-center md:self-start md:ml-4">
        <div className="-mt-8 sm:-mt-28 md:-mt-28 lg:-mt-32">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHOZOlzhVEeBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696145481141?e=1734566400&v=beta&t=-r_TSlGS0cMlbjKaJNoj2GoObzKqccbBItyAcbmDV5o"
            alt="My-image"
            className="w-28 sm:w-44 md:w-72 lg:w-64 rounded-full"
          />
        </div>
      </div>

      <div className="max-w-[500px] mt-3">
        <p className="text-gray-500 text-xs font-medium">October 19, 2024</p>
        <h1 className="Name text-4xl font-bold my-1 ">Aaqib Bashir</h1>
        <div id="role" className=" text-xs">
          <span>Software Development Engineer</span>
          <span>Full Stack Developer</span>
          <span>React.js Developer</span>
          <span>JavaScript Developer</span>
          <span>Backend Developer</span>
        </div>
        <p className="Description max-w-[500px] text-gray-500 font-medium mb-2 text-xs sm:text-sm ">
          Full Stack Developer specializing in JavaScript, React, and Node.js.
          Experienced in frontend and backend, focused on creating efficient,
          responsive web applications. Passionate about emerging tech and
          tackling complex challenges in web development.
        </p>
        <a
          href={AaqibCV}
          download="Aaqib_resume.pdf"
          className="Resume bg-white text-black px-6 py-2 rounded-lg text-xs font-medium mt-2 text-center w-36 flex items-center"
        >
          My Resume
          <span
            className="inline-block ml-2
          "
          >
            <FaFileAlt />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Information;
