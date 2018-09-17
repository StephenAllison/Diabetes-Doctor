const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/recruiter', (req, res, next) => {
  res.render('userView/recruiterPage');
});

module.exports = router;