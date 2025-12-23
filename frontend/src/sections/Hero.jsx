import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { motion } from "framer-motion";
import Dropdown from "../components/Dropdown";
import heroBg from "../assets/download.jpeg";

const Hero = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [price, setPrice] = useState("Any Price");
  
  // 🔍 SEARCH BUTTON CLICK
  const handleSearch = () => {
    navigate(
      `/properties?city=${city}&type=${type}&price=${price}`
    );
  };

  // 🔘 SUGGESTION CLICK
  const handleSuggestionClick = (selectedType) => {
    navigate(`/properties?type=${selectedType}`);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury property"
          className="w-full h-full object-cover"
        />
        {/* Primary dark green overlay */}
        <div className="absolute inset-0 bg-[#08110d]/70" />

        {/* Soft vignette from edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

        {/* Side fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-44 pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-serif text-[56px] md:text-[72px] leading-[1.1] max-w-3xl"
        >
          Let us find a place <br />
          you can <span className="text-[#D0F04B] ">call home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 max-w-xl text-white/70 text-lg"
        >
          Discover premium properties crafted with excellence. Experience luxury
          living designed for comfort, elegance, and long-term value.
        </motion.p>

        {/* Search Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="
                    mt-14
                    bg-[#0b1712]/85
                    backdrop-blur-xl
                    border border-[#D0F04B]/10
                    rounded-[20px]
                    px-6 py-4
                    max-w-4xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                    "
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <Dropdown
            placeholder="All cities"
              label="Location"
              icon="📍"
              value={city}
              onChange={setCity}
              options={["All Cities","Patna",
  "Bihta",
  "Danapur",
  "Hajipur",
  "Gaya",
  "Nalanda",
  "Chhapra",
  "Muzaffarpur",
  "Arrah",
  "Bhagalpur",
  "Samastipur",
  "Motihari"]}
            />

            <Dropdown
              label="Property Type"
              icon="🏠"
              value={type}
              onChange={setType}
              options={["All Types",
                "Apartment",
                "Plot",
                "Villa",
                "Duplex",
                "Farmhouse",
                "Commercial",
              ]}
            />

            <Dropdown
              label="Price Range"
              icon="₹"
              value={price}
              onChange={setPrice}
              options={[
                "Any Price",
                "Under ₹2 Cr",
                "₹2–5 Cr",
                "₹5–10 Cr",
                "Above ₹10 Cr",
              ]}
            />

            <button
              onClick={handleSearch}
              className="h-[56px] bg-[#D0F04B] text-black rounded-full font-medium neon-pulse"
            >
              🔍 Search
            </button>
          </div>
        </motion.div>
      </div>

      {/* SUGGESTIONS */}
      <div className="mt-6 flex gap-3 flex-wrap text-sm text-white/70">
          {["Apartment", "Duplex", "Mansion", "Commercial", "Villa"].map(
            (item) => (
              <button
                key={item}
                onClick={() => handleSuggestionClick(item)}
                className="px-5 py-1.5 border border-white/20 rounded-full hover:bg-[#D0F04B] hover:text-black transition"
              >
                {item}
              </button>
            )
          )}
        </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-white/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#D0F04B]"
          />
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
