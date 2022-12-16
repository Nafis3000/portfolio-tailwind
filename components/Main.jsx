import React from 'react'
import Link from 'next/link'
import {AiOutlineMail,} from "react-icons/ai";
import {FaLinkedin, FaGithub, FaFreeCodeCamp} from "react-icons/fa";

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <h1 className='mb-5 text-3xl tracking-widest'>Hi, my name is <span className='font-semibold text-red-600'>Nafis</span> and I am a self-taught web developer.</h1>
                <p className='text-xl tracking-widest'>I have a passion for building beautiful and functional websites, and I am constantly learning and improving my skills. I am excited to share my work with you and hope you enjoy my portfolio.</p>
                    <div className="flex items-center justify-around m-auto max-w-[330px] py-4  gap-10">
                        <div className="text-3xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duratation-300 animate-fade-in animate-slide-in">
                            <FaLinkedin/>
                        </div>
                        <div className="text-3xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duratation-300 animate-fade-in animate-slide-in">
                            <FaGithub/>
                        </div>
                        <div className="text-3xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duratation-300 animate-fade-in animate-slide-in">
                            <AiOutlineMail/>
                        </div>
                        <div className="text-3xl rounded shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duratation-300 animate-slide-in animate-fade-in">
                            <FaFreeCodeCamp/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main