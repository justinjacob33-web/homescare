import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone } from 'lucide-react';
import Logo from '../../assets/logo_orange.svg';
import menu from '../../assets/menu.svg';

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  // Hide header on scroll down
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header
      className={` flex items-center justify-between px-4 py-3 fixed top-0 left-0 right-0 bg-white/50 z-10 transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[140px] md:w-[160px]" />
        </Link>
      </div>

      {/* Middle: Nav Links (desktop only) */}
      <nav className="hidden md:flex items-center gap-6 font-title text-[16px] uppercase">
        <Link to="/" className="hover:text-primary transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-primary transition">
          About
        </Link>
        <Link to="/services" className="hover:text-primary transition">
          Services
        </Link>
        <Link to="/careers" className="hover:text-primary transition">
          Careers
        </Link>
        <Link to="/contact" className="hover:text-primary transition">
          Contact
        </Link>
      </nav>

      {/* Right: Buttons & Mobile Menu */}
      <div className="flex items-center gap-3">
        {/* Desktop Buttons */}
        <button className="hidden md:flex border border-primary text-primary font-title px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
          Call Us
        </button>
        <button className="hidden md:flex bg-primary text-white font-title px-4 py-2 rounded-full hover:bg-primary/90 transition">
          Make a Referral
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-white rounded-[10px] md:hidden z-[110]"
        >
          {open ? (
            <X size={28} className="text-black" />
          ) : (
            <img src={menu} className="w-[35px]" alt="Menu" />
          )}
        </button>
      </div>

      {/* Mobile Slide Menu (Right Side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[200] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="p-4 ml-auto mr-2 mt-2 flex justify-end"
          onClick={() => setOpen(false)}
        >
          <X className="text-black" size={28} />
        </button>

        <nav className="flex flex-col p-6 gap-4 font-title text-xl">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          <Link to="/careers" onClick={() => setOpen(false)}>
            Careers
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        <div className="flex flex-col px-6 gap-3 mt-6">
          <button className="border border-primary text-primary font-title px-4 py-2 rounded-full hover:bg-primary hover:text-white transition">
            Call Us
          </button>
          <button className="bg-primary text-white font-title px-4 py-2 rounded-full hover:bg-primary/90 transition">
            Make a Referral
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-[150]"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
