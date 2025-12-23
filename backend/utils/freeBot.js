const freeBotReply = (message) => {
  const text = message.toLowerCase();

  if (text.includes("hi") || text.includes("hello")) {
    return "👋 Hello! Welcome to Shree Devine. How can I help you today?";
  }

  if (text.includes("buy") || text.includes("purchase")) {
    return "🏡 Sure! Are you looking for a Villa, Apartment, Plot, or Commercial property?";
  }

  if (text.includes("villa")) {
    return "🏠 We have premium villas available in Patna, Danapur, and Bhagalpur.";
  }

  if (text.includes("plot")) {
    return "📍 We offer residential plots in Patna, Chhapra, Nalanda, and nearby areas.";
  }

  if (text.includes("price") || text.includes("cost")) {
    return "💰 Property prices start from ₹12 Lakhs. Please tell your budget for better suggestions.";
  }

  if (text.includes("location") || text.includes("city")) {
    return "📍 Our properties are available in Patna, Danapur, Gaya, Muzaffarpur, and more.";
  }

  if (text.includes("contact") || text.includes("call") || text.includes("phone")) {
    return "📞 You can contact us directly via WhatsApp or fill the contact form on our website.";
  }

  if (text.includes("visit") || text.includes("site")) {
    return "🚗 Site visits are available. Please share your phone number to schedule a visit.";
  }

  if (text.includes("thank")) {
    return "😊 You're welcome! Feel free to ask anything.";
  }

  // DEFAULT REPLY
  return "🤖 I can help you with properties, prices, locations, or site visits. Please ask!";
};

module.exports = freeBotReply;
