import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./pages/About";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen relative overflow-hidden">
        {/* Animated gradient ellipses background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Ellipse 1 - Top Right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "700px",
              height: "1000px",
              right: "-200px",
              top: "-300px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.4",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 2 - Top Left */}
          <div
            className="absolute rounded-full"
            style={{
              width: "600px",
              height: "900px",
              left: "-150px",
              top: "100px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.35",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 3 - Center */}
          <div
            className="absolute rounded-full"
            style={{
              width: "650px",
              height: "950px",
              left: "50%",
              top: "600px",
              transform: "translateX(-50%)",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.3",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 4 - Middle Right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "550px",
              height: "850px",
              right: "100px",
              top: "1200px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.35",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 5 - Bottom Left */}
          <div
            className="absolute rounded-full"
            style={{
              width: "680px",
              height: "1050px",
              left: "-100px",
              top: "2000px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.4",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 6 - Bottom Right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "620px",
              height: "980px",
              right: "-150px",
              top: "2800px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.35",
              filter: "blur(150px)",
            }}
          />

          {/* Ellipse 7 - Far Bottom Center */}
          <div
            className="absolute rounded-full"
            style={{
              width: "700px",
              height: "1000px",
              left: "30%",
              top: "3500px",
              background: "linear-gradient(152.64deg, #DD24E1 0%, #5117F4 100%)",
              opacity: "0.3",
              filter: "blur(150px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
