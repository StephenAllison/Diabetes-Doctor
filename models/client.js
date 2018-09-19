const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const clientSchema = new Schema({
  name: String,
  age: String,
  gender: String,
  bloodGlucose: String,
  insulin: String,
});


const Client = mongoose.model("Client", clientSchema);


module.exports = Client;