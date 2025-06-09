import "./App.scss";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      {/* <AnimatePresence> */}
      <Routes location={location} key={location.key} mode="popLayout">
        {console.log(location)}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
}

export default App;
