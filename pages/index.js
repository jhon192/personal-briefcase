import { useState } from "react";
import CenterMenu from "../components/CenterMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  const [ProjectData, setProjectData] = useState([
    {
      name: "Movie Searcher",
      url: "https://moviesearcherreactapp.netlify.app/",
      description:
        "Es una app web creada en Reactjs con puro Css obteniendo datos de una api de peliculas donde podemos encontrar espeficicaciones de pelicula y caracteristicas sin importar el tiempo de salida de la pelicula",
      img: "/cap1.png",
      disponible: true
    },
    {
      name: "Weather Location",
      url: "https://weatherlocationapp.netlify.app/",
      description:
        "Es una app web creada en Reactjs con bootstrap obteniendo datos de una api de una api del clima donde podemos ver datos como el viento, clima de hoy, etc.",
      img: "/cap3.png",
      disponible: true
    },
    {
      name: "React Translate",
      url: "Coming Soon",
      description:
        "Es una app web creada en Reactjs con puro Css obteniendo datos de una api de peliculas donde podemos encontrar espeficicaciones de pelicula y caracteristicas sin importar el tiempo de salida de la pelicula",
      img: "/cap2.png",
      disponible: false
    },
    {
      name: "Rick and Morty random",
      url: "Coming Soon",
      description:
        "Es una app web creada en Reactjs con bootstrap obteniendo datos de una api de una api del clima donde podemos ver datos como el viento, clima de hoy, etc.",
      img: "/cap4.png",
      disponible: false
    },
  ]);

  return (
    <div className="max-h-full">
      <Navbar />
      <CenterMenu />
      <Skills />
      <Projects ProjectData={ProjectData} />
      <Footer />
    </div>
  );
}
