import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"

function App() {

  return (
    <>
    <BrowserRouter>
       <Navbar/>
       <HeroSection/>
    </BrowserRouter>
       
    </>
  )
}

export default App
