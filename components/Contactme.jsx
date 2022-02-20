/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ImUserTie } from "react-icons/im";

const Contactme = () => {
  return (
    <div className="m-10">
      <div className="max-w-full rounded-xl shadow-2xl bg-white">
        <div className="flex justify-around items-center">
          <div>
            <h1 className="md:text-7xl text-3xl text-violet-400">
              <ImUserTie />
            </h1>
          </div>
          <div className="w-2/6 p-10">
            <div className="p-10 bg-black rounded-md" key="x.name">
              <div className="text-center">
                <img
                  src="/index.jpg"
                  alt="card-image"
                  className="object-scale-down h-48 w-96"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-700 text-center mt-4 mb-4">
                  Jhon E. Garcia Mar.
                </h1>
                <p className="text-white whitespace-pre-wrap">
                  Soy un desarrollador web especializandome en el Frontend,
                  tengo conocimientos con Html, Css Javascript, Typescript,
                  Nodejs, Php{" "}
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
