const express = require('express'); //from documentation: express is function
const app = express();//app is an object

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const users = require('./models/users.js');

//GET HOMEPAGE
app.get('/users', (req, res) => {
    res.render('index.ejs', {
        user: users
    });
});

// //GET SHOW ALL
// app.get('/users/', (req, res) => {
//     res.render('show.ejs');
// });

//GET SHOW USER
app.get('/users/:index', (req, res) => {
    res.render('show.ejs', {
        user: users[req.params.index]
    });
});

//EDIT USER
app.get('/users/:index/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			user: users[req.params.index], 
			index: req.params.index //... and its index in the array
		}
	);
});

//PUT UPDATE USER
app.put('/users/:index', (req, res) => { 
	users[req.params.index] = req.body; 
	res.redirect('/users'); //redirect to the index page
});

//DELETE USER
app.delete('/users/:index', (req, res) => {
	users.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/users');  //redirect back to index route
});

//LOCAL ROUTE
app.listen(3000, ()=>{
    console.log("I am listening");
});