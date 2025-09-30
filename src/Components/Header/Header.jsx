import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone } from 'lucide-react';
import Logo from '../../assets/logo_orange.svg';
import menu from '../../assets/menu.svg'

const Header = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNvabar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => { 
    window.addEventListener("scroll", controlNvabar);
    return () => {
      window.removeEventListener("scroll", controlNvabar);
    }
  }, [lastScrollY]);
  

  const [open, setOpen] = useState(false);
  return (
    <header className={`flex items-center justify-between p-4 fixed top-0 left-0 right-0 bg-[#fff] z-50 ${show ? "translate-y-0" : "-translate-y-full"}`}>
        <button onClick={() => setOpen(!open)} className='p-2 bg-white rounded-[10px]'>
          {open ? <X size={28} className='font-title text-white' /> : <img src={menu} className='w-[35px]'/>}
        </button>
          <div><a href="/"><img src={Logo} alt="" className='w-[75%] md:w-full mx-auto' /></a></div>
        <div>
          <a className='px-3 md:px-[2rem] py-2 text-[16px] rounded-full border-0 md:border-[1px] border-black text-black font-title drop-shadow-[1px_1px_0_rgba(0,0,0,1.5)] uppercase flex items-center' href="#"><span className='hidden sm:inline'>Call Us</span> <span className='inline sm:hidden'><Phone /></span></a>
        </div>

        <div className={`fixed top-0 left-0 h-full w-64 bg-white transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>

          <button className='p-4 ml-1 mt-2' onClick={() => setOpen(false)}>
            <X className='font-title' size={28}/>
          </button>

          <nav className='flex flex-col p-6 gap-4 pt-0 font-title text-2xl bg-white h-screen'>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            {/* <Link to="/careers" onClick={() => setOpen(false)}>Careers</Link> */}
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>

        </div>
    </header>
  )
}

export default Header