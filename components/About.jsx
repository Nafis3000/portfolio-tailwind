import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {

const variant = {
    hidden: { opacity: 0, x: "-20rem" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.5 },},
    }

const pVariant = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 1, ease: 'linear'}},
}
  return (
    <>
    <motion.div className='w-full md:h-screen p-2 flex items-center py-16'>
        <motion.div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <motion.div className='col-span-2 ' variants={variant} initial={"hidden"} whileInView={"visible"}>
                <motion.h2 className='text-gray-500 text-xl tracking-widest'>About</motion.h2>
                <motion.p className='py-2' variants={pVariant}>
                    I have always had a passion for technology and design, and I recently decided to turn that passion into a career.
                </motion.p>
                <motion.p className='py-2' variants={pVariant}>
                    I have been learning and practicing web development skills through FreeCodeCamp, and I am excited to start building websites and applications for real clients. I am proficient in HTML, CSS, and JavaScript, as well as frameworks and libraries like React, Next.js and TailwindCSS and I am constantly learning and improving my skills.
                </motion.p>
                <motion.p className='py-2' variants={pVariant}>
                    I am a strong believer in the power of collaboration and teamwork, and I am always eager to learn from others. I am excited to join a team of talented developers and contribute my skills and ideas to create beautiful and functional websites and applications.
                </motion.p>
            </motion.div>
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
                <img className="rounded-xl" src='https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1296&q=60' alt='about' />
            </motion.div>
        </motion.div>
    </motion.div>
    </>
  )
}

export default About