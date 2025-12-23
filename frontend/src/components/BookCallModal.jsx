import { motion, AnimatePresence } from "framer-motion";

const BookCallModal = ({ open, onClose, property }) => {
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      phone: form.phone.value,
      preferredTime: form.time.value,
      message: form.message.value,
      source: "book-call",
      propertyId: property.id,
      propertyTitle: property.title,
      city: property.city,
    };

    try {
      const res = await fetch("http://localhost:3000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      alert("✅ Call request submitted!");
      onClose();
    } catch (err) {
      console.error("❌ Book Call Error:", err);
      alert("❌ Failed to submit request. Try again.");
    }
  };

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
          <h2 className="text-2xl font-serif mb-2">📞 Book a Call</h2>

          <p className="text-white/60 mb-6 text-sm">
            Regarding: <strong>{property.title}</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            />

            <select
              name="time"
              required
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
            >
              <option value="">Preferred Time</option>
              <option value="Morning" className="bg-[#0f1d16]">Morning</option>
              <option value="Afternoon" className="bg-[#0f1d16]">Afternoon</option>
              <option value="Evening" className="bg-[#0f1d16]">Evening</option>
            </select>

            <textarea
              name="message"
              rows="3"
              defaultValue={`I am interested in ${property.title} located in ${property.city}.`}
              className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 outline-none"
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
