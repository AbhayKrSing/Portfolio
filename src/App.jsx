import { BrowserRouter } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import { useState } from "react"

function App() {

    const [togglemode, settogglemode] = useState(false)
  return (
    <>
    <BrowserRouter>
       <Navbar togglemode={togglemode} settogglemode={settogglemode}>
       <HeroSection/>
       </Navbar>
       <div className={togglemode?'hidden':'relative top-16'}>
        Hr Components ko is div ke andar dalna hai
       </div>
    </BrowserRouter>
       
    </>
  )
}

export default App
