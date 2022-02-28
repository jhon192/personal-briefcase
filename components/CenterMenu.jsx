/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { GrPersonalComputer } from "react-icons/gr";

const CenterMenu = () => {
  return (
    <div
      className="max-w-full h-3/4 md:mx-10 md:my-24 m-10 md:px-10 py-5 rounded-2xl shadow-xl bg-blue-special"
      id="beginning"
    >
      <div className="md:ml-20 mx-10 my-28 md:flex justify-between flex-wrap">
        <div className="">
          <p className="font-semibold text-black mb-2 md:text-4xl text-4xl md:leading-normal">
            Hi, my name is{" "}
            <span className="font-bold underline decoration-wavy decoration-mountain-meadow-400">
              Jhon Garcia
            </span>{" "}
            <br />
            and I&apos;m a Web Developer.
          </p>
        </div>
        <div className="md:m-10">
          <h1 className="flex justify-center">
            {" "}
            <GrPersonalComputer className="md:text-5xl text-2xl text-center" />
          </h1>
          <h1 className="md:mx-10 mx-2 md:text-5xl text-2xl text-center">
            Inicio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CenterMenu;
