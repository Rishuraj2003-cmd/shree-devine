const Footer = () => {
    return (
      <footer className="bg-[#0A140F] pt-24 pb-10">
        <div className="max-w-7xl mx-auto px-8">
  
          {/* TOP GRID */}
          <div className="grid md:grid-cols-4 gap-16">
  
            {/* BRAND */}
            <div>
              <h2 className="text-xl font-serif mb-4">
                Shree <span className="text-lime-400">Devine</span>
              </h2>
  
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your trusted partner in finding the perfect property.
                We bring excellence, transparency, and dedication
                to every transaction.
              </p>
  
              {/* SOCIAL ICONS */}
              <div className="flex gap-3">
                {["f", "i", "t", "in"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full
                    bg-[#0f1d16] border border-white/10 text-white/60
                    hover:text-lime-400 hover:border-lime-400 transition cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
  
            {/* COMPANY */}
            <div>
              <h4 className="font-medium mb-5">Company</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="hover:text-lime-400 cursor-pointer">About Us</li>
                <li className="hover:text-lime-400 cursor-pointer">Our Team</li>
                <li className="hover:text-lime-400 cursor-pointer">Careers</li>
                <li className="hover:text-lime-400 cursor-pointer">News & Blog</li>
              </ul>
            </div>
  
            {/* SERVICES */}
            <div>
              <h4 className="font-medium mb-5">Services</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="hover:text-lime-400 cursor-pointer">Buy Property</li>
                <li className="hover:text-lime-400 cursor-pointer">Sell Property</li>
                <li className="hover:text-lime-400 cursor-pointer">Property Management</li>
                <li className="hover:text-lime-400 cursor-pointer">Investment Advisory</li>
              </ul>
            </div>
  
            {/* SUPPORT */}
            <div>
              <h4 className="font-medium mb-5">Support</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="hover:text-lime-400 cursor-pointer">Contact Us</li>
                <li className="hover:text-lime-400 cursor-pointer">FAQs</li>
                <li className="hover:text-lime-400 cursor-pointer">Privacy Policy</li>
                <li className="hover:text-lime-400 cursor-pointer">Terms of Service</li>
              </ul>
            </div>
  
          </div>
  
          {/* DIVIDER */}
          <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
  
            <p>© 2025 Shree Devine. All rights reserved.</p>
  
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 mt-4 md:mt-0 hover:text-lime-400 transition"
            >
              Back to top ↑
            </button>
  
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  