import { useState } from "react";
import { createLead } from "../services/api";

const Contact = () => {
  const PHONE_NUMBER = "917546857119"; // 👈 replace with your WhatsApp number

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 1️⃣ Send to backend
   await createLead({
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: form.name,
    phone: form.phone,
    email: form.email,
    interest: form.interest,
    message: form.message,
    source: "contact",
  }),
});

  
    // 2️⃣ Open WhatsApp (optional but good)
    const whatsappMessage = encodeURIComponent(
      `Hello Shree Devine Team 👋
  
  Name: ${form.name}
  Phone: ${form.phone}
  Email: ${form.email}
  
  Interest: ${form.interest}
  
  Message:
  ${form.message}`
    );
  
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`,
      "_blank"
    );
  
    // 3️⃣ Reset form
    setForm({
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });
  
    alert("✅ Message sent successfully!");
  };
  

  return (
    <section id="contact" className="bg-[#070D0B] py-32">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-lime-400 text-xs tracking-widest mb-4">
            GET IN TOUCH
          </p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Ready to Find Your <span className="text-lime-400">Dream Home</span>
            ?
          </h2>

          <p className="mt-6 text-white/65 max-w-xl leading-relaxed">
            Let's discuss your property needs. Whether you're buying, selling,
            or investing, our expert team is here to guide you every step of the
            way.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4 bg-[#0f1d16]/80 border border-white/10 rounded-xl p-5">
              <span className="text-lime-400 text-xl">📞</span>
              <div>
                <p className="text-sm text-white/50">Phone</p>
                <p className="font-medium">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f1d16]/80 border border-white/10 rounded-xl p-5">
              <span className="text-lime-400 text-xl">✉️</span>
              <div>
                <p className="text-sm text-white/50">Email</p>
                <p className="font-medium">info@shreedevine.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0f1d16]/80 border border-white/10 rounded-xl p-5">
              <span className="text-lime-400 text-xl">📍</span>
              <div>
                <p className="text-sm text-white/50">Office</p>
                <p className="font-medium">Patna, Bihar</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0f1d16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
          <h3 className="font-serif text-2xl mb-8">Send us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="bg-[#0b120e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-lime-400"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="text"
                placeholder="Phone Number"
                required
                className="bg-[#0b120e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-lime-400"
              />
            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0b120e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-lime-400"
            />

            <input
              name="interest"
              value={form.interest}
              onChange={handleChange}
              type="text"
              placeholder="Property Interest (e.g. 3 BHK in Patna)"
              className="w-full bg-[#0b120e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-lime-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your requirements..."
              className="w-full bg-[#0b120e] border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-lime-400"
            />

            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-4 rounded-full font-medium hover:brightness-110 transition flex items-center justify-center gap-2"
            >
              ✈️ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
