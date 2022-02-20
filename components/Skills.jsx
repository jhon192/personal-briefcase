import { useEffect } from "react";
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="bg-violet-700 m-10 rounded-md">
        <div className="flex justify-center">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Habilidades
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 m-10 rounded-xl shadow-lg bg-white md:w-3/6 w-2/3">
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-orange-500 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiHtml5 />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-blue-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiCss3 />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-yellow-400 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiJavascript />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-cyan-400 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiReact />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-green-500 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiNodedotjs />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-blue-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiTypescript />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-violet-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiPhp />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-red-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiLaravel />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-screamin-green-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiCsharp />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-screamin-green-800 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiMongodb />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-violet-700 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiBootstrap />{" "}
              </h1>
            </div>
            <div className="md:h-10 md:w-10 md:m-10 h-5 w-5 m-5">
              <h1 className="md:text-5xl text-3xl opacity-70 hover:text-mountain-meadow-300 hover:opacity-100 transform hover:scale-125 transition-all">
                {" "}
                <SiTailwindcss />{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
