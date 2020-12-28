import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Home id="home" />
      <Proyects id="proyects" />
      <Skills id="skills" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
