"use client"
import React from 'react'
import "@/app/globals.css"
// import { useState, useRef } from 'react'

const Card = () => {
    // const copyRef = useRef()
    // const [copy, setCopy] = useState(false)
    // const handleClick = ()=>{
    //     const mail = "1mkzaexe@gmail.com"
    //     navigator.clipboard.writeText(mail)
    //     setCopy(true)
    //     if (setCopy === true){

    //     }
    // }
    // ref={copyRef} onClick={handleClick()}
  return (
    <>
    <div className='md:hidden'>
      <div className='flex justify-evenly align-middle '>
        <div className="card1 bg2 text-white p-5 rounded-xl w-[95vw]">
            <h1 className='text-center text-xl pb-2'>Technologies:</h1>
            <ul className='flex justify-evenly'>
                <li className='md:list-inside md:list-disc text-sm text-orange-500 font-bold'>HTML</li>
                <li className='md:list-inside md:list-disc text-sm text-blue-600 font-bold'>Tailwind CSS</li>
                <li className='md:list-inside md:list-disc text-sm text-yellow-500 font-bold'>JavaScript</li>
                <li className='md:list-inside md:list-disc text-sm text-[rgb(250,250,250)] font-bold'>Next-JS</li>
            </ul>
        </div>
      </div>
      <div className='flex justify-evenly align-middle mt-3'>
        <div className="card1 bg2 text-white p-5 rounded-xl w-[95vw]">
            <h1 className='text-center text-xl pb-2'>Recent Project:</h1>
               <p className='text-sm'>
                Developed a website for STEAM-Nexus&apos;25,a STEM event by Beaconhouse College Programme Potohar Campus. I used the technologies listed above to give the users an immersive experience by using components and animations!
               </p>
               <div className='mx-auto w-fit mt-2'>
            <a href="https://steam-nexus.vercel.app"><button className='text-white border-2 border-blue-900 text-center align-middle p-2
            hover:rounded-xl hover:bg-blue-900 hover:transition-all transition-all hover:font-bold'>Visit the site</button></a>
            </div>
           
        </div>
      </div>
      <div className='flex justify-evenly align-middle mt-3'>
        <div className="card1 bg2 text-white p-5 rounded-xl w-[95vw]">
            <h1 className='text-center text-xl pb-2 min-w-fit'>Let&apos;s get in touch!</h1>
            <div className='mx-auto w-fit mt-2'>
            <a  href="mailto:kazimaliacad@gmail.com"><button className='text-white border-2 border-blue-900 text-center align-middle p-2
            hover:rounded-xl hover:bg-blue-900 hover:transition-all transition-all hover:font-bold'>Send me an Email</button></a>
            </div>
           
        </div>
      </div>
      </div>
      <div className='max-md:hidden mt-2 mb-4'>
        <div className='container flex justify-evenly align-middle gap-[2vw] mx-auto'>
            <div className="recent w-[50vw] p-10 rounded-xl bg2">
                <h1 className='text-4xl text-white'>Recent Project:</h1>
                <br />
                <p className='w-[80%] text-lg text-white'>Developed a website for STEAM-Nexus&apos;25,a STEM event by Beaconhouse College Programme Potohar Campus. I used the technologies listed above to give the users an immersive experience by using components and animations!</p>
                <div className='mx-auto w-fit mt-4'>
            <a target='_blank' href="https://steam-nexus.vercel.app"><button className='text-white border-2 border-blue-900 text-center align-middle p-2
            hover:rounded-xl hover:bg-blue-900 hover:transition-all transition-all hover:font-bold text-xl'>Visit the site</button></a>
            </div>
            </div>
           
            <div className="others flex flex-col">
                <div className='bg2 p-10 rounded-xl'>
            <h1 className='text-3xl text-white '>Technologies:</h1>
            <ul>
                <li className='font-bold text text-orange-500 pl-5'>HTML</li>
                <li className='font-bold text text-blue-600 pl-5'>Tailwind CSS</li>
                <li className='font-bold text text-yellow-500 pl-5'>JavaScript</li>
                <li className='font-bold text text-[rgb(250,250,250)] pl-5'>Next-JS</li>
            </ul>
            </div>
                <div className="touch w-[25vw] bg2 rounded-xl mt-2 p-10">
                    <h1 className='text-white text-3xl mb-4'>Let&apos;s get in touch!</h1>
                    <div className='mx-auto w-fit'>
            <a  href="mailto:kazimaliacad@gmail.com"><button className='text-white border-2 border-blue-900 text-center align-middle p-2
            hover:rounded-xl hover:bg-blue-900 hover:transition-all transition-all hover:font-bold text-xl'>Send me an Email</button></a>
            </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
