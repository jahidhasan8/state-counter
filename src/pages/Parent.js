import React, { useContext, useState } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';

const Parent = () => {
    const {count}=useContext(COUNTER_CONTEXT)
    return (
        <div className='w-full mx-auto my-48 max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md shadow-2xl'>
            <div className='bg-white rounded-md p-10'>
               
                <div className='flex justify-center gap-5'>
                <h1 className='text-2xl text-center mb-5'>Parent</h1>
                <h1 className='text-2xl text-center mb-5'>{count}</h1>
                    
                </div>
            </div>
            <Child ></Child>
        </div>
    );
};

export default Parent;