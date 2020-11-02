const express = require("express");
const router = express.Router();

const workouts = require("../models/workouts.js");

router.get("/", (req, res) => {
  res.render("index.ejs", {
    workouts: workouts,
  });
});

//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.post("/", (req, res) => {
  workouts.push(req.body);
  res.redirect("/workouts");
});

router.get("/:index", (req, res) => {
  res.render("show.ejs", { workout: workouts[req.params.index] });
});

router.get("/:index/edit", function (req, res) {
  res.render(
    "edit.ejs", //render views/edit.ejs
    {
      //pass in an object that contains
      workout: workouts[req.params.index],
      index: req.params.index, //... and its index in the array
    }
  );
});

router.put("/:index", (req, res) => {
  workouts[req.params.index] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
  res.redirect("/workouts"); //redirect to the index page
});

router.delete("/:index", (req, res) => {
  workouts.splice(req.params.index, 1); //remove the item from the array
  res.redirect("/workouts"); //redirect back to index route
});

module.exports = router;