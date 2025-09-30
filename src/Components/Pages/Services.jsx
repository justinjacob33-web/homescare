import React from 'react'
import servBg from '../../assets/servicebg.svg'
import serviceOne from '../../assets/serviceOne.svg'
import serviceTwoimg from '../../assets/serviceTwo.svg'
import Kidregistration from '../KidRegistration/Kidregistration'
import bannerBgserv from '../../assets/servBg.png'
import servBanner from '../../assets/servBnr.svg'
const Services = () => {
  return (
    <>

        <section className='flex w-full relative items-center justify-between p-6 md:p-8 sm:p-4 md:h-screen h-full mt-[3rem] md:mt-0 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bannerBgserv})`}}>
            <div className='flex flex-col md:flex-row container mx-auto'>
                <div className='md:w-[35%] w-full'>
                    <img src={servBanner} alt="" className='w-[65%] md:w-full mx-auto' />
                </div>

                <div className='md:w-[65%] w-full justify-center relative flex align-middle flex-col'>
                   <h1 className='text-[32px] md:text-[50px] lg:text-[70px] md:mt-0 mt-12 flex-wrap gap-3 text-secondary font-title mb-4'>Empowering Young Lives Through Compassionate <span className='text-primary'>Care Empowering</span></h1>
                </div>
            </div>
        </section>
        
        <section className='w-full flex justify-center items-center h-auto p-6 md:p-10 sm:p-4 md:pt-[8rem] md:pb-[6rem] bg-cover bg-no-repeat bg-center' style={{backgroundImage : `url(${servBg})`}}>
            <div className='container flex flex-col mx-auto justify-center items-center'>
                <div className='text-center w-full md:w-[70%]'>
                    <h2 className='text-black font-title text-[35px] md:text-[40px]'>Explore our Collection of homes</h2>
                    <p className='text-black font-regular text-xl my-8'>Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.</p>
                </div>
                <div className='flex flex-col w-full h-full items-center justify-center md:flex-row'>
                    <div className='w-full md:w-1/2 items-center flex justify-center'>
                        <img src={serviceOne} className='md:w-[70%] w-full border-2 rounded-[35px] p-3 border-dashed border-primary' alt="" />
                    </div>
                    <div className='w-full md:w-1/2 pr-0 md:pr-[6rem]'>
                        <h4 className='font-title text-[35px] md:text-[40px] md:mt-0 mt-5 mb-4'>Clinical Expertise</h4>
                        <p className='text-base font-regular text-black mb-3'>We develop individualised care plans tailored to each young person’s unique needs, focusing on their well-being and personal growth. Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model.)</p>
                        <p className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model).</p>

                        <ul>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachm</li>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model).</li>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full items-center justify-center md:flex-row mt-3'>
                    <div className='w-full md:w-1/2 pl-0 md:pl-[6rem] order-2 md:order-1'>
                        <h4 className='font-title text-[35px] md:text-[40px] md:mt-0 mt-5 mb-4'>Clinical Expertise</h4>
                        <p className='text-base font-regular text-black mb-3'>We develop individualised care plans tailored to each young person’s unique needs, focusing on their well-being and personal growth. Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model.)</p>
                        <p className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model).</p>

                        <ul>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachm</li>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model).</li>
                            <li className='text-base font-regular text-black mb-3'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE </li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 items-center flex justify-center order-1 md:order-2'>
                        <img src={serviceTwoimg} className='md:w-[70%] w-full p-3 border-dashed border-primary' alt="" />
                    </div>
                </div>
            </div>
        </section>

        <Kidregistration/>
    </>
  )
}

export default Services