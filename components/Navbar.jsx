import { SiGithub, SiLinux } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="mb-2 max-w-full mx-10 bg-slate-900 sticky top-0 shadow-lg z-10">
      <nav className="flex items-center justify-between px-10 py-2">
        <div className="">
          <h1 className="text-3xl text-white hover:text-indigo-200 transform hover:scale-125 transition-all">
            {" "}
            <SiLinux />{" "}
          </h1>
        </div>
        <div className="w-2/3">
          <ul className="flex justify-around items-center">
            <li className="text-xl text-white hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Inicio</a>
            </li>
            <li className="text-xl text-white hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Proyectos</a>
            </li>
            <li className="text-xl text-white hover:text-indigo-200 transform hover:scale-125 px-3 py-2 transition-all">
              <a href="">Contactos</a>
            </li>
            <li className="text-xl text-white p-2 hover:text-indigo-200 transform hover:scale-125 transition-all">
              <a
                href="https://www.github.com/jhon192"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
