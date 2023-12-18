import React from 'react'
import logo from '../../Images/logo.jpg'
import arrow_icon from '../../Images/forward_arrow_Icon.png'
import google_icon from '../../Images/google_icon.jpg'

const Logup = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='relative flex flex-col border-8 border-slate-600 rounded-md h-[43rem] w-[30rem] px-8'>

          {/* -----------------------Logo------------------------- */}
          <div className='absolute flex flex-initial w-[23rem] top-[32px] justify-center '>
            <img src={logo} alt="logo" className='h-[7rem]' />
          </div>

          {/* ---------------------------SignUp text----------------------  */}
          <div className='absolute top-[10rem] w-[23rem]'>
            <div className='font-bold w-[25rem] text-[33px]'>
              Sign UP
            </div>
            <div>
              <span className='text-gray-500'>Already Account? </span><span className='font-semibold'>Sign In</span>
            </div>
          </div>

          {/* --------------------------Name And Email And Password------------------------------------ */}

          <div className='absolute top-[15rem] w-[25rem]'>

            {/* ---------------------Name-------------------- */}
            <div className='font-semibold'>Name</div>
            <div className='my-[8px]'>
              <input type="text " className='top-[18rem] rounded-md border-2 border-slate-400 p-[5px] w-[25rem]' placeholder='Email' />
            </div>

            {/* -----------------------------Email Address--------------------- */}
            <div className='font-semibold'>
              <div>Email Address</div>
            </div>
            <div className='my-[8px]'>
              <input type="text " className='top-[18rem] rounded-md border-2 border-slate-400 p-[5px] w-[25rem]' placeholder='Enter Your Email Address' />
            </div>

            {/* -----------------------------Password--------------------- */}
            <div className='font-semibold'>
              <div>Password</div>
            </div>
            <div className='my-[8px]'>
              <input type="text " className='top-[18rem] rounded-md border-2 border-slate-400 p-[5px] w-[25rem]' placeholder='Create Password' />
            </div>

            {/* ------------------------Button---------------------------- */}

            <div className='flex flex-col '>

              {/* -----------------------------------SignUp----------------------- */}
              <button className='rounded-md border-2 border-black bg-black mt-[20px] h-[38px] text-white font-semibold'>Sign Up 
              <img src={arrow_icon} alt="forward_arrow_icon" className='inline-block ml-2' />
              </button>

              {/* ---------------------------------Google-------------------------- */}
              <button className='rounded-md border-2 border-slate-500 mt-[20px] h-[38px] font-semibold'>
                <img src={google_icon} alt="google_icon" className='inline-block mr-2 '/>Sign Up with Google</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Logup