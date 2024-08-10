import { SiLinux } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="mb-2 max-w-full md:mx-10 m-0 bg-sky-100 sticky top-0 shadow-lg z-10 rounded-b-md">
      <nav className="flex items-center justify-between px-5 py-2">
        <div className="">
          <h1 className="md:text-3xl text-sm text-black hover:text-blue-800 transform hover:scale-125 transition-all">
            {" "}
            <SiLinux />{" "}
          </h1>
        </div>
        <div className="w-2/3">
          <ul className="flex justify-around items-center">
            <li className="md:text-xl text-sm text-black hover:text-blue-800 transform hover:scale-125 p-1 transition-all">
              <a href="#beginning">Home</a>
            </li>
            <li className="md:text-xl text-sm text-black hover:text-blue-800 transform hover:scale-125 p-1 transition-all">
              <a href="#skills">Skills</a>
            </li>
            <li className="md:text-xl text-sm text-black hover:text-blue-800 transform hover:scale-125 p-1 transition-all">
              <a href="#projects">Projects</a>
            </li>
            <li className="md:text-xl text-sm text-black hover:text-blue-800 transform hover:scale-125 p-1 transition-all">
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
