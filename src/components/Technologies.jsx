import React from 'react';
import { SiPython, SiCplusplus, SiTensorflow, SiMongodb } from 'react-icons/si';
import { FaCuttlefish } from 'react-icons/fa'; // For C
import { BsGraphUp } from 'react-icons/bs'; // For DL/NN visual placeholder
import { TbChartInfographic } from 'react-icons/tb'; // For Matplotlib

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h1 className='my-20 text-center text-4xl'>Skills</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Python Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className='text-7xl text-green-500' />
                </div>
                
                {/* C Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaCuttlefish className='text-7xl text-blue-700' />
                </div>
                
                {/* C++ Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiCplusplus className='text-7xl text-blue-700' />
                </div>
                
                {/* TensorFlow Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow className='text-7xl text-orange-600' />
                </div>
                
                {/* Matplotlib Icon */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbChartInfographic className='text-7xl text-purple-600' />
                </div>
                
                {/* Deep Learning (DL) Placeholder */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsGraphUp className='text-7xl text-teal-500' />
                </div>

                {/* Neural Networks (NN) Placeholder */}
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsGraphUp className='text-7xl text-teal-500' />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
