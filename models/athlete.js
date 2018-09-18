const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const athleteSchema = new Schema({
  league: String,
  name: String,
  position: String,
  university: String,
  points: String,
  rebounds: String,
  assists: String,
  turnovers: String,
  blocks: String,
  steals: String,
  fieldGoalPercentage: String,
  threePointPercentage: String,
  freeThrowPercentage:String,
});


const Athlete = mongoose.model("Athlete", athleteSchema);


module.exports = Athlete;