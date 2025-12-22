import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import FeaturedProperties from "../sections/FeaturedProperties";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const section = document.getElementById("contact");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
