const mongoose = require("mongoose");


const placesSchema = mongoose.Schema({
  _id: {
    type: Number
  },
  product_name: {
    type: String
  },
  color: {
    type: String
  },
  product_qty: {
    type: String
  },
  description: {
    type: String
  },
  seller_name: {
    type: String
  }

});

// onde aponto o cluster
module.exports = mongoose.model("anydata" , placesSchema);
