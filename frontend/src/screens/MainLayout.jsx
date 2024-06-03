import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='grid grid-cols-[200px,1fr] h-screen  bg-slate-100 '>
        {/* left side */}
        <Navbar/>

        {/* right side */}
        <div className='bg-green-200'>
        <Outlet/>
        </div>

    </main>
  )
}

export default MainLayout