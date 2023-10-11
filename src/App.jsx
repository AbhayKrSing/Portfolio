import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { useState } from "react";
import { blackgradient } from "./Style";

function App() {
  const [togglemode, settogglemode] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar togglemode={togglemode} settogglemode={settogglemode}>
          <HeroSection />
        </Navbar>
        <div
          className={togglemode ? "hidden" : `relative top-16 ${blackgradient}`}
        ></div>
      </BrowserRouter>
    </>
  );
}

export default App;
