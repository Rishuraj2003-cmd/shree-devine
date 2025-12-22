const properties = [
    {
      id: "1",
      title: "Luxury Apartment Near Metro",
      price: "₹45 Lakhs",
      city: "Patna",
      area: "1450 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
      ],
      description: "Modern apartment with metro connectivity."
    },
    {
      id: "2",
      title: "Affordable Residential Plot",
      price: "₹18 Lakhs",
      city: "Bihta",
      area: "1200 sq.ft",
      type: "Plot",
      images: [
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471"
      ],
      description: "Clear title plot in developing area."
    },
    {
      id: "3",
      title: "Premium Residential Villa",
      price: "₹55 Lakhs",
      city: "Danapur",
      area: "2600 sq.ft",
      type: "Villa",
      images: [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
      ],
      description: "Ganga view plot."
    },
    {
      id: "4",
      title: "Independent House",
      price: "₹38 Lakhs",
      city: "Hajipur",
      area: "1800 sq.ft",
      type: "House",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
      ],
      description: "Peaceful locality with good road access."
    },
    {
      id: "5",
      title: "Commercial Shop Space",
      price: "₹25 Lakhs",
      city: "Patna",
      area: "600 sq.ft",
      type: "Commercial",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1497366216548-37526070297c",
        "https://images.unsplash.com/photo-1497366216548-37526070297c"
      ],
      description: "Perfect for retail or office use."
    },
    {
      id: "6",
      title: "2 BHK Flat",
      price: "₹32 Lakhs",
      city: "Gaya",
      area: "1100 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
        "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1"
      ],
      description: "Ready-to-move flat with lift."
    },
    {
      id: "7",
      title: "Farm House Property",
      price: "₹75 Lakhs",
      city: "Nalanda",
      area: "5000 sq.ft",
      type: "Farmhouse",
      images: [
        "https://images.unsplash.com/photo-1505842465776-3d90f616310d",
        "https://images.unsplash.com/photo-1505842465776-3d90f616310d",
        "https://images.unsplash.com/photo-1505842465776-3d90f616310d"
      ],
      description: "Green surroundings and peaceful living."
    },
    {
      id: "8",
      title: "Budget Plot",
      price: "₹12 Lakhs",
      city: "Chhapra",
      area: "1000 sq.ft",
      type: "Plot",
      images: [
        "https://images.unsplash.com/photo-1592595896616-c37162298647",
        "https://images.unsplash.com/photo-1592595896616-c37162298647",
        "https://images.unsplash.com/photo-1592595896616-c37162298647"
      ],
      description: "Low-cost investment opportunity."
    },
    {
      id: "9",
      title: "Luxury Penthouse",
      price: "₹95 Lakhs",
      city: "Patna",
      area: "3200 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      ],
      description: "Top-floor penthouse with city view."
    },
    {
      id: "10",
      title: "Residential Duplex",
      price: "₹60 Lakhs",
      city: "Muzaffarpur",
      area: "2400 sq.ft",
      type: "House",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
      ],
      description: "Spacious duplex with parking."
    },
    {
      id: "11",
      title: "Studio Apartment",
      price: "₹22 Lakhs",
      city: "Patna",
      area: "650 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb"
      ],
      description: "Ideal for bachelors or students."
    },
    {
      id: "12",
      title: "Corner Residential Plot",
      price: "₹28 Lakhs",
      city: "Danapur",
      area: "1500 sq.ft",
      type: "Plot",
      images: [
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00"
      ],
      description: "Corner plot with wide road."
    },
    {
      id: "13",
      title: "Fully Furnished Flat",
      price: "₹48 Lakhs",
      city: "Patna",
      area: "1350 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6"
      ],
      description: "Move-in ready furnished flat."
    },
    {
      id: "14",
      title: "Commercial Office Floor",
      price: "₹70 Lakhs",
      city: "Patna",
      area: "2000 sq.ft",
      type: "Commercial",
      images: [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      ],
      description: "Ideal for IT or corporate offices."
    },
    {
      id: "15",
      title: "Small Independent House",
      price: "₹26 Lakhs",
      city: "Arrah",
      area: "950 sq.ft",
      type: "House",
      images: [
        "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "https://images.unsplash.com/photo-1599423300746-b62533397364",
        "https://images.unsplash.com/photo-1599423300746-b62533397364"
      ],
      description: "Perfect for small families."
    },
    {
      id: "16",
      title: "River Facing Villa",
      price: "₹85 Lakhs",
      city: "Bhagalpur",
      area: "3500 sq.ft",
      type: "Villa",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      ],
      description: "Luxury villa with river view."
    },
    {
      id: "17",
      title: "Residential Land",
      price: "₹20 Lakhs",
      city: "Samastipur",
      area: "1400 sq.ft",
      type: "Plot",
      images: [
        "https://images.unsplash.com/photo-1625602812206-5ec545ca1231",
        "https://images.unsplash.com/photo-1625602812206-5ec545ca1231",
        "https://images.unsplash.com/photo-1625602812206-5ec545ca1231"
      ],
      description: "Good location for future growth."
    },
    {
      id: "18",
      title: "3 BHK Apartment",
      price: "₹52 Lakhs",
      city: "Patna",
      area: "1750 sq.ft",
      type: "Apartment",
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
      ],
      description: "Spacious 3 BHK with balcony."
    },
    {
      id: "19",
      title: "Highway Touch Plot",
      price: "₹35 Lakhs",
      city: "Motihari",
      area: "2000 sq.ft",
      type: "Plot",
      images: [
        "https://images.unsplash.com/photo-1590402494610-2c378a9114c6",
        "https://images.unsplash.com/photo-1590402494610-2c378a9114c6",
        "https://images.unsplash.com/photo-1590402494610-2c378a9114c6"
      ],
      description: "Best for commercial or residential use."
    },
    {
      id: "20",
      title: "Luxury Bungalow",
      price: "₹1.2 Crore",
      city: "Patna",
      area: "4200 sq.ft",
      type: "Villa",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
      ],
      description: "Premium bungalow with garden."
    }
  ];


  const getProperties = (req, res) => {
    const { city, type, price } = req.query;
  
    let result = properties;
  
    // ✅ CITY FILTER
    if (city && city !== "All Cities") {
      result = result.filter(
        p => p.city.toLowerCase() === city.toLowerCase()
      );
    }
  
    // ✅ TYPE FILTER
    if (type && type !== "All Types") {
      result = result.filter(
        p => p.type.toLowerCase() === type.toLowerCase()
      );
    }
  
    // (Price filter later – when numeric price is added)
  
    res.json(result);
  };
  
  const getPropertyById = (req, res) => {
    const property = properties.find(p => p.id === req.params.id);
    res.json(property);
  };
  
  module.exports = { getProperties, getPropertyById };