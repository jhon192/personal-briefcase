/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Projects = ({ ProjectData }) => {
  return (
    <div className="m-10">
      <div className="grid md:grid-cols-3 gap-12 grid-cols-1 ">
        {ProjectData.map((x) => (
          <div className="p-10 bg-black rounded-md" key={x.name}>
            <div className="text-center">
              <img
                src={x.img}
                alt="card-image"
                className="h-48 w-96 transform hover:scale-105 transition-all"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-blue-700 text-center mt-4 mb-4">
                {x.name}
              </h1>
              <p className="text-white">{x.description}</p>
              <div className="mt-7 text-center">
                <a
                  href={
                    x.disponible? x.url : ""
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md p-2 bg-transparent text-white border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition-all"
                >
                  {!x.disponible? "Coming Soon" : "Ir al sitio"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
