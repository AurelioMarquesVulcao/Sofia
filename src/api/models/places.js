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


// {
//   "_id": "1",
//   "product_name": "bolsa",
//   "color": "branca, azul",
//   "product_qty": "5",
//   "description": "bolsa de veludo da louis vuitton",
//   "seller_name": "felipe"
// },