import React from "react";
import "./comp.css";

import Header from "./Header";
import Home from "./Home";
import Hero from "./Hero";
import Services from "./Services";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Component() {
  return (
    <div>
      <div  >
        <Header />

        <Home />
        <Hero />

        <Services />

        <Reviews />

        <Footer />
      </div>
    </div>
  );
}

export default Component;
