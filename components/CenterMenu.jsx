import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const CenterMenu = () => {
  return (
    <div className="max-w-full h-3/4 m-10 md:px-10 py-5 rounded-3xl shadow-xl bg-gray-100" id="centerMenu">
      <div className="md:ml-20 mx-10 my-28">
        <div className="flex justify-between">
          <p className="font-semibold text-slate-800 mb-2 md:text-4xl text-4xl md:leading-normal">
            Hi, my name is{" "}
            <span className="font-bold underline decoration-wavy decoration-slate-400">
              Jhon Garcia
            </span>{" "}
            <br />
            and I&apos;m a Web Developer.
          </p>
          <div>
            <Image
              src="/computer.png"
              alt="computer"
              width={200}
              height={200}
            />
          </div>
        </div>
        <a
          href=""
          className="px-2 py-1 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white font-bold border border-blue-600 hover:border-transparent"
        >
          know more
        </a>
      </div>
    </div>
  );
};

export default CenterMenu;
