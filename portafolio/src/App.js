import React from "react";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/proyects" exact>
          <Proyects />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
