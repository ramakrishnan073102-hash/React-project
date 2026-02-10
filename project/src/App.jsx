import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Collections"
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery"





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/collections" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
