import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Work from "./Components/Work";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import CaseStudy from "./Components/CaseStudy";
import ScrollToTop from "./Components/ScrollToTop";

function Home() {
  return (
    <div className="noise min-h-screen overflow-x-clip bg-[#F7F8FA] text-[#111111]">
      <main>
        <Hero />
        <About />
        {/* <Team /> */}
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />

      {/* ONE Navbar only */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/work/:slug"
          element={<CaseStudy />}
        />
      </Routes>
    </>
  );
}

export default App;