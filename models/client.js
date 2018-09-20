const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const clientSchema = new Schema({
  name: String,
  image: String,
  age: String,
  gender: String,
  bloodGlucose: String,
  insulin: String,
  nextAppointment: String,
  clientNotes: String,
});


const Client = mongoose.model("Client", clientSchema);


module.exports = Client;