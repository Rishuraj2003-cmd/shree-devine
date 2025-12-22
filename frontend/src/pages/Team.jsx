import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
const teamMembers = [
  {
    name: "Rakesh Kumar",
    role: "Founder & Managing Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Building trust through quality construction and ethical real estate practices.",
  },
  {
    name: "Anjali Verma",
    role: "Head of Architecture",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Designing spaces that blend modern aesthetics with functional comfort.",
  },
  {
    name: "Amit Singh",
    role: "Project Manager",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "Ensuring timely delivery and uncompromised construction standards.",
  },
  {
    name: "Neha Sharma",
    role: "Sales & Client Relations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message:
      "Helping families find homes they can truly call their own.",
  },
  {
    name: "Rahul Mishra",
    role: "Legal & Compliance Head",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    message:
      "Guaranteeing transparent documentation and legal peace of mind.",
  },
];

const Team = () => {
  
  return (
  <>
      <Navbar />
    <section className="bg-[#08110d] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#D0F04B] uppercase tracking-widest text-sm">
            Our Team
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">
            People Behind <span className="text-[#D0F04B]">Shree Devine</span>
          </h2>
          <p className="text-white/65 mt-6 text-lg">
            A dedicated team of professionals committed to quality, transparency,
            and long-term value creation.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#0f1d16]/90
                border border-white/10
                rounded-2xl
                overflow-hidden
                group
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    w-full h-64 object-cover
                    grayscale group-hover:grayscale-0
                    scale-105 group-hover:scale-110
                    transition-all duration-700
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-serif text-lg text-white">
                  {member.name}
                </h3>
                <p className="text-[#D0F04B] text-sm mt-1">
                  {member.role}
                </p>

                <p className="text-white/60 text-sm mt-4 leading-relaxed">
                  “{member.message}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
