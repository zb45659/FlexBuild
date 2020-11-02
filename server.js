const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOverride = require('method-override');

app.use(express.static("public"));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./controllers/usersController.js"));
app.use("/workouts", require("./controllers/workoutsController.js"));



//LOCAL ROUTE
app.listen(3000, ()=>{
    console.log("I am listening");
});