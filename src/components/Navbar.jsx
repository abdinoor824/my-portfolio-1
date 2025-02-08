import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black text-white  md:px-16  overflow-hidden'>
        <div className='container py-2 flex justify-center md:justify-around items-center'>
            <div className='text-2xl font-bold hidden md:inline '>
                abdinoor
            </div>
            <div className='space-x-4 '>
                <a href="#Home"className="hover:text-gray-400">Home</a>
                <a href="#about"className="hover:text-gray-400">About me</a>
                <a href="#services"className="hover:text-gray-400">Services</a>
                <a href="#projects"className="hover:text-gray-400">projects</a>
                <a href="#contact"className="hover:text-gray-400">Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </div>
  )
}

export default Navbar