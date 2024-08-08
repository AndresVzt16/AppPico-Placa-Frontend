import React, { useEffect, useState } from 'react';
import clienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';
const Consultas = () => {
    const [registros, setRegistros] = useState([]);

    useEffect(() => {
        cargarConsultas();
    }, []);

    const cargarConsultas = async () => {
        const { data } = await clienteAxios('api/reporte');
        setRegistros(data);
    };

    const formatearPlaca = (placa) => {
        if (placa.length === 8) {
            return `${placa[0]}**-***${placa[7]}`;
        }
        return placa;
    };

    return (
        <>
            <div className='mx-auto my-0 gap-10 md:flex flex-wrap justify-between w-full md:h-full'>
                <div className='w-full h-full px-2 md:p-0'>
                  <div className=' w-full flex justify-between'>
                    <h2 className='block text-2xl font-bold text-gray-500 mb-5'>Últimas consultas realizadas</h2>
                    <Link to={'/'} className=' text-blue-700 underline'>Volver al formulario de consultas</Link>
                  </div>
                    
                    <p className='text-gray-500 mb-5'>Ultimas consultas realizadas por los usuarios.</p>
                    <div className='mb-2 border rounded-lg flex text-center overflow-hidden justify-between'>
                        <h3 className='text-center font-bold text-blue-600 text-lg w-full'>Placa</h3>
                        <h3 className='text-center font-bold text-blue-600 text-lg w-full'>Fecha</h3>
                        <h3 className='text-center font-bold text-blue-600 text-lg w-full'>Hora</h3>
                        <h3 className='text-center font-bold text-blue-600 text-lg w-full'>Estado</h3>
                    </div>
                    <div className='border rounded-md'>
                        {registros.map(registro => (
                            <div key={registro.id} className='my-5 rounded-lg flex gap-5 text-center overflow-hidden justify-between'>
                                <p className='text-center w-full'>{formatearPlaca(registro.placa)}</p>
                                <p className='text-center w-full'>{registro.fecha}</p>
                                <p className='text-center w-full'>{registro.hora}</p>
                                <div className='w-full flex justify-center'>
                                    <p className={`text-center w-1/2 rounded-md ${registro.restringido ? "bg-red-100 text-red-500" : "bg-green-100 text-green-700"}`}>
                                        {registro.restringido ? "No puede circular" : "Sí circula"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Consultas;
