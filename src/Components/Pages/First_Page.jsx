import React, { useState } from 'react'
import image from '../../Images/first_page_image.png'
import logo from '../../Images/logo.jpg'
import Crousal from './Crousal'
import join_us from '../../Images/up_side_arrow.png'
import SignIn from '../../Components/Auth/Login'
import SignUp from '../../Components/Auth/Logup'

const First_Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const closeModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };
  return (
    <>

      <div className=''>
        {/* ------------------------------------Navbar----------------------------------------- */}
        <div className='fixed z-[1000] flex items-center h-[60px] bg-white w-full'>
          {/* --------------------------------------Logo--------------------------- */}
          {/* <div className="flex-initial w-59 p-4">Logo</div> */}
          <img src={logo} alt="logo_image" className='w-[3rem] ' />


          {/* -------------------------------------SearchBar-------------------------------------------- */}
          <div className="flex flex-initial w-74 p-4 space-around">
            <input type="text" className='input p-3 rounded-lg mr-3 w-[35rem] border-2 border-slate-300 items-center' placeholder='Search...' />
            <button href="#" className='button p-3 rounded-lg border-2 border-slate-400 bg-gray-100'>Search</button>
          </div>

          {/* --------------------------Navigation---------------------------- */}
          <div className="flex w-[30rem] items-center space-around p-4 space-around"
            style={{ marginLeft: "43px", marginRight: " 40px" }}
          >
            <div href="#" className="text-black mx-8 cursor-pointer flex-1">Services</div>
            <div href="#" className="text-black mx-8 cursor-pointer flex-1">About Us</div>
            <div href="#" className="text-black mx-8 cursor-pointer flex-1">Contact</div>
          </div>

          {/* ----------------LogIn---------------- */}
          <div>
            <button className="bg-blue-500 rounded-full bg-slate-400 h-[50px] w-[80px] m-2 grid place-items-center text-white" onClick={() => setShowSignIn(true)}>
              Log In
            </button>
            {showSignIn && <SignIn onClose={closeModals} />}
          </div>

          {/* ----------------Sign Up---------------- */}
          <div>
            <button className="bg-blue-500 rounded-full bg-slate-400 h-[50px] w-[80px] m-2 grid place-items-center text-white"
              onClick={() => setShowSignUp(true)}>
              Sign Up
            </button>
            {showSignUp && <SignUp onClose={closeModals} />}
          </div>
        </div>


        <div className=' m-0 h-[98vh] bg-[#ffd5d5]'>
          <div className='relative flex top-[55px]'>
            <div className='absolute top-[5rem] bg-[#ffd5d5] w-[50rem]'>
              <div className='m-8 '>
                <div className='font-[650] text-[60px] mb-8 text-[#006080]'>If You Feeling Mental Health Issues <br /></div>
                <div className='font-[500] text-[40px] my-2 text-[#006080]'>You Come On Right Website <br /></div>

                <div className='cursor-pointer flex items-center justify-center rounded-lg border-2 border-slate-400 bg-gray-100 font-semibold w-[8rem] h-[60px]' onClick={() => setShowSignUp(true)}>
                  <div className='text-[20px]'>Join Us
                  </div>
                  <img src={join_us} alt="link" className='ml-2' />
                </div>
              </div>
            </div>
            <img src={image} alt="" className='absolute h-[30rem] w-[54rem] left-[40rem] top-[5rem]' />
          </div>
        </div>
      </div>



      <div><Crousal /></div>

    </>
  )
}

export default First_Page