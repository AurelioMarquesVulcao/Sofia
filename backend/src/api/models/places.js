const mongoose = require("mongoose");


const placesSchema = mongoose.Schema({
  country: {
    type: String
  },
  cases: {
    type: String
  },
  death: {
    type: String
  },
  date: {
    type: String
  }
});

// onde aponto o cluster

module.exports = mongoose.model("anydata" , placesSchema);
