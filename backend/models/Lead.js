const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    interest: String,
    message: String,
    source: String, // contact | book-call
    propertyId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lead", leadSchema);
