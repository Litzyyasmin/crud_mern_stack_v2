import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { urlApi } from './api/backendApi'


function RegistroIndividual({ registro }) {
    const navegar = useNavigate()

    //Para animacion de scroll al bajar
    useEffect(() => {
        AOS.init()
    }, [])

    //Funcion para eliminar/ desactivar el usuario
    function eliminarregistro(idregistro) {
        urlApi.post('/eliminarregistro', { idregistro: idregistro }).then(res => {
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="fade-up-left">
                    <ul className="list-group">
                        <li className="list-group-item">{registro.idregistro}</li>
                        <li className="list-group-item">{registro.nombre}</li>
                        <li className="list-group-item">{registro.apellido}</li>
                        <li className="list-group-item">{registro.email}</li>
                        <li className="list-group-item">{registro.telefono}</li>
                        <li className="list-group-item">{registro.ocupacion}</li>
                    </ul>
                    <div className='my-3 gap-2 d-flex justify-content-center'>
                        <Link to={`/actualizarregistro/${registro.idregistro}`}><li className="btn btn-primary">Actualizar</li></Link>
                        <button className="btn btn-danger" onClick={() => { eliminarregistro(registro.idregistro) }}>Eliminar/Desactivar</button>
                    </div>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default RegistroIndividual