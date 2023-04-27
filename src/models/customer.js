const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
},
  { timestamps: true },
);

const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;