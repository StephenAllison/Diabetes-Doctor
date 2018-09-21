const express = require("express");
const router = express.Router();
const client = require("../models/client");

/* GET page to create clients */
// router.get('/client', (req, res, next) => {
//   Client.find()
//   res.render('userView/clientListPage');

router.get("/home", (req, res, next) => {
  console.log('=-=-=-=-=-=-=-=-=-=-=', req.user)
  client
    .find()
    .then(responseFromdataBase => {
      // console.log('=-=-=-=-=-=-=-=-=-', responseFromdataBase)
      res.render("userView/clinicianPage", { theList: responseFromdataBase });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/client", (req, res, next) => {
  client
    .find()
    .then(responseFromdataBase => {
      console.log("=-=-=-=-=-=-=-=-=-", responseFromdataBase);
      res.render("userView/clientListPage", { theList: responseFromdataBase });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/clientDetails/:id", (req, res, next) => {
  const clientID = req.params.id;
  client
    .findById(clientID)

    .then(theClient => {
      console.log(theClient);
      res.render("userView/clientDetails", { client: theClient });
    })
    .catch(err => {
      next(err);
    });
});

router.get("/userView/clientDetails/:clientID", (req, res, next) => {
  res.render("userView/clientEditPage", { theClient: theClient });
});

router.get("/client/edit/:clientID", (req, res, next) => {
  client
    .findById(req.params.clientID)
    .then(theClient => {
      res.render("userView/clientEditPage", { theClient: theClient });
    })
    .catch(err => {
      next(err);
    });
});

// route for creating a new client
router.post('/client/create', (req, res, next) => {
  client.create({
    name: req.body.name,
    image: req.body.image,
    age: req.body.age,
    gender: req.body.gender,
    bloodGlucose: req.body.bloodGlucose,
    insulin: req.body.insulin,
    nextAppointment: req.body.nextAppointment,
    clientNotes: req.body.clientNotes
  })
  .then(response => {
    res.redirect('client')
  })
});

// updating client form
router.get("/client/update/:clientID", (req, res, next) => {
  client
    .findById(req.params.clientID)
    .then(theClient => {
      res.render("userView/clientUpdatePage", { theClient: theClient });
    })
    .catch(err => {
      next(err);
    });
});

router.post('/client/delete', (req, res, next)=>{

    client.findByIdAndRemove(req.body.clientID)
    .then((response)=>{
        res.redirect('/client')
    })
    .catch((err)=>{
        next(err)
    })

})

router.post('/client/deleteAppointment/:id', (req, res, next)=>{

    client.findById(req.params.id)
    .then(theClient =>{
        // update the client by setting next appt to empty
        client.findByIdAndUpdate(theClient.clientID, {
            nextAppointment: ''
        })
        .then((response)=>{
            res.redirect('/home')
        })
        .catch((err)=>{
            next(err)
        }) 
    })
})
 

router.post("/client/update/:clientID", (req, res, next) => {
  client
    .findByIdAndUpdate(req.params.clientID, {
      name: req.body.name,
      image: req.body.image,
      age: req.body.age,
      gender: req.body.gender,
      bloodGlucose: req.body.bloodGlucose,
      insulin: req.body.insulin,
      nextAppointment: req.body.nextAppointment,
      clientNotes: req.body.clientNotes
    })
    .then(response => {
      res.redirect("/clientDetails/" + req.params.clientID);
    })
    .catch(err => {
      next(err);
    });
});
router.get('/client/showCreate', (req, res, next) => {
  res.render('userView/clientListPage')
})


/* POST page to create clients */
router.post("/client/create", (req, res, next) => {
  console.log(req.body);

  client
    .create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      bloodGlucose: req.body.bg,
      insulin: req.body.insulin
    })
    .then(response => {
      res.redirect("/clients");
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
