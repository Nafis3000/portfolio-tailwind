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
    <motion.div className='w-full h-screen text-center' variants={mainVariants} initial={"hidden"} whileInView={"visible"}>
        <motion.div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <motion.div>
                <motion.h1 className='mb-5 text-3xl tracking-widest'>Hi, my name is <span className='font-semibold text-red-600'>Nafis</span> and I am a self-taught web developer.</motion.h1>
                <motion.p variants={childVariants} className='text-xl tracking-widest'>I have a passion for building beautiful and functional websites, and I am constantly learning and improving my skills. I am excited to share my work with you and hope you enjoy my portfolio.</motion.p>
                    <motion.div className="flex items-center justify-around m-auto max-w-[330px] mt-6 gap-5">
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <FaLinkedin/>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <FaGithub/>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer ">
                            <AiOutlineMail/>
                        </motion.div>
                        <motion.div variants={childVariants} className="text-4xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer">
                            <FaFreeCodeCamp/>
                        </motion.div>
                    </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Main