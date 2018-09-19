const mongoose = require('mongoose');

const Client = require('../models/client');





mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/Doctor')
  .then(() => {


const SuzyFlake = 
{name: "Suzy Flake",
age: 4,
gender: Female,
bloodGlucose: 121,
insulin: "10:1",}

const BillyThompson = 
{name: "Billy Thompson", 
age: 4,
gender: Female,
bloodGlucose: 121,
insulin: "10:1",}

const JennyCraig = 
{name: "Jenny Craig", 
age: 4,
gender: Female,
bloodGlucose: 121,
insulin: "10:1",}

        Client.create([SuzyFlake, BillyThompson ,JennyCraig ,])
        .then((response)=>{
            console.log(response)
            mongoose.connection.close();


    




        })
        .catch((err)=>{
            console.log(err)
        })

  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });






