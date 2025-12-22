import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProperties } from "../services/api";
import PropertyCard from "../components/PropertyCard";
import { motion } from "framer-motion";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties().then((res) => {
      setProperties(res.data.slice(0, 3)); // 🔥 ONLY 3
    });
  }, []);

  return (
    <section className="bg-[#08110d] py-32 px-10">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-serif text-white text-center mb-16"
      >
        Featured Properties
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {properties.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <PropertyCard property={p} />
          </motion.div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => navigate("/properties")}
          className="px-10 py-3 rounded-full border border-white/20 text-white
                     hover:bg-[#D0F04B] hover:text-black transition"
        >
          View All Properties →
        </button>
      </div>
    </section>
  );
};

export default FeaturedProperties;
