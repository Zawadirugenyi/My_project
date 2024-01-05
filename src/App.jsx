import "./assets/css/all.css"

import "./assets/css/animate.css"
import "./assets/css/nice-select.css"
import "./assets/css/swiper-bundle.min.css"
import "./assets/css/meanmenu.min.css"
import "./assets/sass/style.css"


import { Preload } from "./Preload"
import Navbar from "./navbar"
import Bunner from "./Bunner"
import Accommodation from "./Accommodation"
import Deluxearea from "./Deluxearea"
export default function App(){

  return (
  
    <>
      <Navbar/>
      <Bunner/>
      <Accommodation/>
      <Deluxearea/>
    </>

  )
 
}

