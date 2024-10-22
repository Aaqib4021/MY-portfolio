import React from "react";
const style =
  "bg-white px-2 md:px-5 sm:px-3 py-1 rounded-md text-black text-xs font-medium";
const SkillsInfo = () => {
  return (
    <div className="mt-8 mb-16">
      <h1 className="text-xl font-bold mb-6">Skills & Tech Stacks</h1>
      <div className="skills flex flex-wrap gap-1 md:gap-2 ">
        <span className={style}>HTML</span>
        <span className={style}>CSS</span>
        <span className={style}>JavaScript</span>
        <span className={style}>TypeScript</span>
        <span className={style}>React.js</span>
        <span className={style}>Node.js</span>
        <span className={style}>Express.js</span>
        <span className={style}>Tailwind CSS</span>
        <span className={style}>Redux</span>
        <span className={style}>MongoDb</span>
        <span className={style}>Vs Code</span>
        <span className={style}>Git</span>
        <span className={style}>Firebase</span>
        <span className={style}>Figma</span>
        <span className={style}>PostgreSQL</span>
      </div>
      <div className="logo-container p-2 relative border-blur border border-black mt-2">
        <div className="logo-wrapper  mt-4 animate-scroll">
          <div className="html-logo w-14 h-14 bg-white p-2 rounded-full">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/html.964cf5a7.svg"
              alt="html-logo"
            />
          </div>
          <div className=" css-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/css.fdf257b7.svg"
              alt="css-logo"
              className="rounded-full"
            />
          </div>
          <div className="js-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/javascript.ab9abb28.svg"
              alt="js logo"
            />
          </div>
          <div className="ts-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/typescript.7bed7ff0.svg"
              alt="ts logo"
            />
          </div>
          <div className="react-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/react.58a171c7.svg"
              alt="react logo"
            />
          </div>
          <div className="node-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/nodejs.e43f3fc7.svg"
              alt="node logo"
            />
          </div>
          <div className="express-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/express-js.cc24394d.svg"
              alt="express logo"
            />
          </div>
          <div className="tailwind-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/tailwind-css.656744c0.svg"
              alt="tailwind logo"
            />
          </div>
          <div className="redux-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/redux.71ccc46d.svg"
              alt="redux logo"
            />
          </div>
          <div className="mongodb-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/mongodb.7d4f7146.svg"
              alt="mongodb logo"
            />
          </div>
          <div className="vscode-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/visual-studio.cf989ae7.svg"
              alt="vs-code logo"
            />
          </div>
          <div className="git-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/git.7a0d618a.svg"
              alt="git logo"
            />
          </div>
          <div className="firebase-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/firebase.b338d667.svg"
              alt="firebase logo"
            />
          </div>
          <div className="figma-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/figma.29fa40ec.svg"
              alt="figma logo"
            />
          </div>
          <div className="PostgreSQL-logo w-14 h-14 bg-white p-2 rounded-full ">
            <img
              src="https://manjunath18.vercel.app/_next/static/media/postgresql.d0c62796.svg"
              alt="PostgreSQL logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
