import React, { useState } from 'react'
import image from '../../Images/first_page_image.png'
import logo from '../../Images/logo.jpg'
import join_us from '../../Images/up_side_arrow.png'
import SignIn from '../../Components/Auth/Login'
import SignUp from '../../Components/Auth/Logup'
import person_image from '../../Images/person_image.png'
import Footer from '../Footer/Footer'

const First_Page = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const closeModals = () => {
    setShowSignIn(false);
    setShowSignUp(false);
  };
  return (
    <>

      <div className='bg-gradient-to-b from-[#ffd5d5]'>
        {/* ------------------------------------Navbar----------------------------------------- */}
        <div className='fixed flex items-center h-[60px] bg-white w-full'>
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


        <div className='bg-[#ffd5d5] pt-16'>
          <div className='flex'>
            <div className='bg-[#ffd5d5] w-[50rem]'>
              <div className='p-8'>
                <div className='font-[650] text-[60px] mb-8 text-[#006080]'>If You Feeling Mental Health Issues <br /></div>
                <div className='font-[500] text-[40px] my-2 text-[#006080]'>You Come On Right Website <br /></div>

                <div className='cursor-pointer flex items-center justify-center rounded-lg border-2 border-slate-400 bg-gray-100 font-semibold w-[8rem] h-[60px]' onClick={() => setShowSignUp(true)}>
                  <div className='text-[20px]'>Join Us
                  </div>
                  <img src={join_us} alt="link" className='ml-2' />
                </div>
              </div>
            </div>
            <img src={image} alt="" className='h-[30rem] w-[54rem] m-auto' />
          </div>
        </div>


        {/* -------------------------------Services--------------------------- */}
        <div className='mx-[200px] my-8 border-black border-2 bg-white rounded-lg py-4 '>
          <div className='text-center text-[25px]'>
            Our Services
          </div>
          <div className='flex justify-center p-2'>
            <div className='border-2 border-black rounded-[15px] m-4'>
              <img className='h-[200px] mx-auto my-8' src={logo} alt="" />
              <div>Topic</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
            <div className='border-2 border-black rounded-[15px] m-4'>
              <img className='h-[200px] mx-auto my-8' src={logo} alt="" />
              <div>Topic</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
            <div className='border-2 border-black rounded-[15px] m-4'>
              <img className='h-[200px] mx-auto my-8' src={logo} alt="" />
              <div>Topic</div>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing</div>
            </div>
          </div>

        </div>

        {/* --------------------------------About------------------------------------------------------ */}
        <div className='my-8 mx-[200px] '>
          <div className='border-2 border-black rounded-lg pb-[50px] bg-white'>

            <div className='text-center m-4 font-semibold text-[30px]'>Backend Developer</div>
            <div className='flex justify-center'>
              <div className='w-64 h-64 border-2 border-black rounded-lg m-4 transition duration-700 ease-in-out 
                        hover:shadow-2xl'>
                <img className='mx-auto mt-2 border-2 border-black rounded-xl w-3/4' src={person_image} alt="" />
                <div className='text-center'>Ayu</div>
              </div>
              <div className='w-64 h-64 border-2 border-black rounded-lg m-4 transition duration-700 ease-in-out 
                        hover:shadow-2xl'>
                <img className='mx-auto mt-2 border-2 border-black rounded-xl w-3/4' src={person_image} alt="" />
                <div className='text-center'>Ayu</div>
              </div>
              <div className='w-64 h-64 border-2 border-black rounded-lg m-4 transition duration-700 ease-in-out 
                        hover:shadow-2xl'>
                <img className='mx-auto mt-2 border-2 border-black rounded-xl w-3/4' src={person_image} alt="" />
                <div className='text-center'>Ayu</div>
              </div>
            </div>

            <div className='text-center m-4 font-semibold text-[30px]'>Frontend Developer</div>
            <div className='flex justify-center'>
              <div className='w-64 h-64 border-2 border-black rounded-lg m-4 transition duration-700 ease-in-out 
                        hover:shadow-2xl'>
                <img className='mx-auto mt-2 border-2 border-black rounded-xl w-3/4' src={person_image} alt="" />
                <div className='text-center'>Ayu</div>
              </div>
              <div className='w-64 h-64 border-2 border-black rounded-lg m-4 transition duration-700 ease-in-out 
                        hover:shadow-2xl'>
                <img className='mx-auto mt-2 border-2 border-black rounded-xl w-3/4' src={person_image} alt="" />
                <div className='text-center'>Ayu</div>
              </div>
            </div>
          </div>
        </div>
        {/* --------------------------------Subscribe and contact---------------------------------------- */}
        <div className="container mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#ffd5d5]">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-12 rounded-lg shadow-inner">
              <div className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Get Updates and News!
              </div>
              <div className="flex items-center">
                <input
                  className="p-3 w-full rounded-lg mr-4 border-2 border-gray-400 placeholder-gray-400 font-medium text-lg focus:outline-none focus:border-black"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="bg-gradient-to-r from-sky-500 to-sky-700 text-white p-3 rounded-lg w-40 font-semibold text-xl hover:bg-sky-800 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-12 rounded-lg shadow-inner">
              <div className="text-3xl font-bold mb-4">Contact Us</div>
              <div>
                <p className="mb-4">
                  <i className="fas fa-envelope mr-2"></i> Email: support@example.com
                </p>
                <p className="mb-4">
                  <i className="fas fa-phone mr-2"></i> Phone: +1 555-555-5555
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------Footer----------------------------- */}
        <div className='shadow-lg'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default First_Page