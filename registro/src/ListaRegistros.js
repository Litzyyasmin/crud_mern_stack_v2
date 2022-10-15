import React, {useContext} from 'react'
import { RegistroContext } from './context/RegistroContext'
import RegistroIndividual from './RegistroIndividual'
function ListaRegistros(){

    const {dataregistros} = useContext(RegistroContext);

    console.log(dataregistros);

    return(
        <div className="text-center">
            <h2 className='py-5'>Lista de Registros</h2>
            {/*Mapear lista de registros en objeto usuario */}
{            dataregistros?.map((registro) => (
                <RegistroIndividual key={registro._id} registro={registro}/>
            ))}
        </div>
    )
}
    
export default ListaRegistros