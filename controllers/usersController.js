const express = require("express");
const router = express.Router();

const User = require('../models').User;
const Workout = require('../models').Workout;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  User.findByPk(req.params.id, {
    include : [Workout]
  }).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
});
});

// EDIT PROFILE
router.put("/profile/:id", (req, res) => {
  User.update(req.body, {
    where: {
        id: req.body.id,
    },
    returning: true,
}).then((updatedUser) => {
    res.redirect(`/users/profile/${req.params.id}`);
});
});

// DELETE USER
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
        id: req.params.id,
    },
}).then(() => {
    res.redirect('/users');
});
});

module.exports = router;