import React, { useEffect, useState } from 'react'
import { urlApi } from '../api/backendApi'
import { RegistroContext } from './RegistroContext'

export const RegistroProvider = ({children}) => {
    
    const[dataregistros, setdataregistro]=useState([])

    useEffect(() => {
        urlApi.get('/obtenerregistros').then(res => {
            setdataregistro(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
<RegistroContext.Provider value={{
    dataregistros,
}}>
        {children}
        </RegistroContext.Provider>
  )
}
