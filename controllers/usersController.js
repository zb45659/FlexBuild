const express = require("express");
const router = express.Router();

const User = require('../models').User;
const Workout = require('../models').Workout;
const Favorite = require('../models').Favorite;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  // IF USER ID FROM TOKEN MATCHES THE REQUESTED ENDPOINT, LET THEM IN
  if (req.user.id == req.params.id) {
    User.findByPk(req.params.id, {
      include: [
        {
          model: Workout,
          attributes: ["id", "type"],
        },
      ],
    }).then((userProfile) => {
      res.render("users/profile.ejs", {
        user: userProfile,
      });
    });
  } else {
    // res.json("unauthorized");
    res.redirect("/");
  }
});

// GET EDIT PROFILE
router.get("/profile/:id/userEdit", (req,res) => {
  User.findByPk(req.params.id).then((foundUser) => {
    res.render("users/userEdit.ejs", {
      user: foundUser
    });
  });
});
// PUT EDIT PROFILE
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