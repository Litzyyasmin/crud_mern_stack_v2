const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaregistro = new eschema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String,
    ocupacion: String,
    idregistro: String

})

const ModeloRegistro = mongoose.model('registros', eschemaregistro)
module.exports = router

router.get('/Test', (req, res) =>{
    res.end('Saludo carga desde ruta ejemplo')

})