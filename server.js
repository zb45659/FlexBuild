const express = require('express'); //from documentation: express is function
const app = express();//app is an object

const users = require('./models/users.js');

app.get('/users/', (req, res) => {
    res.render('show.ejs');
});

app.get('/users/:index', (req, res) => {
    res.render('show.ejs', {
        user: users[req.params.index]
    });
});

app.listen(3000, ()=>{
    console.log("I am listening");
});