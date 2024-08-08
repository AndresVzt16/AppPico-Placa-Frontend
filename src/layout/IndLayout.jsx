import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
const IndLayout = () => {
    return (
        <>
            <div className=' '>
                <Header/>
                <div className=' container mx-auto my-0 mt-10 h-[85vh] w-full'>
                    <Outlet/>
                </div>
    
            </div>
          
        </>
      )
}

export default IndLayout