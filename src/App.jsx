import React from "react";
import LandingPage from "./components/LandingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about/About.jsx";

const App = () => {
  return (
    <>
      <LandingPage />
      <About />
    </>
  );
};

export default App;
