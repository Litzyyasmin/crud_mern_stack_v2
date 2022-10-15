import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import swal from 'sweetalert2'
import { urlApi } from './api/backendApi'

function CrearRegistro(){

    //Hooks de React
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')
    const[ocupacion, setOcupacion]=useState('')
    
    function crearRegistro(){

        const registro = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                ocupacion: ocupacion,
                idregistro: uniquid()

        }

        urlApi.post('/crearregistro', registro)
        .then(res => {
            //alert(res.data)
            swal.fire('¡CORRECTO!', 'EL REGISTRO SE CREO DE MANERA EXITOSA')
        })
        .catch(err => {console.log(err)})
    
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo registro</h2>
        </div>
        
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={apellido} onChange={(e) => {setApellido(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Eléctronico</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="ocupacion" className="form-label">Ocupación</label>
                    <select className="form-select" value={ocupacion} onChange={(e) => {setOcupacion(e.target.value)}}>
                        <option value="">Seleccione una opción</option>
                        <option value="Empleado">Empleado</option>
                        <option value="Estudiante">Estudiante</option>
                        <option value="Desempleado">Desempleado</option>
                        <option value="Otro">Otro</option>
                    </select>
                    </div>

                    <button onClick={crearRegistro} className="btn btn-info">Guardar Registro</button>
                    
                </div>
            </div>
        </div>
    )
}

export default CrearRegistro