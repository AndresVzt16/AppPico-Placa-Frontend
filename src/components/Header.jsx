import React from 'react'
import Reloj from './Reloj'

const Header = () => {
  return (
    <header className='  bg-gray-100 py-3 px-6'>
        <div className="container flex justify-between items-center">
        <img className='w-1/12 object-cover' src="quito.png" alt="" />
        <h1 className=' text-center text-xl font-bold text-blue-900'>Revisión de Pico y Placa</h1>
        </div>

    </header>
  )
}

export default Header