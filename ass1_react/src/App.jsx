import { Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import './App.css';
import Portfolio from "./Component/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
