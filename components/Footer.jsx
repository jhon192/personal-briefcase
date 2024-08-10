import React from "react";
import {
  SiLinux
} from "react-icons/si";

const Footer = () => {
  // const year =

  return (
    <div className="max-w-full h-10 bg-blue-700">
      <div className="">
        <p className="px-2 flex justify-end items-center"><SiLinux className="mx-10 mt-3 text-2xl" /> Copyright © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
