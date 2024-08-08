import React, { useState } from 'react'
import Formulario from '../components/Formulario'
import Placa from '../components/Placa'
import { Link } from 'react-router-dom'

const Inicio = () => {
    const[placa,setPlaca] = useState('')
    const[tipo,setTipo] = useState('manual')
  return (
    <>
    
    <div className='mx-auto my-0  gap-10 md:flex flex-wrap justify-between w-full md:h-full '>
     
        <div className='md:w-1/3 h-full px-2 md:p-0'>
            <h2 className='block w-full  text-2xl font-bold text-gray-500 mb-5 '>Realizar Consulta</h2>
            <p className=' text-gray-500 mb-5'>Selecciona el tipo de consulta que deseas realizar.</p>
            <div className=' mb-5 border rounded-lg flex  overflow-hidden justify-between'>
              <button onClick={e=> setTipo('manual')} className={` transition-all text-center w-1/2 text-gray-500 py-2 ${tipo == "manual" ? "bg-blue-600 text-white":"bg-white"}`}>Manual</button>
              <button onClick={e=> setTipo('automatico')} className={`text-center transition-all w-1/2 text-gray-500 py-2 ${tipo == "automatico" ? "bg-blue-600 text-white":"bg-white"}`}>Automatico</button>
              
            </div>

            <p className=' text-gray-500 mb-5'>Ingresa los datos correspondientes para continuar.</p>
            <Formulario placa={placa} setPlaca={setPlaca} tipo={tipo}/>

        </div>
        <div className='md:w-1/2 px-2 md:p-0'>
            <h2 className='block w-full  text-2xl font-bold text-gray-500 mb-5 '>Validación</h2>
            <div className=' flex justify-between'>
              <p className=' text-gray-500 mb-5'>Resultados y vista previa.</p>
              <Link to={'/consultas'} className=' text-blue-500 underline'>Ver consultas recientes</Link>
            </div>

            <Placa placa={placa}/>
        </div>
         
    </div>
        
    </>
    
  )
}

export default Inicio