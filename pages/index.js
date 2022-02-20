import CenterMenu from "../components/CenterMenu";
import Contactme from "../components/Contactme";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ProjectData from '../public/ProjectData.json';

export default function Home() {
  


  return (
    <div className="max-h-full">
      <Navbar />
      <CenterMenu />
      <Skills />
      <Projects ProjectData={ProjectData} />
      <Contactme/>  
      <Footer />
    </div>
  );
}
