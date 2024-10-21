"use client"
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Banner from "./components/Baner";
import AppStore from "./components/AppStore";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Opinions from "./components/Opinions"
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100, //The animation will trigger when the element is 100px from the viewport.
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh(); //This is used to refresh AOS settings, especially useful if your DOM dynamically changes or elements are added or removed after the page loads.
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <HeroSection />
      <Services />
      <Banner />
      <AppStore />
      <Opinions />
      <Footer />
    </div>
  );
}

export default App;
