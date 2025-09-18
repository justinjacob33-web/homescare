import React, {useState} from 'react'
import { contactForm } from './Contactfields'
import contactBg from '../../assets/kidreg.png'

const Contactform = () => {

    const [formData, setFormData] = useState(
        contactForm.reduce((acc, field,) => {
            acc[field.name] = "";
            return acc;
        }, {})
    );

    const updateForm = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const updateFormsubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form Submitted Successfully!");
    };
  return (
    <>
        <section className='w-full h-full flex p-[2rem] md:p-8 sm:p-4 pb-[6rem] justify-center items-center mt-[120px] bg-cover' style={{backgroundImage: `url(${contactBg})`}}>
            <div className='container w-full h-full flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='w-full md:w-1/3 h-full flex flex-col justify-center items-start text-left '>
                    <h2 className='font-title text-2xl text-black text-left'>Office Address</h2>
                    <p className='font-regular text-[16px] text-black mt-5 md:w-96 w-full mb-8'>OFSTED, Clive House, 70 Petty France,<br></br>London, SWL 9EX</p>
                    
                    <h2 className='font-title text-2xl text-black text-left'>Contact</h2>
                    <a href="#" className='text-lg text-black mt-3 font-regular w-80'>enquiries@ofsted.gov.uk</a>
                    <a href="#" className='text-lg text-black mt-3 font-regular w-80'>0300 123 1231</a>

                    <h2 className='font-title text-2xl text-black text-left mt-8 mb-5'>Connect With Us</h2>
                    <ul className='flex flex-col gap-2'>
                        <li className='font-regular text-lg text-black'><a href="#">Instagram</a></li>
                        <li className='font-regular text-lg text-black'><a href="#">LinkedIn</a></li>
                        <li className='font-regular text-lg text-black'><a href="#">Facebook</a></li>
                    </ul>
                </div>

                <div className='w-full md:w-1/3'>
                    <div className='w-full md:w-[85%] mx-auto border border-primary p-3 px-8 bg-white rounded-[25px]'>
                        <form action="" onSubmit={updateFormsubmit}>
                            {contactForm.map((field) => (
                            <div key={field.name} className='flex flex-col'>
                                <label htmlFor={field.name} className='font-normal text-sm mb-3 mt-5'>{field.label}</label>
                                {field.type === "textarea" ? (
                                    <textarea id={field.name} name={field.name} value={formData[field.name]} onChange={updateForm} placeholder={field.placeholder} className='border border-[#a3a3a3] rounded-lg p-3 text-base text-secondary font-regular focus:outline-none bg-[#fdfdfd] mb-5' rows={2}/>
                                ) : (
                                    <input type={field.type} id={field.name} name={field.name} value={formData[field.name]} onChange={updateForm} placeholder={field.placeholder} className='border border-[#a3a3a3] rounded-lg p-2 px-3 text-base text-secondary font-regular focus:outline-none bg-[#fdfdfd]'/>
                                )}
                            </div>

                            ))}

                             <div className='md:col-span-2'>
                                    <button type='submit' className='w-full p-2 text-center font-title text-xl rounded-full bg-primary text-white mt-5 mb-8'>Send</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contactform