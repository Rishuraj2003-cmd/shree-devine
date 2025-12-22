import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#08110d] min-h-screen pt-36 pb-28 text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HERO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              About <span className="text-[#D0F04B]">Shree Devine</span> Pvt. Ltd.
            </h1>

            <p className="mt-8 text-lg text-white/70 leading-relaxed">
              <strong>Shree Devine Pvt. Ltd.</strong> is a trusted real estate
              development company based in Patna, Bihar, focused on delivering
              high-quality residential and commercial properties that combine
              modern design, solid construction, and long-term value.
            </p>

            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We believe buying a property is a life-changing decision. That’s
              why transparency, honesty, and customer satisfaction guide every
              step—from planning and construction to final handover.
            </p>
          </motion.div>

          {/* WHO WE ARE + WHAT WE DO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-12 mt-24"
          >
            <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif mb-4">Who We Are</h2>
              <p className="text-white/70 leading-relaxed">
                We are a professionally managed team of engineers, architects,
                and real estate experts with deep knowledge of the Bihar market.
                Every project reflects our commitment to ethical practices,
                premium workmanship, and timely delivery.
              </p>
            </div>

            <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif mb-4">What We Do</h2>
              <ul className="text-white/70 space-y-3">
                <li>• Residential Apartments</li>
                <li>• Independent Houses & Villas</li>
                <li>• Residential Plots</li>
                <li>• Commercial Shops & Office Spaces</li>
              </ul>
            </div>
          </motion.div>

          {/* WHY CHOOSE US */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <h2 className="text-3xl font-serif mb-10">
              Why Choose <span className="text-[#D0F04B]">Shree Devine</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-2">🤝 Trusted & Transparent</h3>
                  <p className="text-white/70">
                    Clear documentation, honest pricing, and zero hidden charges
                    ensure peace of mind for every buyer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-2">🏗️ Superior Construction Quality</h3>
                  <ul className="text-white/70 space-y-2">
                    <li>• RCC earthquake-resistant structures</li>
                    <li>• Premium-grade construction materials</li>
                    <li>• Multi-stage quality inspections</li>
                    <li>• High future appreciation value</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-serif mb-4">Our Mission</h2>
                <ul className="text-white/70 space-y-3">
                  <li>• Deliver high-quality homes & commercial spaces</li>
                  <li>• Maintain transparency in pricing & documentation</li>
                  <li>• Ensure timely project completion</li>
                  <li>• Create long-term value for buyers & investors</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* AMENITIES + LEGAL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 mt-24"
          >
            <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif mb-4">🏡 Modern Amenities</h2>
              <ul className="text-white/70 space-y-2">
                <li>• Gated community</li>
                <li>• 24×7 water & power supply</li>
                <li>• Power backup</li>
                <li>• Lift facility</li>
                <li>• Covered parking</li>
                <li>• CCTV security</li>
                <li>• Landscaped green areas</li>
                <li>• Children’s play zone & community spaces</li>
              </ul>
            </div>

            <div className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-serif mb-4">📜 Legal Assurance</h2>
              <ul className="text-white/70 space-y-2">
                <li>• Clear land titles</li>
                <li>• Approved building plans</li>
                <li>• RERA-compliant projects (where applicable)</li>
                <li>• Bank loan assistance</li>
              </ul>
            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 bg-[#0f1d16] border border-white/10 rounded-2xl p-10"
          >
            <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
            <p className="text-white/70 leading-relaxed">
              📍 Patna, Bihar <br />
              📧 info@shreedevine.com <br />
              📞 +91-XXXXXXXXXX
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
