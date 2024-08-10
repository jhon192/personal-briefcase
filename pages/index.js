import { Fade } from "react-reveal";
import CenterMenu from "../components/CenterMenu";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ProjectData from "../public/ProjectData.json";

export default function Home() {
  return (
    <div className="max-h-full">
      <Navbar />
      <Fade right big>
        <CenterMenu />
      </Fade>
      <Fade left big>
        <Skills />
      </Fade>
      <Fade right big>
        <Projects ProjectData={ProjectData} />
      </Fade>
      <Fade left big>
        <Contactme />
      </Fade>
      <Footer />
    </div>
  );
}
