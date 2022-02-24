/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const CenterMenu = () => {
  return (
    <div className="max-w-full h-3/4 m-10 md:px-10 py-5 rounded-2xl shadow-xl bg-blue-special" id="centerMenu">
      <div className="md:ml-20 mx-10 my-28">
        <div className="flex justify-between">
          <p className="font-semibold text-black mb-2 md:text-4xl text-4xl md:leading-normal">
            Hi, my name is{" "}
            <span className="font-bold underline decoration-wavy decoration-mountain-meadow-400">
              Jhon Garcia
            </span>{" "}
            <br />
            and I&apos;m a Web Developer.
          </p>
          <div>
            <img
              src="/pc.png"
              alt="computer"
              width={200}
              height={200}
            />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default CenterMenu;
