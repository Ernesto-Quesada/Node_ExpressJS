const express = require('express');
const app = express();

// Tell Express that we want to use views
// AND that the engine we are using is ejs
app.set('view engine', 'ejs');

// Tell Express that we have static files
// AND that they are located in the public/ folder
app.use(express.static('public'));

// determine pages to visit
//home page of 
app.get('/', (request,response,next) => {
// This shows up in the TERMINAL  
console.log('Home page');

response.render('index.ejs');
});
app.get('/about', (request,res,next) => {
    res.render('about.ejs');
});

app.get('/gallery', (request,res,next) => {
    res.render('gallery.ejs');
});

// lhttp://localhost:3000
app.listen(3000);