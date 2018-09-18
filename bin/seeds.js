const mongoose = require('mongoose');

const Athelte = require('../models/athlete');





mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/2019nbadraft')
  .then(() => {


const StephenAllison = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenAlliso = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenAllis = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenAlli = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenAll = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenAl = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const StephenA = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const Stephen = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}

const Stephe = 
{name: "Stephen Allison", 
league: "NCAA",
position: "Guard",
university:"University of Florida",
points: 26,
rebounds:3,
assists: 6,
turnovers: 3,
blocks: 1.5,
steals: 2,
fieldGoalPercentage: 45,
threePointPercentage: 40,
freeThrowPercentage: 80,}


        Athelte.create([Stephe, Stephen, StephenA,])
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






