import React from 'react'
import Banner from '../Banner/Banner'
// import aboutBanner from '../../assets/AboutBanner.svg'
import aboutBanner from '../../assets/abtBnrimg.svg'
import abtExploreimg from '../../assets/abtTwo.svg'
import Kidregistration from '../KidRegistration/Kidregistration'
import footimg from '../../assets/foot_1.svg';
import bannerBgabt from '../../assets/bg_1.png'

const About = () => {
  return (
    <>
        {/* <Banner 
        bannerheading= "Young Lives Through Compassionate Care Empowering"
        bannerhighlight="Care"
        bannerImg= {aboutBanner}
        bannerImgalt="Homes Care Groups" style={{ backgroundImage: `url(${bannerBgabt})` }}
  className="bg-cover"/> */}

        <section className='flex w-full relative items-center justify-between p-6 md:p-8 sm:p-4 md:h-screen h-full mt-[5rem] md:mt-0 bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${bannerBgabt})`}}>
            <div className='flex flex-col md:flex-row container mx-auto'>
                <div className='md:w-[65%] w-full justify-center relative flex align-middle flex-col'>
                    <img className='absolute md:left-[-70px] left-[-20px] top-[-50px] md:top-[-90px]' src={footimg} alt="" />
                    <h1 className='text-[32px] md:text-[50px] lg:text-[70px] md:mt-0 mt-12 flex-wrap gap-3 text-secondary font-title mb-4'>Empowering Young Lives Through Compassionate <span className='text-primary'>Care Empowering</span></h1>
                    <a href="#" className='inline-block bg-primary text-white font-title text-sm rounded-[50px] px-7 py-3 uppercase border hover:bg-white hover:text-primary hover:border hover:border-primary w-[170px] text-center transition-all duration-300 ease-in-out hover:scale-105'>Services</a>
                </div>
                <div>
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
                    <p className='font-regular font-xl text-black mb-3'>We develop individualised care plans tailored to each young person’s unique needs, focusing on their well-being and personal growth. Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model.)</p>

                    <p className='font-regular font-xl text-black mb-3'>We commence the hiring process by getting to learn more about you - your skills, experience, interests, & what drives you. Depending on the role you’re applying for, we’ll send you an interesting assignment with a stipulated deadline, a must-do for the next phase.</p>

                    <img src={footimg} className='absolute left-0 bottom-[-120px]' alt="" />
                </div>
            </div>
        </section>

        <Kidregistration/>

    </>
  )
}

export default About