const express = require('express')
var cors = require('cors');
const app = express()

//Importe la conexion a MongoDB
const archivoDB = require('./conexion')

//configuracion de cors
app.use(cors())

//Importacion del modelo registro y del archivo de las rutas
const rutaregistro = require('./rutas/registro')

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/api/registro', rutaregistro)


app.get('/', (req, res) => {
    res.end('Bienvenido al servidor Backend Node.js. El servidor esta corriendo. . .')
})

//Configurar nuestro servidor basico
app.listen(5000, function(){
    console.log('¡El servidor NODE de Litzy esta corriendo con exito!')
})