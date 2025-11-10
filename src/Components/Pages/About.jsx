import React from 'react'
import aboutBanner from '../../assets/abtBnrimg.png'
import abtExploreimg from '../../assets/abtTwo.svg'
import Kidregistration from '../KidRegistration/Kidregistration'
import footimg from '../../assets/foot_1.svg';
import bannerBgabt from '../../assets/bg_1.png'

const About = () => {
  return (
    <>
        <section className='flex w-full relative items-center justify-between p-6 md:p-8 sm:p-4 md:h-screen h-full mt-[5rem] md:mt-0 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bannerBgabt})`}}>
            <div className='flex flex-col md:flex-row container mx-auto'>
                <div className='md:w-[65%] w-full justify-center relative flex align-middle flex-col order-2 md:order-1'>
                    <img className='absolute md:left-[-70px] left-[-20px] top-[-50px] md:top-[-90px]' src={footimg} alt="" />
                    <h1 className='text-[32px] md:text-[50px] lg:text-[70px] md:mt-0 mt-12 flex-wrap gap-3 text-secondary font-title mb-4'>Empowering Young Lives Through Compassionate <span className='text-primary'>Care Empowering</span></h1>
                    <a href="#" className='inline-block bg-primary text-white font-title text-sm rounded-[50px] px-7 py-3 uppercase border hover:bg-white hover:text-primary hover:border hover:border-primary w-[170px] text-center transition-all duration-300 ease-in-out hover:scale-105'>Services</a>
                </div>
                <div className='order-1 md:order-2'>
                    <img src={aboutBanner} alt="" />
                </div>
            </div>
        </section>

        <section className='relative flex flex-col w-full h-auto p-[2rem] md:p-8 sm:p-4'> 
            <div className='container flex flex-col md:flex-row mx-auto justify-center items-center gap-5'>
                <div className='w-full md:w-[45%] h-[100%]'>
                    <img src={abtExploreimg} alt="" className='md:w-[70%] w-full mx-auto' />
                </div>
                <div className='w-full md:w-[48%] h-[100%] flex flex-col justify-center items-center align-middle relative'>
                    <h2 className='font-title text-black text-[32px] md:text-[50px] lg:text-[70px] mb-5'>
                        Explore our Collection of homes
                    </h2>
                    <p className='font-regular font-xl text-black mb-3'>Homes Care operates as part of the Homes Care Group, dedicated to delivering high-quality support that enables young people to build safety, stability, and the skills required for independence.</p>

                    <p className='font-regular font-xl text-black mb-3'>Our 16+ Supported Accommodation services follow the Department for Education’s Guide to Supported Accommodation Regulations and Quality Standards (March 2023), ensuring that every aspect of our care meets the highest expectations of quality and accountability.</p>

                    <p className='font-regular font-xl text-black mb-3'>Working alongside our children’s home provisions for ages 8 to 16, we provide a seamless pathway of support — helping young people develop the skills, confidence, and stability they need to thrive as they move into adulthood.</p>

                    <img src={footimg} className='absolute left-0 bottom-[-120px]' alt="" />
                </div>
            </div>
        </section>

        <Kidregistration/>

    </>
  )
}

export default About