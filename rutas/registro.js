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


/*Ruta de prueba
router.get('/test', (req, res) =>{
    res.end('Saludo carga desde ruta ejemplo')

})*/

//agregar registros
router.post('/crearregistro', (req, res) => {
    const crearregistro = new ModeloRegistro({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        ocupacion: req.body.ocupacion,
        idregistro: req.body.idregistro
        })

        crearregistro.save(function(err){
            if(!err){
                res.send('Registro agregado exitosamente!!')
            } else{
                res.send(err)
            }
        })
})

//obtener todos los registros
router.get('/obtenerregistros', (req, res) => {
    ModeloRegistro.find({}, function(docs, err){
        if(!err){
            res.send('Registro agregado exitosamente!!')
        } else{
            res.send(err)
    }
})
})

//obtener data de los registros
router.post('/obtenerdataregistro', (req, res) => {
    ModeloRegistro.find({idregistro:req.body.idregistro}, function(docs, err){
        if(!err){
            res.send('Registro agregado exitosamente!!')
        } else{
            res.send(err)
    }
})
})

//actualizar registros
router.post('/actualizarregistro', (req, res) => {
    
    ModeloRegistro.findOneAndUpdate({idregistro:req.body.idregistro},{
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono,
        ocupacion: req.body.ocupacion
    }, (err) => {
        if(!err){
            res.send('Registro actualizado exitosamente!!')
        } else{
            res.send(err)
        }
    })
})

//eliminar/ desactivar registros
router.post('/eliminarregistro', (req, res) => {
    
    ModeloRegistro.findOneAndDelete({idregistro:req.body.idregistro},(err) => {
        if(!err){
            res.send('Registro eliminado exitosamente!!')
        } else{
            res.send(err)
        }
    
    })
})