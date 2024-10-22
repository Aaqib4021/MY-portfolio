import React from "react";
const style =
  "px-2 py-1 font-medium bg-gray-800 mr-2 text-xs text-gray-300 rounded-lg inline-block mt-1 ";
const WorkExp = () => {
  return (
    <div className="mb-12 ">
      <h1 className="text-xl font-bold mb-6">Work Experience</h1>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="w-16 h-16">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQGrA6OzFPy4qw/company-logo_200_200/company-logo_200_200/0/1630505273975/varcons_inc_logo?e=1737590400&v=beta&t=fsNYwLGRuRmuc-bdDYpB_sK68t6iJKGPbP4Br8tA2mI"
              alt="varcons-logo"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="font-medium">Varcons Technologies</h2>
            <h3 className="text-xs font-medium">Full Stack Intern</h3>
            <div>
              <span className={style}>JavaScript</span>
              <span className={style}>React.js</span>
              <span className={style}>Node.js</span>
              <span className={style}>Express.js</span>
              <span className={style}>mongodb</span>
            </div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400">
          August 2023 - October 2023
        </div>
      </div>

      <div className="flex justify-between mt-8 ">
        <div className="flex gap-2">
          <div className="w-16 h-16">
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/311/223/large_2x/f-logo-f-icon-oval-corners-simple-f-logo-vector.jpg"
              alt="freelancing-logo"
              className="rounded-full"
            />
          </div>
          <div>
            <h2 className="font-medium">Freelancing</h2>
            <h3 className="text-xs font-medium">Full Stack Developer</h3>
            <div>
              <span className={style}>JavaScript</span>
              <span className={style}>React.js</span>
              <span className={style}>Node.js</span>
              <span className={style}>Express.js</span>
              <span className={style}>mongodb</span>
              <span className={style}>Figma</span>
              <span className={style}>Prisma</span>
            </div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400">
          October 2023 - Present
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
