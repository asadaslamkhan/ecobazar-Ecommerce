import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts"
import AOS from "aos";
import "aos/dist/aos.css"
import Banner from "./components/Banner/Banner";



function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
    </div>
  )
}


export default App
