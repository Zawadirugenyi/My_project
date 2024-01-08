


import "./assets/css/bootstrap.min.css"
import "./assets/css/all.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/meanmenu.min.css"
import "./assets/sass/style.css"


import "./assets/js/bootstrap.min.js"
import "./assets/js/swiper-bundle.min.js"
import "./assets/js/isotope.pkgd.min.js"



import { Preload } from "./componets/Preload"
import Navbar from "./componets/Navbar"
import Bunner from "./componets/Bunner"
import Accommodation from "./componets/Accommodation"
import Deluxearea from "./componets/Deluxearea"
import Services from "./componets/Services"
import Testimonial from "./componets/Testimonial"
import Footer from "./componets/Footer"
import Scoll from "./componets/Scroll"
export default function App(){

  return (
  
    <>

      <Navbar/>
      <Bunner/>
      <Preload/>
      <Accommodation/>
      <Deluxearea/>
      <Services/>
      <Testimonial/>
      <Footer/>
      <Scoll/>

    </>

  )
 
}

