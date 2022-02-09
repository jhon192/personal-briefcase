/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Projects = () => {
  return (
    <div className="m-10">
      <div className="grid grid-cols-3">
        <div className="p-10 bg-white">
          <div className="text-center border-2 border-black ">
            <Image
              src="/computer.png"
              width={200}
              height={160}
              alt="card-image"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-700 text-center mt-4 mb-4">Movie Searcher</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad enim eveniet similique, eos excepturi adipisci quidem sed nobis magnam vel.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
