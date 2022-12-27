import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail,} from "react-icons/ai";
import {FaLinkedin, FaGithub, FaFreeCodeCamp} from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleNav = () => {
        setShow(!show);
    }

  return (
    <motion.div className='fixed w-full h-19 shadow-2xl z-[100] bg-slate-200'>
        <motion.div className = 'flex justify-between items-center w-full h-full pr-2 2xl:px-16'>
            <Image src='/NA.png' alt="/" width='75' height='50' className="" />
            <div>
                <ul className="hidden md:flex">
                    <Link href='/'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                    </Link>
                    <Link href='/about'>
                        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                    </Link>
                    <Link href='/skills'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                    </Link>
                    <Link href='/projects'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                    </Link>
                    <Link href='/contact'>
                        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className='md:hidden cursor-pointer'>
                <AiOutlineMenu size={40} className='text-2xl' />
            </div>
        </motion.div>
    
    <div className={show ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70": "" } >
        <div className={show ? 'fixed left-0 top-0 w-[65%] sm:w-[60%] md:w-[45%] h-full bg-slate-200 p-1 ease-in duration-500' : 'fixed left-[-100%] top-0  p-1 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Image src='/NA.png' alt="/" width='60' height='30' className="rounded" />
                    <div onClick={handleNav} className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <div className='border-b border-slate-400 my-4 text-center'>
                    <p>Let's build something together.</p>
                </div>
            </div>
            <div className="py-4 flex flex-col">
                <ul className="uppercase ml-3">
                    <Link href='/'>
                        <li className="py-4 text-sm border-b border-gray-300">Home</li>
                    </Link>
                    <Link href='/'>
                        <li className="py-4 text-sm border-b border-gray-300">About</li>
                    </Link>
                    <Link href='/'>
                        <li className="py-4 text-sm border-b border-gray-300">Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className="py-4 text-sm border-b border-gray-300">Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className="py-4 text-sm border-b border-gray-300">Contact</li>
                    </Link>
                </ul>
                    <div className="mt-8">
                        <p className="uppercase tracking-widest text-blue-600 ml-2">
                            Let's Connect
                        </p>
                        <div className="flex items-center justify-around my-6 w-full sm:w[80%] text-4xl">
                            <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaLinkedin/>
                            </div>
                            <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaGithub/>
                            </div>
                            <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <AiOutlineMail/>
                            </div>
                            <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                                <FaFreeCodeCamp/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Navbar