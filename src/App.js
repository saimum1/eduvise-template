import React from "react";
import About from "./components/About";
import AboutUs from "./components/AboutUs";
import Advertisement from "./components/Advertisement";

import Event from "./components/Event";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


import Navbar from "./components/Navbar";
import Service from "./components/Service";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <Advertisement />
      <Service />
      <Event />
      <About />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
