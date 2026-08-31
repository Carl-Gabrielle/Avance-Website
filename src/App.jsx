import { useState } from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import TechStack from "./Components/TechStack";
import Work from "./Components/Work";
import Process from "./Components/Process";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="noise min-h-screen overflow-x-hidden bg-[#fafaf8] text-[#111111]">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={closeMenu}
      />

      <main>
        <Hero />
        <About />
        {/* <Services /> */}
         {/* <Process /> */}
         <Work />
        <TechStack />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;