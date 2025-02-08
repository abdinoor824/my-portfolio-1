import React from 'react'
import ToDoList from "../assets/todolist.png";
import Tailwindcss from "../assets/tailwind-css.png"
import shopingcart from "../assets/shoping-cart.png"

const projects = [
    {
      id: 1,
      name: "To-Do List",
      technologies: "MERN Stack",
      image: ToDoList,
      github:"https://github.com/abdinoor824/todolist23",
      render: "https://abdinoor.onrender.com",
    },
    {
      id: 2,
      name: "Tailwind css",
      technologies: "MERN Stack",
      image: Tailwindcss,
      github:"https://github.com/abdinoor824/tailwindcss-1",
      render: "https://tailwindcss-1-2.onrender.com",
    },
    {
      id: 3,
      name: "Shoping Cart",
      technologies: "MERN Stack",
      image: shopingcart,
      github:"https://github.com/abdinoor824/shopingcart-1",
      render: "https://shopingcart-1-4.onrender.com/",
    },
  ];

const Projects = () => {
  return (
    <div>

<div className="bg-black text-white py-5 overflow-hidden" id="projects">
      <div className="container   px-5 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project)=>(
            <div key={project.id} className='bg-gray-800  p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
            <img src={project.image}className='rounded-lg mb-4 w-full h-48 object-cover' alt="" />
            <h1 className='text-2xl font-bold mb-2 '>{project.name}</h1>
        <p className='text-gray-400 mb-4 '>{project.technologies}</p>
        <div className='space-x-3'>
        <a href={project.github} rel='' target='_blank ' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>GitHub</a>
        <a href={project.render} rel='' target='_blank ' className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full'>Go to the project </a>

        </div>
        
            </div>
        ))}
    </div>
 

</div>
</div>


    </div>
  )
}

export default Projects