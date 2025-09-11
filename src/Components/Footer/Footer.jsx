import React from 'react'
import { Link } from 'react-router-dom'
import footerImg from '../../assets/footer.svg'
import logoWhite from '../../assets/logo_white.svg'

const Footer = () => {
  return (
    <>
        <section className='w-full h-full flex flex-col p-[2rem] md:p-[5rem] sm:p-4 justify-center items-center bg-cover bg-top' style={{backgroundImage: `url(${footerImg})`}}>
            <div className='container flex flex-col md:flex-row justify-center items-start mx-auto'>
                <div className='w-2/4'>
                    <img src={logoWhite} alt="" />
                    <h4 className='text-lg text-white mt-6 font-regular w-80'>We develop individualised care plans tailored to each young person’s unique needs</h4>
                </div>
                <div className='w-2/4 flex flex-col mt-5 md:mt-0'>
                    <div>
                        <h5 className='text-2xl text-white mt-6 font-regular w-80'>Office</h5>
                        <h6 className='text-lg text-white mt-3 font-regular w-80'>OFSTED, Clive House, 70 Petty France, London, SWL<br/>9EX</h6>
                    </div>
                    <div className='mt-6 flex flex-col'>
                        <h5 className='text-2xl text-white mt-6 font-regular w-80'>Contact us</h5>
                        <a href="#" className='text-lg text-white mt-3 font-regular w-80'>enquiries@ofsted.gov.uk</a>
                        <a href="#" className='text-lg text-white mt-3 font-regular w-80'>0300 123 1231</a>
                    </div>
                </div>
                <div className='w-1/4 mt-5 md:mt-0'>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-regular text-lg text-white'><Link to="/">Home</Link></li>
                        <li className='font-regular text-lg text-white'><Link to="/About">About Us</Link></li>
                        <li className='font-regular text-lg text-white'><Link to="/Services">Services</Link></li>
                        <li className='font-regular text-lg text-white'><Link to="/Careers">Careers</Link></li>
                        <li className='font-regular text-lg text-white'><Link to="/Contact">Contact</Link></li>
                    </ul>

                </div>
                <div className='w-1/4 mt-5 md:mt-0'>
                    <ul className='flex flex-col gap-5'>
                        <li className='font-regular text-lg text-white'><a href="#">Instagram</a></li>
                        <li className='font-regular text-lg text-white'><a href="#">LinkedIn</a></li>
                        <li className='font-regular text-lg text-white'><a href="#">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className='container text-start text-white'>
2025 © all rights reserved.
            </div>
        </section>
    </>
  )
}

export default Footer