import React from 'react'
import logo from '../assets/my-logo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-5 " width={150}src={logo} />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/sasanvhn" target="_blank" rel="noopener noreferrer" ><FaGithub size={30} style={{ marginRight: '10px' }} /> </a>
        <a href="https://www.linkedin.com/in/sasan-vahidinia/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} style={{ marginRight: '10px' }} /></a>

      </div>
    </nav>
  )
}

export default Navbar

