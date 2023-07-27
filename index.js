const express = require('express');
const fetch = require('node-fetch');
const app = express();
const http = require('http');
//const hostname = 'localhost';
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/coursework', (req, res) => {
    res.render('coursework');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.listen(3000, () => {
    console.log('server started');
})
