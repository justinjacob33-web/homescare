import { useState } from 'react'
import kidRegbg from '../../assets/kidreg.png'
import { regformfileds } from './Regformdata'

const Kidregistration = () => {

    const [formData, setFormData] = useState (
        regformfileds.reduce ((acc, field) => {
            acc[field.name] = "";
            return acc;
        }, {})
    );

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name] : value}));
        setErrors((prev) => ({...prev, [name] : ""}));
    };

    const validate = () => {
        const newErrors = {};

        regformfileds.forEach((field) => {
            const value = formData[field.name].trim();

            // required Validation
            if (!value) {
                newErrors[field.name] = `${field.label} is required`;
                return;
            }

            // Email Validation
            if (field.type === "email") {
                const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailReg.test(value)) {
                    newErrors[field.name] = "Invalid Contact Number";
                }
            }

            // Contact Number Validation 
            if (field.name === "contactnumber") {
                const phoneReg = /^(?:0|\+44)(?:7\d{9}|[1-9]\d{8,9})$/;
                if (!phoneReg.test(value)) {
                    newErrors[field.name] = "Invalid Contact Number"
                }
            }

            // Date Validation 
            if (field.type === "date") {
                const dateValue = new Date(value);
                if (isNaN(dateValue.getTime())) {
                    newErrors[field.name] = "Invalid Date"
                }
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Form Submitted:", formData);
            alert("Form Submitted")
        }
    }

    return (
        <>
            <section className='w-full md:h-screen h-full flex p-[2rem] md:p-8 sm:p-4 justify-center items-center bg-cover bg-center' style={{backgroundImage: `url(${kidRegbg})`}}>
                <div className='w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 container'>
                    <div className='w-full md:w-1/3 h-full flex flex-col justify-center items-start text-left '>
                        
                        <h2 className='font-title text-[32px] md:text-[50px] lg:text-[70px] text-black text-left'>Register<br/>Your Kid</h2>
                        <p className='font-regular text-[16px] text-black mt-5 md:w-96 w-full'>We commence the hiring process by getting to learn more about you - your skills, experience, interests, & what drives you. Depending on the role you’re applying for, we’ll send you an interesting assignment with a stipulated deadline, a must-do for the next phase.</p>
                        <p className='font-regular text-[16px] text-black mt-5 md:w-96 w-full'>Trusted by Families, Professionals and Communities.Trusted by Families, Professionals and Communities.Trust</p>
                    </div>
                    <div className='w-full md:w-2/3'>
                        <div className='w-full md:w-[85%] mx-auto border border-primary p-3 px-8 bg-white rounded-[25px]'>
                            <form action="" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {regformfileds.map((field) => (
                                    <div key={field.name} className={`flex flex-col mt-5 ${field.type === "textarea" ? "md:col-span-2" : ""}`}>
                                        <label className='font-normal text-sm mb-2'>{field.label}</label>
                                        {field.type === "textarea" ? (
                                            <textarea name={field.name} value={formData[field.name]} onChange={handleChange} className='border border-[#a3a3a3] rounded-lg p-3 text-base text-secondary font-regular focus:outline-none bg-[#fdfdfd]' rows={2}/> ) : (
                                            
                                            <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} className='border border-[#a3a3a3] rounded-lg p-2 px-3 text-base text-secondary font-regular focus:outline-none bg-[#fdfdfd]' />
                                        )}
                                        
                                        {errors[field.name] && (
                                            <span className='text-red text-sm font-regular'>{errors[field.name]}</span>
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

export default Kidregistration