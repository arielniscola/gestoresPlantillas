const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const rutas = require('../routes/index');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use('/', rutas);

app.listen(8080, () => {
    console.log(`Servidor en el puerto: ${PORT}`)
});
app.on("error", error => console.log(`Error en servidor ${error}`))