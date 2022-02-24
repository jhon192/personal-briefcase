import { SiGithub, SiLinux } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="mb-2 max-w-full mx-10 bg-sky-200 sticky top-0 shadow-lg z-10 rounded-b-md">
      <nav className="flex items-center justify-between px-10 py-2">
        <div className="">
          <h1 className="text-3xl text-black hover:text-indigo-200 transform hover:scale-125 transition-all">
            {" "}
            <SiLinux />{" "}
          </h1>
        </div>
        <div className="w-2/3">
          <ul className="flex justify-around items-center">
            <li className="text-xl text-black hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Inicio</a>
            </li>
            <li className="text-xl text-black hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Proyectos</a>
            </li>
            <li className="text-xl text-black hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Contactos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
