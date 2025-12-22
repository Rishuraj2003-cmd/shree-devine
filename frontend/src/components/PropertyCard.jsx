import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  if (!property) return null;

  const coverImage =
    property.images && property.images.length > 0
      ? property.images[0]
      : "https://via.placeholder.com/400";

  return (
    <div
      onClick={() => navigate(`/properties/${property.id}`)}
      className="bg-[#0f1d16]/90 border border-white/10 rounded-2xl overflow-hidden shadow-lg
                 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-500 cursor-pointer"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={coverImage}
          alt={property.title}
          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-[#D0F04B] text-black text-xs px-3 py-1 rounded-full">
          {property.type}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-white">
        <h3 className="font-serif text-lg">{property.title}</h3>

        <p className="text-sm text-white/60 mt-1">
          📍 {property.city}
        </p>

        <p className="mt-3 text-[#D0F04B] font-semibold">
          {property.price}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/properties/${property.id}`);
          }}
          className="mt-5 w-full border border-white/20 py-2 rounded-full text-sm
                     hover:bg-[#D0F04B] hover:text-black transition"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
