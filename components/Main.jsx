import React from 'react'
import Link from 'next/link'
import {AiOutlineMail,} from "react-icons/ai";
import {FaLinkedin, FaGithub, FaFreeCodeCamp} from "react-icons/fa";
import { motion } from 'framer-motion';

const Main = () => {

    const mainVariants = {
        hidden: {
            opacity: 0,
            x: '-20rem'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
    }

    const childVariants = {
        hidden: {
            opacity: 0, x: '-10rem'
        },
        visible: {
            opacity: 1, x: 0, transition: {duration: 0.5, ease: "linear"}
        }
    }

  return (
    <motion.div id='home' className='w-full h-screen text-center' variants={mainVariants} initial={"hidden"} whileInView={"visible"}>
        <motion.div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <motion.div>
                <motion.h1 className='mb-5 text-3xl tracking-widest'>Hi, my name is <span className='font-semibold text-red-600'>Nafis</span> and I am a self-taught web developer.</motion.h1>
                <motion.p variants={childVariants} className='text-xl tracking-widest'>I have a passion for building beautiful and functional websites, and I am constantly learning and improving my skills. I am excited to share my work with you and hope you enjoy my portfolio.</motion.p>
                    <motion.div className="flex items-center justify-around m-auto max-w-[330px] mt-6 gap-5">
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <Link href='https://www.linkedin.com/in/nafis-anwar-1a6a0a141/' target='_blank'>
                                <FaLinkedin/>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <Link href='https://github.com/Nafis3000' target='_blank'>
                                <FaGithub/>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <Link href='mailto:nafis.3000@gmail.com' target='_blank'>
                                <AiOutlineMail/>
                            </Link>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer">
                            <Link href='https://www.freecodecamp.org/fcc12f59cba-6269-44ac-9407-65b90082c113' target='_blank'>
                                <FaFreeCodeCamp/>
                            </Link>
                        </motion.div>
                    </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Main