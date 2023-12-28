import React from 'react'
import image from '../../Images/first_page_image.png'
import logo from '../../Images/logo.jpg'
import Crousal from './Crousal'

const First_Page = () => {
  return (
    <>

      <div className=''>
        {/* ------------------------------------Navbar----------------------------------------- */}
        <div className='flex items-center h-[25px]'>
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
          <div className="bg-blue-500 rounded-full bg-slate-400 h-[50px] w-[80px] m-2 grid place-items-center">
            <button href="#" className="text-white ">Log In</button>
          </div>
          {/* ----------------Sign Up---------------- */}
          <div className="bg-blue-500 rounded-full bg-slate-400 h-[50px] w-[80px] m-2 grid place-items-center">
            <button href="#" className="text-white">Sign Up</button>
          </div>
        </div>


        <div className='flex m-0'>
          <div className='flex-1 bg-[#ffd5d5]'>
            <div> If You Feeling Mental Health Issues <br />
              You Come On Right Website <br />
              Join Us <br />
            </div>
          </div>
          <div className='flex-1 bg-[#f2d9d9]'>
            <img src={image} alt="" />
          </div>

        </div>
      </div>
      <div>
        <Crousal/>
      </div>

    </>
  )
}

export default First_Page