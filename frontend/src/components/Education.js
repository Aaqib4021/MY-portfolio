import React from "react";

const style =
  "px-2 py-1 font-medium bg-gray-800 mr-2 text-xs text-gray-300 rounded-lg inline-block mt-1 ";

const Education = () => {
  return (
    <div className="">
      <h1 className="text-xl font-bold mb-6">Education</h1>
      <div>
        <div className="flex justify-between mb-3 ">
          <div className="flex gap-2">
            <div className="w-16 ">
              <img
                src="https://manjunath18.vercel.app/_next/static/media/leftlogo.49d654a0.png"
                alt="ksit-logo"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-sm ">
                Bachelor of Engineering (Computer Science)
              </h2>
              <h3 className="text-sm font-medium">
                KS Institute of Technology
              </h3>
              <div>
                <span className={style}>CGPA: 7.5</span>
              </div>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-400">
            September 2020 - September 2024
          </div>
        </div>

        <div className="flex justify-between mb-3 ">
          <div className="flex gap-2">
            <div className="w-12 sm:w-16 ">
              <img
                src="https://jkbose.nic.in/images/jkboselogo.png"
                alt="hgr-sec-logo"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-sm ">
                Senior Secondary Education
              </h2>
              <h3 className="text-sm font-medium">
                MM Govt Boys Hr. Sec. School
              </h3>
              <div>
                <span className={style}>Percentage: 73.2%</span>
              </div>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-400">
            June 2019 - June 2020
          </div>
        </div>

        <div className="flex justify-between mb-3 ">
          <div className="flex gap-2">
            <div className="w-10 sm:w-16">
              <img
                src="https://i.vimeocdn.com/portrait/31221635_640x640"
                alt="niet-logo"
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="font-medium text-sm ">10th grade</h2>
              <h3 className="text-sm font-medium">N.I.E.T HIGH SCHOOL</h3>
              <div>
                <span className={style}>Percentage: 79%</span>
              </div>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-400">
            June 2018 - June 2019
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
