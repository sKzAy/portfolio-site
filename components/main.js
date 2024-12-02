import React from 'react'
import "@/app/globals.css"
import Card from './card'
const Main = () => {
  return (
    <>
        <div className=''>
            <h1 className='text-white text-7xl text-center pt-5 md:text-9xl'>Kazim Ali</h1>
        </div>
        <div className=' text-white '>
            <p className='text-sm text-center mb-2 md:w-full md:mx-auto'>Hi, I am an aspiring Web Developer from Pakistan.</p>
        </div>
        <Card/>
    </>
  )
}

export default Main
