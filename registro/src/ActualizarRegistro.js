import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { urlApi } from './api/backendApi'
function ActualizarRegistro(){

    const params = useParams()

    //Hooks de React
    const[nombre, setNombre]=useState('')
    const[apellido, setApellido]=useState('')
    const[email, setEmail]=useState('')
    const[telefono, setTelefono]=useState('')
    const[ocupacion, setOcupacion]=useState('')

    //Para volver al index
    const navegar = useNavigate()



    useEffect(()=> {
        urlApi.post('obtenerdataregistro', {idregistro: params.idregistro}).then(res => {
            console.log(res.data[0])
            const dataregistro = res.data[0]
            setNombre (dataregistro.nombre)
            setApellido (dataregistro.apellido)
            setEmail (dataregistro.email)
            setTelefono (dataregistro.telefono)
            setOcupacion (dataregistro.ocupacion)
            
        })

    }, [])

    //funcion que actualiza
    function actualizarRegistro(){

        //Nuevo objeto para actualizar el registro
        const actualizarregistro = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono,
            ocupacion: ocupacion,
            idregistro: params.idregistro


        }
        // Hacer la peticion usando axios
        urlApi.post('actualizarregistro', actualizarregistro)
        .then(res => {
            console.log(res.data)
            alert(res.data)
            navegar('/')
        })
            .catch(err => {console.log(err)})
    }
    

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Actualizar Registro</h2>
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

                    <button onClick={actualizarRegistro} className="btn btn-warning">Actualizar Registro</button>

                </div>
            </div>
        </div>
          
    )
}

export default ActualizarRegistro