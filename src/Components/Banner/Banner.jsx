import React from 'react'
import footimg from '../../assets/foot_1.svg';
import line_1 from '../../assets/bg-line.svg';
// import bubbles from '../../assets/bubble.png'

const Banner = ({bannerheading, bannerhighlight, bannerBtn, bannerBtnlink, bannerImg, bannerImgalt, bubbleImg}) => {
  return (
    <>
        <section className='flex relative items-center justify-between p-16 md:p-8 sm:p-4 md:h-screen h-full mt-[8rem] md:mt-0 w-full'>
            <div className='flex flex-col md:flex-row container mx-auto'>
                <div className='md:w-1/2 w-full justify-center relative flex align-middle flex-col'>
                    <img className='absolute left-[-70px] top-[-90px]' src={footimg} alt="" />
                    <h1 className='text-[30px] sm:text-[40] md:text-[70px] flex-wrap gap-3 text-secondary font-title mb-4'>
                        {bannerheading.split (" ").map((word, index) => (
                            <span key={index} className='inline-block transition-transform duration-300 ease-in-out hover:scale-105 hover:text-primary cursor-pointer'>{word === bannerhighlight ? <span className='text-primary'>{word}</span> : word}</span>
                        ))}
                    </h1>

                    {bannerBtn && (
                    <a href={bannerBtnlink || "#"} className='inline-block bg-primary text-white font-title text-sm rounded-[50px] px-7 py-3 uppercase border hover:bg-white hover:text-primary hover:border hover:border-primary w-[170px] text-center transition-all duration-300 ease-in-out hover:scale-105'>{bannerBtn}</a>
                    )}
                </div>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <img src={bannerImg} alt={bannerImgalt} className='w-[90%] relative z-10' />
                </div>
                <img src={line_1} className='absolute right-0 top-[40%] w-[50%]' alt="" />
            </div>
            <img src={bubbleImg} className='absolute bottom-[-120px] w-full left-0 ' alt="" />
        </section>
        <div className="clear-both"></div>
    </>
  )
}

export default Banner