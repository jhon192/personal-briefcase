import { useState } from "react";
import CenterMenu from "../components/CenterMenu";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="max-h-full">
      <Navbar />
      <CenterMenu />
      <Skills />
      <Projects />
    </div>
  );
}
