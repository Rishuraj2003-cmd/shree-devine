const About = () => {
    return (
      <section className="bg-[#0A140F] py-32">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
  
          {/* LEFT CONTENT */}
          <div>
            <p className="text-lime-400 text-xs tracking-widest mb-4">
              ABOUT US
            </p>
  
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Building Dreams,{" "}
              <span className="text-lime-400">Creating Legacies</span>
            </h2>
  
            <p className="mt-6 text-white/65 leading-relaxed max-w-xl">
              Shree Devine is a premier property builder and seller with over
              15 years of excellence in the real estate industry. We specialize
              in creating exceptional living spaces that combine luxury,
              comfort, and modern design.
            </p>
  
            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70">
              {[
                "Premium locations across Patna ",
                "Transparent pricing with no hidden costs",
                "Legal assistance & documentation support",
                "Home loan assistance partnerships",
                "Post-sale customer support",
                "Virtual property tours available",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-lime-400 mt-0.5">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
  
          {/* RIGHT GLASS CARD */}
          <div className="bg-[#0f1d16]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
            <h3 className="font-serif text-2xl mb-10 text-center">
              Why Choose <span className="text-lime-400">Shree Devine</span>?
            </h3>
  
            <div className="space-y-6">
              {[
                { value: "500+", label: "Properties Sold" },
                { value: "2,000+", label: "Happy Clients" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-[#0b120e]/60 border border-white/10 rounded-xl p-5"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-lime-400/10 text-lime-400 text-xl">
                    ★
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default About;
  