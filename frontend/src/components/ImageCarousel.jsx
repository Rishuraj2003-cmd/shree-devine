import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AUTO_DELAY = 4000; // 4 seconds

const ImageCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (paused || images.length <= 1) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_DELAY);

    return resetTimeout;
  }, [index, paused, images.length]);

  if (!images.length) return null;

  return (
    <div
      className="relative w-full h-[420px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* SLIDER */}
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full">
            <img
              src={img}
              alt={`Property ${i + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </div>
        ))}
      </motion.div>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setPaused(true);
              setTimeout(() => setPaused(false), 2000);
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-[#D0F04B] scale-110"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
