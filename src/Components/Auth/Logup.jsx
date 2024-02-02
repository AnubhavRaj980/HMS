import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.jpg'
import arrow_icon from '../../Images/forward_arrow_Icon.png'
import google_icon from '../../Images/google_icon.jpg'
import Login from './Login';

const Logup = ({ onClose }) => {
  const [showSignUp, setShowSignUp] = useState(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, password, email);

    let errors = { name: '', email: '', password: '' };

    if (!name) {
      errors = { ...errors, name: 'Please fill in your name' };
    }
    if (!isValidEmail(email)) {
      errors = { ...errors, email: 'Please enter a valid email address' };
    }
    if (!password) {
      errors = { ...errors, password: 'Please enter a password' };
    }

    setErrors(errors);

    if (name && isValidEmail(email) && password) {
      navigate('/beforelogup');
    }
  }

  const handleSignInClick = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const closeModals = () => {
    onClose();
  };
  return (
    <>
      {showSignUp && (
        <form onSubmit={handleSubmit}>
          <div className='fixed inset-0 z-40 bg-white bg-opacity-75 transition-opacity duration-300'>
            <div className='flex justify-center items-center h-screen'>
              <div className='flex flex-col border-8 border-slate-600 rounded-md h-[43rem] w-[30rem] px-8 bg-white'>

                {/* -----------------------Close Button------------------------- */}
                <button onClick={onClose} className='ml-[450px]'>X</button>

                {/* -----------------------Logo------------------------- */}
                <div className='flex flex-initial w-[23rem] mt-4 mx-auto justify-center '>
                  <img src={logo} alt="logo" className='h-[7rem]' />
                </div>

                {/* ---------------------------SignUp text----------------------  */}
                <div className='w-[23rem]'>
                  <div className='font-bold w-[25rem] text-[33px]'>
                    Sign UP
                  </div>
                  <div>
                    <span className='text-gray-500'>Already Account? </span><button className='font-semibold' onClick={handleSignInClick}>
                      Sign In</button>
                  </div>
                </div>

                {/* --------------------------Name And Email And Password------------------------------------ */}

                <div className='w-[25rem]'>

                  {/* ---------------------Name-------------------- */}
                  <div className='font-semibold'>Name</div>
                  <div className='my-[8px]'>
                    <input type="text "
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        // Clear the error message for name in state
                        setErrors({ ...errors, name: '' });
                      }}
                      className={`rounded-md border-2 p-[5px] w-[25rem] ${errors.name ? 'border-red-500' : 'border-slate-400'
                        }`}
                      placeholder='Name' />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                  </div>

                  {/* -----------------------------Email Address--------------------- */}
                  <div className='font-semibold'>
                    <div>Email Address</div>
                  </div>
                  <div className='my-[8px]'>
                    <input type="text "
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        // Clear the error message for name in state
                        setErrors({ ...errors, email: '' });
                      }}
                      className={`rounded-md border-2 ${errors.email ? 'border-red-500' : 'border-slate-400'
                        }`}
                      style={{ width: '400px', padding: '5px' }}
                      placeholder='Enter Your Email Address' />
                    {errors.email && <p className='text-red-500'>{errors.email}</p>}
                  </div>

                  {/* -----------------------------Password--------------------- */}
                  <div className='font-semibold'>
                    <div>Password</div>
                  </div>
                  <div className='my-[8px]'>
                    <input type="password "
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        // Clear the error message for name in state
                        setErrors({ ...errors, password: '' });
                      }}
                      className={`rounded-md border-2 p-[5px] w-[25rem] ${errors.password ? 'border-red-500' : 'border-slate-400'
                        }`}
                      placeholder='Create Password' />
                    {errors.password && <p className='text-red-500'>{errors.password}</p>}
                  </div>

                  {/* ------------------------Button---------------------------- */}

                  <div className='flex flex-col '>

                    {/* -----------------------------------SignUp----------------------- */}
                    <button type="submit"
                      // disabled={!name || !email || !password}
                      className='rounded-md border-2 border-slate-500 bg-slate-500 mt-[20px] h-[38px] text-white font-semibold cursor-pointer
                    hover:bg-slate-600 active:bg-slate-700'>Sign Up
                      <img src={arrow_icon} alt="forward_arrow_icon" className='inline-block ml-2' />
                    </button>

                    {/* ---------------------------------Google-------------------------- */}
                    <button className='rounded-md border-2 border-slate-500 mt-[20px] h-[38px] font-semibold'>
                      <img src={google_icon} alt="google_icon" className='inline-block mr-2 ' />Sign Up with Google</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>)}
      {showSignIn && <Login onClose={closeModals} />}
    </>
  )
}

export default Logup