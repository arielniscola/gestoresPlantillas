const express = require('express');
const app = express();
const PORT = 8080;
const rutas = require('../routes/index');
const {engine} = require('express-handlebars');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine ({
    extname: 'hbs',
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    partialsDir: path.join(__dirname, '../views/partials')
}))

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use('/', rutas);

app.listen(8080, () => {
    console.log(`Servidor en el puerto: ${PORT}`)
});
app.on("error", error => console.log(`Error en servidor ${error}`))