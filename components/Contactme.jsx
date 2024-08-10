import React from "react";
import { ImUserTie } from "react-icons/im";
import {
  SiGithub,
  SiLinkedin
} from "react-icons/si";

import Image from "next/image";
import { BsFilePdfFill } from "react-icons/bs";

const Contactme = () => {
  return (
    <div className="m-10" id="contact">
      <div className="max-w-full rounded-xl shadow-2xl bg-blue-special">
        <div className="flex justify-around items-center flex-wrap">
          <div>
            <h2 className="md:text-6xl text-3xl md:m-10 mt-4 text-black flex justify-center flex-wrap">
              <ImUserTie />
            </h2>
            <h1 className="md:text-5xl text-2xl text-center">Contacts</h1>
            <div className="flex justify-evenly">
              <h1 className="md:m-10 m-3 md:text-3xl text-2xl hover:text-blue-700 transform hover:scale-125 transition-all">
                <a
                  href="https://www.linkedin.com/in/jhon-emanuel-garcia-martinez-00582b213/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLinkedin />
                </a>
              </h1>
              <h1 className="md:m-10 m-3 md:text-3xl text-2xl hover:text-white transform hover:scale-125 transition-all">
                <a
                  href="https://github.com/jhon192"
                  rel="noreferrer"
                  target="_blank"
                >
                  <SiGithub />
                </a>
              </h1>
              <h1 className="md:m-10 m-3 md:text-3xl text-2xl hover:text-red-600 transform hover:scale-125 transition-all">
                <a
                  href="Curriculum.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsFilePdfFill />
                </a>
              </h1>
            </div>
          </div>
          <div className="md:w-2/6 md:p-10 m-1">
            <div className="p-10 bg-black rounded-md" key="x.name">
              <div className="text-center">
                <Image
                  src="/index.jpg"
                  alt="card-image"
                  className="object-scale-down"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-700 text-center mt-4 mb-4">
                  Jhon E. Garcia Mar.
                </h1>
                <p className="text-white whitespace-pre-wrap">
                  Im a Full Stack Developer, I have experience in the
                  development of web applications with different technologies
                  such as React, Node, Laravel, etc. I am a person who likes to
                  learn new things and I am always looking for new challenges to
                  improve my skills. I am a person who likes to work in a team
                  and I am always willing to help my colleagues. I am a person
                  who likes to work in a team and I am always willing to help my
                  colleagues.
                </p>
                <div className="mt-7 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
