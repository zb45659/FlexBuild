require('dotenv').config()
const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOverride = require('method-override');

app.use(express.static("public"));

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));


const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt; // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt
    
    console.log("Cookies: ", req.cookies.jwt);
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if (err || !decodedUser) {
            return res.status(401).json({ error: "Unauthorized Request" });
        }
        req.user = decodedUser; // ADDS A .user PROP TO REQ FOR TOKEN USER
        console.log(decodedUser);
        
        next();
    });
};

app.use("/users", verifyToken, require("./controllers/usersController.js"));
app.use("/workouts", require("./controllers/workoutsController.js"));
app.use("/auth", require("./controllers/authController.js"));
//HOMEPAGE FROM USER CONTROLLER
app.get('/', (req, res) => {
    res.render('users/index2.ejs')
  })
//LOCAL ROUTE
app.listen(process.env.PORT, () => {
    console.log('I am listening');
})