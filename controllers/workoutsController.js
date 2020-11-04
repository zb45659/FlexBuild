const express = require("express");
const router = express.Router();

const User = require('../models').User;
const Workout = require('../models').Workout;
const Favorite = require('../models').Favorite;

router.get("/", (req, res) => {
  Workout.findAll().then((workouts) => {
    res.render("index.ejs", {
      workouts: workouts,
    });
  });
});

//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

router.post("/", (req, res) => {
  Workout.create(req.body).then((newWorkout) => {
    res.redirect("/workouts");
});
});

router.get("/:id", (req, res) => {
  Workout.findByPk(req.params.id, {
    include : [User]
  })
  .then((workout) => {
    res.render("show.ejs", {
      workout: workout,
    });
  });
});

router.get("/:id/edit", function (req, res) {
  Workout.findByPk(req.params.id).then((workout) => {
    res.render("edit.ejs", {
      workout: workout,
    });
  });
});

router.put("/:id", (req, res) => {
  Workout.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((workout) => {
    res.redirect("/workouts");
  });
});

router.delete("/:index", (req, res) => {
  Workout.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/workouts");
  });
});

module.exports = router;