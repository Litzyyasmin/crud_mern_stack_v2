import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import ActualizarRegistro from '../ActualizarRegistro'
import CrearRegistro from '../CrearRegistro'
import Grafica from '../Grafica'
import ListaRegistros from '../ListaRegistros'

export const Approuters = () => {
    return(

<Routes>
    
<Route path='/' element={<ListaRegistros />} />
<Route path='/CrearRegistro' element={<CrearRegistro />} />
<Route path='/ActualizarRegistro/:idregistro' element={<ActualizarRegistro />} />
<Route path='/grafica' element={<Grafica />} />       
{/* Redireccionar a la pagina de inicio si no se encuentra la ruta */}
<Route path='*' element={<Navigate to="/" />} />
</Routes>
)
}