const express = require("express");
const router = express.Router();

const User = require("../models/User");

/* GET home page */
router.get("/clinician", (req, res, next) => {
  const userId = req.session.passport.user;
  User.findById(userId)
    .then(response => {
      res.render("userView/clinicianPage", { theUser: response });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
