import React from 'react'
import { useNavigate } from 'react-router-dom'

const Afterlogup = () => {
  const navigate = useNavigate();

  const handleQueClick = () =>{
    navigate('/question');
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-b from-teal-100 to-sky-400'>
      <div className='bg-white rounded-lg shadow-xl p-8 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Welcome, Sanjeev! </h2>
        <p className='mb-6'>
          We're ready to start a supportive conversation about your mental health. Your honest answers will help us provide you with personalized insights and guidance.
        </p>
        <button className='w-full py-3 px-4 bg-teal-400 hover:bg-teal-600 rounded-md text-white font-semibold active:bg-teal-700'
        onClick={handleQueClick}>
          Let's Begin
        </button>
      </div>
    </div>
  )
}

export default Afterlogup