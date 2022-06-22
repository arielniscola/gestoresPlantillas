const express = require('express')
const app = express()
const rutas = require('../routes/index')
const PORT = 8080;
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

app.use('/', rutas)


app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
})
app.on("error", error => console.log(`Error en servidor ${error}`))