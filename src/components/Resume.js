import React from 'react';

const Resume = ({ form }) => {
    const { fullName, address, city, phone, email, linkedin, github, education, experience, skills, projects, interest } = form;

    const handlePrint = () => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
      <html>
        <head>
          <title>Resume</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" />
        </head>
        <body>
          <div class="container mt-5">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <div class="resume-container p-4 bg-light">
                  <div>
                    <h1 class="mb-0">${fullName}</h1>
                    <p class="mb-2">${address}, ${city}</p>
                    <p class="mb-0">${phone} <br/> ${email}</p>
                    <p class="mb-0">LinkedIn: ${linkedin} <br/> GitHub: ${github}</p>
                  </div>
                  <div className='mb-4'>
                            <h3> Summary: </h3>
                            Enthusiastic and dedicated BCA graduate with a strong foundation in computer science concepts. Eager to leverage acquired knowledge to contribute to software development projects. A quick learner, team player, and adept at problem-solving. Passionate about coding, technology, and staying updated with the latest industry trends.
                        </div>

                        <div className='mb-4'>
                            <h3 className="mt-4">Education</h3>
                            <p>{education}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Experience</h3>
                            <p>{experience}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Skills</h3>
                            <p>{skills}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Projects</h3>
                            <p>{projects}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Interests</h3>
                            <p>{interest}</p>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);
        printWindow.document.close();
        printWindow.print();
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="resume-container p-4 bg-light"  id='resumeid'>
                        <div className="mb-4">
                            <h1 className="mb-0">{fullName}</h1>
                            <p className="mb-2">{address}, {city}</p>
                            <p className="mb-0">{phone} <br /> {email}</p>
                            <p className="mb-0">LinkedIn: {linkedin} <br /> GitHub: {github}</p>
                        </div>

                        <div className='mb-4'>
                            <h3> Summary: </h3>
                            Enthusiastic and dedicated BCA graduate with a strong foundation in computer science concepts. Eager to leverage acquired knowledge to contribute to software development projects. A quick learner, team player, and adept at problem-solving. Passionate about coding, technology, and staying updated with the latest industry trends.
                        </div>

                        <div className='mb-4'>
                            <h3 className="mt-4">Education</h3>
                            <p>{education}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Experience</h3>
                            <p>{experience}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Skills</h3>
                            <p>{skills}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Projects</h3>
                            <p>{projects}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="mt-4">Interests</h3>
                            <p>{interest}</p>
                        </div>

                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary" onClick={handlePrint}>Print Resume</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Resume;
