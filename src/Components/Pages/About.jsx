import React from 'react'
import Banner from '../Banner/Banner'
import aboutBanner from '../../assets/AboutBanner.svg'
import abtExploreimg from '../../assets/abtExplore.svg'
import Kidregistration from '../KidRegistration/Kidregistration'
import footimg from '../../assets/foot_1.svg';

const About = () => {
  return (
    <>
        <Banner 
        bannerheading= "Young Lives Through Compassionate Care Empowering"
        bannerhighlight="Care"
        bannerImg= {aboutBanner}
        bannerImgalt="Homes Care Groups"/>

        <section className='relative flex flex-col w-full h-auto p-[2rem] md:p-8 sm:p-4'> 
            <div className='container flex flex-col md:flex-row mx-auto justify-center items-center gap-5'>
                <div className='w-full md:w-5/12 h-[100%]'>
                    <img src={abtExploreimg} alt="" />
                </div>
                <div className='w-full md:w-7/12 h-[100%] flex flex-col justify-center items-center align-middle relative'>
                    <h2 className='font-title text-black text-[20px] sm:text-[50px] md:text-[70px] leading-[5rem] mb-5'>
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