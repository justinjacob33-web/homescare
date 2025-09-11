import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Logo from '../../assets/logo_orange.svg';
import menu from '../../assets/menu.svg'

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className='flex items-center justify-between p-4 bg-transparent fixed top-0 left-0 right-0 z-50'>
        <button onClick={() => setOpen(!open)} className='p-2 bg-white rounded-[10px]'>
          {open ? <X size={28} className='font-title text-white' /> : <img src={menu} className='w-[35px]'/>}
        </button>
          <div><a href="#"><img src={Logo} alt="" /></a></div>
        <div>
          <a className='px-[2rem] py-2 text-[16px] rounded-full border-[1px] border-black text-black font-title drop-shadow-[1px_1px_0_rgba(0,0,0,1.5)] uppercase' href="#">Call Us</a>
        </div>

        <div className={`fixed top-0 left-0 h-full w-64 bg-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>

          <button className='p-4 ml-1 mt-2' onClick={() => setOpen(false)}>
            <X className='font-title' size={28}/>
          </button>

          <nav className='flex flex-col p-6 gap-4 pt-0 font-title text-2xl'>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>

        </div>
    </header>
  )
}

export default Header