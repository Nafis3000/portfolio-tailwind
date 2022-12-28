import { motion } from 'framer-motion'
import Link from 'next/link';
import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail,} from "react-icons/ai";
import {FaLinkedin, FaGithub, FaFreeCodeCamp} from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";

const Contact = () => {

    const mainVariants = {
        hidden: {
            opacity: 0,
            y: '5rem'
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
    }

  return (
   <motion.div id='contact' className='w-full lg:h-full' >
        <motion.div className='max-w-[1240px] m-auto px-2 py-16 w-full' variants={mainVariants} initial='hidden' whileInView={'visible'}>
            <motion.h2 className='text-gray-500 text-xl tracking-widest'>Contact</motion.h2>
            <motion.h1 className='text-3xl font-bold'>Get In Touch</motion.h1>
            <motion.div className='grid lg:grid-cols-5 gap-8'>
                <motion.div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <motion.div className='lg:p-4 h-full'>
                        <motion.div>
                            <motion.img className='rounded-xl' src='https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1296&q=60' alt='image' />
                        </motion.div>
                        <motion.div>
                            <motion.h1 className='text-2xl font-bold py-3'>Nafis Anwar</motion.h1>
                            <motion.p>Full-Stack Developer</motion.p>
                            <motion.p className='py-4'>I am available for freelance or full-time positions. Contact me and let's get started.</motion.p>
                        </motion.div>
                        <motion.p className='pt-8'>Connect With Me</motion.p>
                        <motion.div className='flex items-center py-2'>
                        <motion.div className="flex items-center justify-around my-6 w-full sm:w[80%] text-4xl">
                            <motion.div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaLinkedin href=''/>
                            </motion.div>
                            <motion.div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaGithub href=''/>
                            </motion.div>
                            <motion.div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <AiOutlineMail href=''/>
                            </motion.div>
                            <motion.div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaFreeCodeCamp href=''/>
                            </motion.div>
                        </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4' variants={mainVariants} initial='hidden' whileInView={'visible'}>
                    <motion.div className='p-4'>
                        <motion.form>
                            <motion.div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <motion.div className='flex flex-col'>
                                    <motion.label className='uppercase text-sm py-2'>Name</motion.label>
                                    <motion.input className='border-2 border-gray-300 rounded-lg p-2 flex' type='text' placeholder='Enter Your Name' />
                                </motion.div>
                                <motion.div className='flex flex-col'>
                                    <motion.label className='uppercase text-sm py-2'>Phone Number</motion.label>
                                    <motion.input className='border-2 border-gray-300 rounded-lg p-2 flex' type='text' placeholder='Enter Your Phone Number' />
                                </motion.div>
                            </motion.div>
                            <motion.div>
                                <motion.label className='uppercase text-sm py-2'>Email</motion.label>
                                <motion.input className='border-2 border-gray-300 rounded-lg p-2 flex w-full' type='email' placeholder='Enter Your Email' />
                            </motion.div>
                            <motion.div>
                                <motion.label className='uppercase text-sm py-2'>Subject</motion.label>
                                <motion.input className='border-2 border-gray-300 rounded-lg p-2 flex w-full' type='text' placeholder='' />
                            </motion.div>
                            <motion.div>
                                <motion.label className='uppercase text-sm py-2'>Message</motion.label>
                                <motion.textarea className='border-2 border-gray-300 rounded-lg p-3 flex w-full' rows="10" placeholder=''></motion.textarea>
                            </motion.div>
                            <motion.button className='bg-gradient-to-tr from-sky-600 to-sky-200 rounded-xl w-full p-4 mt-4 text-gray-100'>Send Message</motion.button>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className='flex justify-center py-12'>
                    <Link href='/#home'>
                        <motion.div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer text-sky-500' whileHover={{scale:1.2}}>
                            <HiOutlineChevronDoubleUp/>
                        </motion.div>
                    </Link>
            </motion.div>
        </motion.div>
   </motion.div>
  )
}

export default Contact