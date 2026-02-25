import React, {useState} from 'react'
import contactBg from '../../assets/kidreg.png'
import jobsData from './Careersdata'


const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(jobsData[0]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        resume: null,
        message: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "resume") {
        setFormData({ ...formData, resume: files[0] });
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Application Submitted:", {
        ...formData,
        job: selectedJob.title,
        });

        alert("Application submitted successfully!");
        setShowForm(false);
        setFormData({ name: "", email: "", phone: "", resume: null, message: "" });
    };
    return (
        <>
            <section className='w-full h-full flex p-[2rem] md:p-8 sm:p-4 pb-[6rem] items-center mt-[70px] bg-cover' style={{backgroundImage: `url(${contactBg})`}}>
                <h1 className='relative text-primary text-3xl md:text-5xl font-bold text-center w-full'>Join Our Team</h1>
            </section>

            <section className='min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-12'>
                <div className='max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        <div className='lg:hidden p-4 border-b'>
                            <label className='block text-sm font-medium mb-2'>Select Position</label>
                            <select value={selectedJob?.id}
                                onChange={(e) =>
                                setSelectedJob(
                                    jobsData.find(
                                    (job) => job.id === Number(e.target.value)
                                    )
                                )
                                }
                                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    {jobsData.map((job) => (
                                        <option key={job.id} value={job.id}>
                                            {job.title}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {/* Desktop */}

                        <div className='hidden lg:block border-r p-6 space-y-4 bg-gray-50'>
                            <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
                            {jobsData.map((job) => (
                                <div
                                key={job.id}
                                onClick={() => setSelectedJob(job)}
                                className={`p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${
                                    selectedJob?.id === job.id
                                    ? "bg-blue-50 border-blue-500 shadow"
                                    : "hover:bg-white border-transparent"
                                }`}
                                >
                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{job.short}</p>
                                </div>
                            ))}
                        </div>

                        {/* Job Detsails */}
                        <div className="lg:col-span-2 p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                {selectedJob.title}
                            </h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedJob.keypoints?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs sm:text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                                ))}
                            </div>

                            <div className="text-gray-700 whitespace-pre-line leading-relaxed text-sm sm:text-base">
                                {selectedJob.description}
                            </div>

                            <div className="mt-8 lg:mt-10">
                                <button
                                onClick={() => setShowForm(true)}
                                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-200 shadow-md"
                                >
                                Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


             {showForm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">
                    <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    >
                    ✕
                    </button>

                    <h3 className="text-2xl font-bold mb-4">
                    Apply for {selectedJob.title}
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-xl px-4 py-2"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-xl px-4 py-2"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-xl px-4 py-2"
                    />

                    <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                        className="w-full"
                    />

                    <textarea
                        name="message"
                        placeholder="Cover Letter / Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border rounded-xl px-4 py-2"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                    >
                        Submit Application
                    </button>
                    </form>
                </div>
                </div>
            )}
        </>
    )
}

export default Careers