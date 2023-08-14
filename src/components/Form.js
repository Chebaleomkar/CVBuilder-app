import React, { useState } from 'react';
import Resume from './Resume';

export const Form = () => {

const [form ,setForm] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    education: '',
    experience: '',
    skills: '',
    projects: '',
    interest: ''
});
const [showResume, setShowResume] = useState(false);


const handleChange = (e) =>{
    const {name , value} = e.target;
    setForm({
        ...form,
        [name] : [value]
    })
};

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
    setShowResume(true);
    const resumSection = document.getElementById('resumeid');
    if(resumSection){
        resumSection.scrollIntoView({behavior : "smooth"});
    }
};

    return (
        <div className="container mt-5 mb-2">
            <div className='form-container'>
            <h1 className="text-center">CV Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input type="text" className="form-control" id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                </div> <br />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address:</label>
                        <textarea rows="3" cols="12" type="text" className="form-control" id="address" name="address" value={form.address} onChange={handleChange} placeholder="Enter your address ex:[City, State, ZIP Code]" />
                    </div> <br />
                    <div className="form-group col-md-6">
                        <label htmlFor="city">City:</label>
                        <input type="text" className="form-control" id="city" name="city" value={form.city} onChange={handleChange} placeholder="Enter your city" />
                    </div>
                </div> <br />
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" required />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" required />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn Profile:</label>
                    <input type="url" className="form-control" id="linkedin" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="Enter your LinkedIn profile URL" />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="github">GitHub Profile:</label>
                    <input type="url" className="form-control" id="github" name="github" value={form.github} onChange={handleChange}  placeholder="Enter your GitHub profile URL" />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="education">Education:</label>
                    <textarea type="text" className="form-control" id="education" name="education" value={form.education} onChange={handleChange} placeholder="Enter your education   ex : [Degree] in [Field of Study] [University/College Name], [Location]   [Month Year] - [Month Year  " />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="experience">Experience:</label>
                    <textarea className="form-control" id="experience" name="experience" value={form.experience} onChange={handleChange}  placeholder="Enter your experience details : [Job Title] - [Company/Organization Name], [Location][Month Year] - [Month Year]"></textarea>
                </div> <br />
                <div className="form-group">
                    <label htmlFor="skills">Skills:</label>
                    <input type="text" className="form-control" id="skills" name="skills" value={form.skills} onChange={handleChange} placeholder="Enter your skills" />
                </div><br />

                <div className="form-group">
                    <label htmlFor="projects">Projects:</label>
                    <textarea rows="3"   type="text" className="form-control" id="projects" name="projects" value={form.projects} onChange={handleChange} placeholder="Enter your skills ex : Description of the project, your role, technologies used, and outcomes." />
                </div><br />
                <div className="form-group">
                    <label htmlFor="interest">Interest:</label>
                    <input type="text" className="form-control" id="interest" name="interest" value={form.interest} onChange={handleChange} placeholder="Enter your skills" />
                </div><br />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {showResume && <Resume form={form} />}

        </div>
        </div>
    );
}
