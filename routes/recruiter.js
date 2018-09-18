const express = require('express');
const router  = express.Router();

const User = require("../models/User");


/* GET home page */
router.get('/recruiter', (req, res, next) => {
  res.render('userView/recruiterPage'),{};
});

module.exports = router;