import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchProperty } from "../services/api";
import ImageSlider from "../components/ImageSlider";
import BookCallModal from "../components/BookCallModal";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [openCallModal, setOpenCallModal] = useState(false);

  const PHONE_NUMBER = "918252641911"; // 🔴 Replace with your real number

  useEffect(() => {
    fetchProperty(id)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!property) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#08110d] flex items-center justify-center text-white">
          Loading property...
        </div>
      </>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Shree Devine Team 👋

I am interested in the property:
${property.title}
Location: ${property.city}
Price: ${property.price}

Please contact me with more details.`
  );

  return (
    <>
      <Navbar />

      <div className="bg-[#08110d] min-h-screen pt-32 px-6 text-white">
        
        {/* IMAGE SLIDER */}
        <div className="max-w-6xl mx-auto">
          {property.images && property.images.length > 0 && (
            <ImageSlider images={property.images} />
          )}
        </div>

        {/* DETAILS */}
        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-10">
          
          {/* LEFT */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-serif">
              {property.title}
            </h1>

            <p className="text-white/60 mt-2">
              📍 {property.city} • {property.area}
            </p>

            <p className="mt-6 text-lg leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-[#0f1d16] border border-white/10 rounded-2xl p-6 h-fit">
            <p className="text-2xl font-bold text-[#D0F04B]">
              {property.price}
            </p>

            {/* BOOK A CALL */}
            <button
              onClick={() => setOpenCallModal(true)}
              className="mt-6 w-full bg-[#D0F04B] text-black py-3 rounded-full font-medium hover:scale-[1.02] transition"
            >
              📞 Book a Call
            </button>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center border border-white/20 py-3 rounded-full hover:bg-[#D0F04B] hover:text-black transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* MAP */}
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-2xl font-serif mb-6">
            Location
          </h2>

          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${property.city}&output=embed`}
            className="w-full h-[350px] rounded-2xl border-0"
          />
        </div>
      </div>

      {/* CALL MODAL */}
      <BookCallModal
        open={openCallModal}
        onClose={() => setOpenCallModal(false)}
        property={property}
      />
    </>
  );
};

export default PropertyDetails;
