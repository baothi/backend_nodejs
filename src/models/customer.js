const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

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
  {
    timestamps: true,
    // statics: {
    //   findBybaothi(name) {
    //     return this.find({ name: new RegExp(name, 'i') });
    //   }
    // }
  },
);
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('Customer', customerSchema);


module.exports = Customer;