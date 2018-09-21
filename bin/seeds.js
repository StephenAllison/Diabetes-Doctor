const mongoose = require('mongoose');

const Client = require('../models/client');





mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/Doctor')
  .then(() => {


const SuzyFlake = 
{name: "Suzy Flake",
image: "/images/child1.jpg",
age: 4,
gender: "female",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "12:00 PM",
clientNotes: "Client doing Well!"}

const BillyThompson = 
{name: "Billy Thompson",
image:  "/images/child2.jpg",
age: 4,
gender: "male",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "1:00PM",
clientNotes: "Client doing Well!"}

const JennyCraig = 
{name: "Jenny Craig",
image: "/images/child3.jpg",
age: 4,
gender: "male",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "2:00PM",
clientNotes: "Client doing Well!"}

const SandraBosk = 
{name: "Sandra Bosk",
image:  "/images/child4.jpg",
age: 4,
gender: "female",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "3:00PM",
clientNotes: "Client doing Well!"}

const MarcosPalacios = 
{name: "Marcos Palacios",
image: "/images/child5.jpg",
age: 4,
gender: "male",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "4:00PM",
clientNotes: "Client doing Well!"}

const NickCrispino = 
{name: "Nick Crispino",
image:  "/images/child6.jpg",
age: 4,
gender: "male",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "5:00PM",
clientNotes: "Client doing Well!"}

const ManuelMartinez = 
{name: "Manuel Martinez",
image:  "/images/Stewie.jpg",
age: 4,
gender: "male",
bloodGlucose: 121,
insulin: "10:1",
nextAppointmentTime: "6:00PM",
clientNotes: "Client doing Well!"}

        Client.create([SuzyFlake, BillyThompson ,JennyCraig , SandraBosk, MarcosPalacios, NickCrispino, ManuelMartinez ])
        .then((response)=>{
            console.log(response)
            mongoose.connection.close();
        })
        .catch((err)=>{
            console.log(err);
        })

  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });






