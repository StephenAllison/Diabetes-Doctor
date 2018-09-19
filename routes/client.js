const express = require('express');
const router  = express.Router();
const client = require("../models/client");


/* GET page to create clients */
// router.get('/client', (req, res, next) => {
//   Client.find()
//   res.render('userView/clientListPage');



  router.get('/client', (req, res, next) => {
    Client.find()
    .then((responseFromdataBase)=>{
        console.log('=-=-=-=-=-=-=-=-=-', responseFromdataBase) 
        res.render('userView/clientListPage', { theList: responseFromdataBase});
    })
    .catch((err)=>{
        next(err);
    })
});







/* POST page to create clients */
router.post('/client/create', (req, res, next)=>{

    console.log(req.body);

    Client.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        bloodGlucose: req.body.bg,
        insulin: req.body.insulin,
    })
    .then((response)=>{
        res.redirect('/clients')
    })
    .catch((err)=>{
        next(err);
    })

});




module.exports = router;