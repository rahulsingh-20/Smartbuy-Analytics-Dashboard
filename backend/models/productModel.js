const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  invoiceNo: {
    type: String,
    required: [true, "please enter invoice number"],
  },
  stockCode: {
    type: String,
    required: [true, "please enter stock code"],
  },
  name: {
    type: String,
    required: [true, "please enter product description"],
  },
  quantity: {
    type: Number,
    required: [true, "please enter product quantity"],
    maxLength: [8, "Quantity cannot exceed 8 digits"],
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  unitPrice: {
    type: Number,
    required: [true, "please enter unit price"],
  },
  customerId: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    required: [true, "please enter country name"],
  },
});

module.exports = mongoose.model("Product", productSchema);
