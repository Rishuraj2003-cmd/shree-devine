import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ label, icon, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-5 py-4 rounded-xl
          bg-[#16231c]/80 backdrop-blur-xl
          border border-white/10
          hover:border-[#D0F04B]/60
          transition
        "
      >
        <div className="flex items-center gap-3">
          <span className="text-lg text-[#D0F04B]">{icon}</span>
          <div className="text-left">
            <p className="text-xs text-white/50">{label}</p>
            <p className="font-medium">{value}</p>
          </div>
        </div>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/60"
        >
          ⌄
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          onWheel={(e) => {
            e.stopPropagation(); // 🔥 THIS IS THE KEY
          }}
          className="
            absolute left-0 top-[64px]
            w-full
            bg-[#0f1d16]
            border border-white/10
            rounded-2xl
            z-[9999]
            shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            max-h-[260px]
            overflow-y-auto overscroll-contain

          "
        >
        
            {options.map((item) => (
              <div
                key={item}
                onClick={() => {
                  onChange(item);
                  setOpen(false);
                }}
                className={`
                  px-5 py-3 cursor-pointer transition
                  ${
                    item === value
                      ? "bg-[#D0F04B] text-black font-medium"
                      : "text-white/80 hover:bg-white/5"
                  }
                `}
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
