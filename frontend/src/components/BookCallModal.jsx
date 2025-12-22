import { motion, AnimatePresence } from "framer-motion";

const BookCallModal = ({ open, onClose, property }) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0f1d16] border border-white/10 rounded-2xl p-8 w-full max-w-md text-white"
        >
          <h2 className="text-2xl font-serif mb-2">
            📞 Book a Call
          </h2>

          <p className="text-white/60 mb-6 text-sm">
            Regarding: <strong>{property.title}</strong>
          </p>

          <form
  onSubmit={async (e) => {
    e.preventDefault();

    await fetch("http://localhost:/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target[0].value,
        phone: e.target[1].value,
        message: e.target[3].value,
        source: "book-call",
        propertyId: property.id,
      }),
    });

    alert("✅ Call request submitted!");
    onClose();
  }}
  className="space-y-4"
>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            />

            <select
              required
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            >
              <option className="bg-[#0f1d16]">Preferred Time</option>
              <option className="bg-[#0f1d16]">Morning</option>
              <option className="bg-[#0f1d16]">Afternoon</option>
              <option className="bg-[#0f1d16]">Evening</option>
            </select>

            <textarea
              rows="3"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
              defaultValue={`I am interested in ${property.title} located in ${property.city}.`}
            />

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 bg-[#D0F04B] text-black py-2 rounded-full font-medium"
              >
                Submit Request
              </button>

              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-white/20 py-2 rounded-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookCallModal;
