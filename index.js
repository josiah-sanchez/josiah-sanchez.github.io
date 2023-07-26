const express = require('express');
const fetch = require('node-fetch');
const app = express();
const http = require('http');
const hostname = 'localhost';
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('server started');
})
