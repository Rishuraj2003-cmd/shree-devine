import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import { fetchProperties } from "../services/api";
import { motion, AnimatePresence } from "framer-motion";
import SkeletonCard from "../components/SkeletonCard";

const Properties = () => {
  const [data, setData] = useState([]);
  const [params] = useSearchParams();

  const city = params.get("city");
  const type = params.get("type");
  const price = params.get("price");

  useEffect(() => {
    fetchProperties({ city, type, price }).then((res) => {
      setData(res.data);
    });
  }, [city, type, price]);

  return (
    <>
      <Navbar />

      {/* PAGE WRAPPER */}
      <section className="bg-[#08110d] min-h-screen pt-36 pb-20">
        {/* CENTERED CONTAINER */}
        <div className="max-w-7xl mx-auto px-6">
          
          <h1 className="text-4xl font-serif text-white mb-12">
            All Properties
          </h1>

          {data.length === 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[...Array(6)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : (
  <AnimatePresence>
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {data.map((p) => (
        <PropertyCard key={p.id} property={p} />
      ))}
    </motion.div>
  </AnimatePresence>
)}

        </div>
      </section>
    </>
  );
};

export default Properties;
