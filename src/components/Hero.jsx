import React from 'react';
import { motion } from 'framer-motion';
import profilePic from "../assets/Profile.jpg"; // Corrected

import { HERO_CONTENT } from '../constants';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})
const Hero = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Rishit Vats
                        </motion.h1>
                        <motion.span
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                        bg-clip-text text-4xl tracking-tight text-transparent'>
                            ML Developer
                        </motion.span>
                        <motion.p
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center relative">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="Profile Pic"
                            className="rounded-lg" // Tailwind CSS for size and partially rounded borders
                        />
                        <a href="https://drive.google.com/file/d/1x_X5M-TfQ8vCZ9uUDoiIKl6AhK5p_X_J/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#222233] text-white w-48 h-8 rounded-full box-border hover:bg-[#593C7D]">
                                Resume
                            </button>
                        </a>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;
