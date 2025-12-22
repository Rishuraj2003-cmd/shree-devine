const Lead = require("../models/Lead");
const sendEmail = require("../utils/sendEmail");

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    // 📧 SEND EMAIL
    await sendEmail(lead);

    console.log("✅ Lead saved & email sent");

    res.status(201).json({
      success: true,
      message: "Lead stored & email sent",
    });
  } catch (err) {
    console.error("❌ Lead Error:", err);
    res.status(500).json({ success: false });
  }
};
