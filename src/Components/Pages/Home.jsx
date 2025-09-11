import React from 'react'
import Banner from '../Banner/Banner'
import homeBanner from '../../assets/homeBanner.svg'
import orangeBg from '../../assets/orange-bg.svg'
import homeAbtimg from '../../assets/homeabtkids.svg'
import bubbleImg from '../..//assets/bubble.png'
import spiralLine from '../../assets/spiral-line.svg'
import servhomebg from '../../assets/servhomebg.png'
import homeServ from '../../assets/homeServ.svg'
import whiteSpiral from '../../assets/white-spiral.svg'
import whiteline from '../../assets/white_line.svg'
import careersBghome from '../../assets/work.svg'
import Kidregistration from '../KidRegistration/Kidregistration'

const Home = () => {
  return (
    <>
    <Banner 
        bannerheading= "Empowering Young Lives Through Compassionate Care Empowering Through"
        bannerhighlight="Care"
        bannerBtnlink="/services"
        bannerImg= {homeBanner}
        bannerImgalt="Homes Care Groups"
        bubbleImg= {bubbleImg}
    />
    <div className="clear-both"></div>
    <section className='mt-[120px] relative flex flex-col w-full h-auto p-[2rem] md:p-8 sm:p-4' style={{backgroundImage: `url(${orangeBg})`}}>
      <div className='container flex flex-col mx-auto justify-center items-center'>
        <h2 className='text-center font-title text-white text-[20px] sm:text-[50px] md:text-[50px]'>At CarePerspectives, we are dedicated to providing exceptional, child-centered residential care for young people with complex mental health</h2>
        
        <h3 className='text-center font-regular w-full md:w-[70%] mx-auto mt-[30px] text-xl text-white mb-[30px]'>Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and </h3>

        <div className='p-4 border-2 border-dashed border-white rounded-[20px] mb-[30px]'>
          <img src={homeAbtimg} alt="" />
        </div>

        <a href="#" className='bg-white px-6 py-2 rounded-full font-title uppercase text-primary'>About Us</a>
      </div>
      <img src={spiralLine} className='absolute w-[10%] left-0 top-[50%]' alt="" />
    </section>

    <section className='relative flex flex-col w-full lg:h-screen h-100% bg-cover bg-center p-[2rem] md:p-8 sm:p-16 bg-white items-center justify-center' style={{backgroundImage: `url(${servhomebg})`}}>
      <div className='flex flex-col lg:flex-row container items-center justify-center  mx-auto'>
        <div className='lg:w-1/2 w-full'>
          <h4 className='text-secondary font-title text-[28px] sm:text-[40px] md:text-[70px] '>Explore our Collection of homes</h4>
          <h5 className='text-secondary font-regular text-xl mb-5'>Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.</h5>
          <div className='w-full flex flex-col md:flex-row gap-12 mb-[30px]'>
            <div className="lg:w-1/2 w-full">
              <h6 className='text-secondary font-title text-[40px] mb-[15px]'>Care Plans</h6>
              <p className='text-xl font-regular text-secondary'>We develop individualised care plans tailored to each young person’s unique needs, focusing on their well-being and personal growth.</p>
            </div>
            <div className="lg:w-1/2 w-full">
              <h6 className='text-secondary font-title text-[40px] mb-[15px]'>Clinical Expertise</h6>
              <p className='text-xl font-regular text-secondary'>Our therapeutic approach is grounded in evidence-based practices, including attachment theory and PACE (therapeutic parenting model).</p>
            </div>
          </div>
          <a href="#" className='inline-block bg-primary text-white font-title text-sm rounded-[50px] px-7 py-3 uppercase border hover:bg-white hover:text-primary hover:border hover:border-primary w-[170px] text-center transition-all duration-300 ease-in-out hover:scale-105'>Services</a>
        </div>
        <div className='lg:w-1/2 w-full'>
          <img src={homeServ} alt="" />
        </div>
      </div>
    </section>

    <section className='relative flex h-auto bg-cover p-[2rem] md:p-8 sm:p-4 items-center justify-center bg-center bg-fixed' style={{backgroundImage: `url(${careersBghome})`}}>
      <img src={whiteSpiral} className='absolute left-0 top-[-30px] w-32' alt="" />
      <img src={whiteline} className='absolute right-20 top-[-30px] w-[35%]' alt="" />
      <div className='flex flex-col justify-center container mx-auto w-full text-left'>
        <div className='w-full '>
          <h2 className='font-title text-[28px] sm:text-[40px] md:text-[70px] text-white'>Work and Culture</h2>
          <h3 className='text-xl font-regular text-white lg:w-[65%] w-full'>We collaborate with educational providers and community services to support the academic development and social integration of young people.</h3>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-center items-start gap-8 mt-10 mb-10'>
          <div className='md:w-1/3 w-full'>
            <h4 className='font-regular text-[30px] text-white my-5'>01</h4>
            <hr className='w-28 border-primary border-t-2 my-5' />
            <h5 className='font-regular text-[30px] text-white my-5'>CV Submission</h5>
            <p className='font-regular text-xl text-white'>We commence the hiring process by getting to learn more about you - your skills, experience, interests, & what drives you.</p>
          </div>
          <div className='md:w-1/3 w-full'>
            <h4 className='font-regular text-[30px] text-white my-5'>02</h4>
            <hr className='w-28 border-primary border-t-2 my-5' />
            <h5 className='font-regular text-[30px] text-white my-5'>Skill Assessment</h5>
            <p className='font-regular text-xl text-white'>Depending on the role you’re applying for, we’ll send you an interesting assignment with a stipulated deadline, a must-do for the next phase.</p>
          </div>
          <div className='md:w-1/3 w-full'>
            <h4 className='font-regular text-[30px] text-white my-5'>03</h4>
            <hr className='w-28 border-primary border-t-2 my-5' />
            <h5 className='font-regular text-[30px] text-white my-5'>Final Interview</h5>
            <p className='font-regular text-xl text-white'>Once you clear the assessment phase, you will be then invited for the final round, aka, the Interview!</p>
          </div>
        </div>
        <div className='mt-8 mb-8'>
          <a href="#" className='px-6 py-2 bg-white text-xl border border-secondary rounded-full font-title uppercase'>lets work together</a>
        </div>
      </div>
    </section>
    
    <Kidregistration/>
  </>
  )
}

export default Home