const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        name: 'Michael'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});