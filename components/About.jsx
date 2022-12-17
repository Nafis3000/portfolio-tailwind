import React from 'react'

const About = () => {


  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
                <h2 className='text-gray-500'>About</h2>
                <p className='py-2'>
                    I have always had a passion for technology and design, and I recently decided to turn that passion into a career.
                </p>
                <p className='py-2'>
                    I have been learning and practicing web development skills through FreeCodeCamp, and I am excited to start building websites and applications for real clients. I am proficient in HTML, CSS, and JavaScript, as well as frameworks and libraries like React, Next.js and TailwindCSS and I am constantly learning and improving my skills.
                </p>
                <p className='py-2'>
                    I am a strong believer in the power of collaboration and teamwork, and I am always eager to learn from others. I am excited to join a team of talented developers and contribute my skills and ideas to create beautiful and functional websites and applications.
                </p>
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60' alt='about' />
            </div>
        </div>
    </div>
  )
}

export default About