import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thank = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/firstpage');
};
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-100'>
        <div className='border-2 border-black w-64 p-8 m-auto bg-white rounded-lg shadow-md'>
            <div className='text-2xl font-bold mb-4 text-center'>Thank You For Choosing Us</div>
            <div className='text-lg mb-6 text-center'>Lets Begin Journery</div>
            <button className='w-full py-2 px-4 text-white rounded bg-slate-500 hover:bg-slate-600 active:bg-slate-700'
            onClick={handleNext}
            >Start</button>
        </div>
    </div>
  )
}

export default Thank