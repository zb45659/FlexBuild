require('dotenv').config()
const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOverride = require('method-override');

app.use(express.static("public"));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./controllers/usersController.js"));
app.use("/workouts", require("./controllers/workoutsController.js"));
app.use("/auth", require("./controllers/authController.js"));

//HOMEPAGE FROM USER CONTROLLER
app.get('/', (req, res) => {
    res.render('users/index.ejs')
  })
//LOCAL ROUTE
app.listen(process.env.PORT, () => {
    console.log('I am listening');
})