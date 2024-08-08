import React, { useState, useEffect } from 'react';
import Alerta from './Alerta';
import clienteAxios from '../../config/axios';

const Formulario = ({ placa, setPlaca, tipo }) => {
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [alerta, setAlerta] = useState({});

    useEffect(() => {
        obtenerFechaHora()
    }, []);


    const handleSumbit = async(e) => {
        e.preventDefault();
        if(tipo === "manual") {
            if ([placa, fecha, hora].includes('')) {
                setAlerta({ msg: "Hay campos vacíos", error: true });
                return;
            }
        } else {
            if ([placa].includes('')) {
                setAlerta({ msg: "Hay campos vacíos", error: true });
                return;
            }
        }
        
        if (!validatePlaca(placa)) {
            setAlerta({ msg: "Formato de placa incorrecto", error: true });
            return;
        }
    
        try {
            const { data } = await clienteAxios.post('/reporte/consulta', {placa, fecha, hora});
            const { reporteGenerado } = data;
            if (reporteGenerado.restringido) {
                return setAlerta({msg: "El vehiculo no puede circular", error: true});
            }
            setAlerta({msg: "El vehiculo si puede circular"});
            setTimeout(() => {
                setPlaca('')
            }, 3000);
            
        } catch (error) {
            console.error(error);
            setAlerta({msg: "Ocurrió un error al realizar la consulta", error: true});
        }
    };
    const obtenerFechaHora = () => {
        const now = new Date();
        const localTime = new Date(now.getTime());
        const formattedDate = localTime.toISOString().split('T')[0];
        const formattedTime = localTime.toTimeString().split(' ')[0].slice(0, 5);
        setFecha(formattedDate);
        setHora(formattedTime);
    }

    const validatePlaca = (value) => {
        const regex = /^[A-Z]{3}-\d{4}$/;
        return regex.test(value);
    };

    
    return (
        <>
            <Alerta alerta={alerta} />
            <form onSubmit={handleSumbit} className='animate-fade-right mx-auto my-0 border p-5 space-y-10 rounded-md flex-wrap justify-center flex'>
                <div className='flex gap-5 justify-between items-center w-full'>
                    <label className='text-lg text-gray-700' htmlFor="placa">Ingresar placa</label>
                    <input
                        id="placa"
                        placeholder='AAA-0000'
                        className='uppercase border h-10 px-3 outline-none rounded-md'
                        type="text"
                        onChange={e => setPlaca(e.target.value.toUpperCase())}
                        value={placa}
                    />
                </div>
                {tipo === "manual" && (
                    <>
                        <div className='flex gap-5 justify-between items-center w-full'>
                            <label className='text-lg text-gray-700' htmlFor="hora">Ingresar hora</label>
                            <input
                                id="hora"
                                type="time"
                                onChange={e => setHora(e.target.value)}
                                value={hora}
                            />
                        </div>
                        <div className='flex gap-5 justify-between items-center w-full'>
                            <label className='text-lg text-gray-700' htmlFor="fecha">Ingresar fecha</label>
                            <input
                                id="fecha"
                                type="date"
                                onChange={e => setFecha(e.target.value)}
                                value={fecha}
                            />
                        </div>
                    </>
                )}
                <button className='bg-blue-700 w-full text-white py-2 rounded-md font-semibold'>
                    {tipo === "manual" ? "Realizar consulta" : "Realizar consulta rápida"}
                </button>
            </form>
        </>
    );
};

export default Formulario;
