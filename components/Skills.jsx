import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

const Skills = () => {
    const mainVariants = {
        hidden: {
            opacity: 0,
            x:"-20rem"
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }
    const childVariants = {
        hidden: {
            opacity: 0,
            x:"-10rem"
        },
        visible: {
            opacity: 1,
            x:0,
            transition: {
                duration: 0.5,
                ease: "linear",
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    }

    const childVariants2 = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "linear",
            }
        }
    }

  return (
    <motion.div className='w-full lg:h-screen p-2'>
        <motion.div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full' variants={mainVariants} initial={'hidden'} whileInView={'visible'}>
            <motion.p className='text-xl tracking-widest text-gray-500 font-semibold' variants={childVariants}>Skills</motion.p>
            <motion.h2 className='py-4' variants={childVariants}>What I Can Do</motion.h2>
            <motion.div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' variants={childVariants}>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/html.png' width={64} height={64} alt='html logo'/>
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>HTML</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/css.png' width={64} height={64} alt='css logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>CSS</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/javascript.png' width={64} height={64} alt='javascript logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>JavaScript</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/github1.png' width={64} height={64} alt='github logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>GitHub</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/react.png' width={64} height={64} alt='react logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>React</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/nextjs.png' width={64} height={64} alt='next.js logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>Next.js</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/tailwind.png' width={64} height={64} alt='tailwind logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>Tailwind</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300' variants={childVariants2}>
                    <motion.div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <motion.div className='m-auto'>
                            <Image src='/framermotion.png' width={64} height={64} alt='framer motion logo' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center justify-center'>
                            <motion.h3>Framer Motion</motion.h3>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Skills