import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import MenuSection from "./Components/Menu/MenuSection";
import { Routes, Route } from "react-router-dom";
import Menus from "./Components/Navbar/routePage/Menus";
import About from "./Components/Navbar/routePage/About";
import Hours from "./Components/Navbar/routePage/Hours";
import Reservation from "./Components/Navbar/routePage/Reservation";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={Menus} />
        <Route path="/about" element={About} />
        <Route path="/location" element={Hours} />
        <Route path="/reservation" element={Reservation} />
      </Routes>
      <Hero />
      <Slider />
      <MenuSection />
      <Footer />
    </>
  );
}

export default App;
