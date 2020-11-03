const express = require("express");
const router = express.Router();

const User = require("../models").User;

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
  });
  
  // GET LOGIN
  router.get("/login", (req, res) => {
    res.render("users/login.ejs");
  });
  
  // POST LOGIN
  router.post('/login', (req,res) =>{
      User.findOne({
          where: {
              username: req.body.username,
              password: req.body.password,
          },
      }).then((foundUser) => {
          res.redirect(`/users/profile/${foundUser.id}`);
      })
      });
  
  // POST - CREATE NEW USER FROM SIGNUP
  router.post("/", (req, res) => {
    User.create(req.body).then((newUser) => {
      res.redirect("users/profile");
    });
  });
  
module.exports = router;