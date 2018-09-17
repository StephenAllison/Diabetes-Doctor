// routes/auth-routes.js
const express = require("express");
const router = express.Router();

// User model
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const bcryptSalt = 10;

const passport = require('passport');


router.get("/signup", (req, res, next) => {
    res.render("userView/signup");
  });
  


  router.post("/signup", (req, res, next) => {
    const organization = req.body.organization;
    const role = req.body.role;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
  
    if (username === "" || password === "") {
      req.flash('error', 'please specify a username and password to sign up')
      res.render("userView/signup", { message: req.flash("error") });
      return;
    }
  
    User.findOne({ username })
    .then(user => {
      if (user !== null) {
        res.render("userView/signup", { message: req.flash("error") });
        return;
      }
  
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
  
      User.create({
          organization: organization,
          role: role,
          name: name,
          username: username,
          password: hashPass
      })
      .then((response)=>{
        res.redirect("/");
      })
      .catch((err)=>{
        res.render("userView/signup", { message: req.flash("error") });
      })
    })
    .catch(error => {
      next(error)
    })
  });


  router.get('/login', (req, res, next)=>{
      res.render('userView/login', {message: req.flash('error')})
  })

  router.post('/login', passport.authenticate('local', {
    successRedirect: "/recruiter",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: true,
    passReqToCallback: true
  }));


  router.get('/logout', (req, res, next)=>{
      req.logout()
    res.redirect('/')
  })




module.exports = router;