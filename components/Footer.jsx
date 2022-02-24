import React from "react";
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-28 max-w-full bg-blue-700">
      <div className="flex justify-evenly">
        <h1 className="m-10 text-2xl hover:text-blue-700 transform hover:scale-125 transition-all">
          <a
            href="https://www.linkedin.com/in/jhon-emanuel-garcia-martinez-00582b213/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </a>
        </h1>
        <h1 className="m-10 text-2xl hover:text-white transform hover:scale-125 transition-all">
          <a href="#">
            <SiGithub />
          </a>
        </h1>
        <h1 className="m-10 text-2xl hover:text-cyan-500 transform hover:scale-125 transition-all">
          <a href="#">
            <SiTwitter />
          </a>
        </h1>
        <h1 className="m-10 text-2xl hover:text-pink-700 transform hover:scale-125 transition-all">
          <a href="#">
            <SiInstagram />
          </a>
        </h1>
        <h1 className="m-10 text-2xl hover:text-green-700 transform hover:scale-125 transition-all">
          <a href="#">
            <SiWhatsapp/> 
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
