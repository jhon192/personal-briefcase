import Image from "next/image";
import { AiFillProject } from "react-icons/ai";

const Projects = ({ ProjectData }) => {
  return (
    <div className="m-10 bg-blue-special p-5 rounded-xl shadow-2xl" id="projects">
      <div className="m-4">
        <h1 className="flex justify-center">
          {" "}
          <AiFillProject className="md:text-5xl text-2xl text-center" />{" "}
        </h1>
        <h1 className="md:mx-10 mx-2 md:text-5xl text-2xl text-center ">Projects</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-12 grid-cols-1 ">
        {ProjectData.map((x) => (
          <div
            className={
              x.disponible
                ? "p-10 bg-black rounded-md"
                : "p-10 bg-black rounded-md opacity-70"
            }
            key={x.name}
          >
            <div className="text-center">
              <Image
                src={x.img}
                alt="card-image"
                width={270}
                height={200}
                className="h-48 w-96 transform hover:scale-105 transition-all"
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-blue-700 text-center mt-4 mb-4">
                {x.name}
              </h1>
              <p className="text-white whitespace-pre-wrap">{x.description}</p>
              <div className="mt-7 text-center">
                <a
                  href={x.disponible ? x.url : ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md p-2 bg-transparent text-white border-2 border-blue-500 hover:bg-blue-500 hover:text-black transition-all"
                >
                  {!x.disponible ? "it's a private site" : "go to the site"}
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
