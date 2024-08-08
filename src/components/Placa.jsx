import React, { useEffect, useState } from 'react';

const Placa = ({ placa }) => {
    const [dato, setDato] = useState('');

    useEffect(() => {
        setDato(placa);
    }, [placa]);
    
    return (
        <>
            
            <div className='w-full animate-fade-left bg-slate-50 border rounded-lg p-5 shadow-xl'>
                
                <div className='flex w-full items-center'>
                    <img src="ant.png" className='w-28' alt="" />
                    <p className='text-right w-full text-4xl uppercase'>Ecuador</p>
                </div>
                <div className='my-14'>
                    <p className='font-semibold uppercase text-center text-6xl md:text-8xl'>{dato}</p>
                </div>
            </div>
        </>
    );
}

export default Placa;
