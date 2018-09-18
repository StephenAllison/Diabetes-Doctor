const express = require('express');
const router  = express.Router();
const Athlete = require("../models/Athlete");


/* GET page to create athletes */
// router.get('/athlete', (req, res, next) => {
//   Athlete.find()
//   res.render('userView/athleteListPage');



  router.get('/athlete', (req, res, next) => {
    Athlete.find()
    .then((responseFromdataBase)=>{
        console.log('=-=-=-=-=-=-=-=-=-', responseFromdataBase) 
        res.render('userView/athleteListPage', { theList: responseFromdataBase});
    })
    .catch((err)=>{
        next(err);
    })
});







/* POST page to create athletes */
router.post('/athletes/create', (req, res, next)=>{

    console.log(req.body);

    Athlete.create({
        league: req.body.league,
        name: req.body.name,
        position: req.body.position,
        university: req.body.university,
        points: req.body.points,
        rebounds: req.body.rebounds,
        assists: req.body.assists,
        turnovers: req.body.turnovers,
        blocks: req.body.blocks,
        steals: req.body.steals,
        fieldGoalPercentage: req.body.fieldGoalPercentage,
        threePointPercentage: req.body.threePointPercentage,
        freeThrowPercentage: req.body.freeThrowPercentage,
    })
    .then((response)=>{
        res.redirect('/athletes')
    })
    .catch((err)=>{
        next(err);
    })

});




module.exports = router;