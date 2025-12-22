import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-7xl">
      <nav className="flex items-center justify-between px-10 py-4 rounded-2xl bg-[#17241C]/80 backdrop-blur-xl border border-white/10">

        <h1
          onClick={() => navigate("/")}
          className="text-xl font-serif tracking-wide cursor-pointer"
        >
          Shree <span className="text-[#D0F04B]">Devine</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-sm text-white/70">
          <NavLink to="/" className="hover:text-[#D0F04B]">Home</NavLink>
          <NavLink to="/properties" className="hover:text-[#D0F04B]">Properties</NavLink>
          <NavLink to="/team" className="hover:text-[#D0F04B]">Team</NavLink>
          <NavLink to="/about" className="hover:text-[#D0F04B]">About</NavLink>
        </ul>

        {/* ✅ LET'S TALK (GLOBAL) */}
        <button
          onClick={() =>
            navigate("/", { state: { scrollToContact: true } })
          }
          className="bg-[#D0F04B] text-black px-7 py-2.5 rounded-full text-sm font-medium hover:brightness-110 transition"
        >
          Let's Talk →
        </button>

      </nav>
    </div>
  );
};

export default Navbar;
