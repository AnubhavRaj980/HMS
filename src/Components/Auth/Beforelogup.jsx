import React, { useState } from 'react'
import './Beforelogup.css'

const Beforelogup = () => {
  const handleKeyDown = (event) => {
    const keyValue = event.key;
    if (!/^\d*$/.test(keyValue)) {
      event.preventDefault();
    }
  };


  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

      <div className='flex justify-center items-center h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]'>
        <div className='border-8 border-slate-600 rounded-md h-[40rem] w-[30rem] p-8 flex flex-col '>
          <div className='font-bold text-[35px] mb-[15px] text-center'>Hey, Sanjeev Kumar</div>
          <div className='text-[25px] font-bold mb-2 text-center'>Welcome to the InnerMind Oasis</div>
          <div className='font-semibold text-[18px] mb-4 text-center'>Give Your Details To Know More About You</div>

          {/* -----------------------Enter Age------------------------- */}
          <div className='font-semibold flex flex-row mt-4'>
            <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[20px]'>Age</div>
            <input type="number" onKeyDown={handleKeyDown} className='cursor-pointer font-mono p-2 text-[15px] w-[250px] border-2 border-slate-500 rounded-md ml-[50px] w-[246px]' min={0}
              placeholder='Enter Your Age' />
          </div>

          {/* -----------------------Enter Gender------------------------- */}
          <div className='font-semibold flex flex-row mt-8'>
            <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[43px]'>Gender</div>
            {/* <div className="grid">
              <select className="font-mono p-2 text-[15px] w-[300px] border-2 border-slate-500 rounded-md">
                <option value="" disabled selected>Select Gender</option>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </div>
          </div> */}
            <div className=''>
              <div className="relative ">
                <button
                  className={`border-2 px-4 py-2 bg-white rounded-md font-medium w-[250px] h-[45px] ${selectedOption === '' ? 'text-slate-500 border-slate-500' : 'text-black border-slate-500'}`}
                  onClick={toggleDropdown}
                >
                  {selectedOption === '' ? 'Select Gender' : selectedOption}
                </button>
                {isOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white w-[245px] shadow-md rounded-md overflow-hidden z-10">
                    <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                      setSelectedOption('Male');
                      toggleDropdown();
                    }}>
                      Male
                    </button>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                      setSelectedOption('Female');
                      toggleDropdown();
                    }}>
                      Female
                    </button>
                    <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                      setSelectedOption('Other');
                      toggleDropdown();
                    }}>
                      Other
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='font-bold p-2 text-slate-500 text-[18px] ml-[10px] mr-[20px] mt-8'>Optional</div>

          {/* -------------------------------Mobile No.----------------------------------------- */}
          <div>
            <div className='font-semibold flex flex-row'>
              <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[3px] w-[120px]'>Mobile No.</div>
              <input type="tel" className='font-mono p-2 text-[15px] cursor-pointer w-[250px] border-2 border-slate-500 rounded-md w-[245px]' min={0}
                placeholder='Enter Your Number' />
            </div>
            <div className='flex flex-row ml-[18px]'> {/*Note*/}
              <div className='text-[12px] font-bold mr-2'>Note:</div>
              <div className='text-[12px] font-semibold'>Write the Contact No. with Country Code</div>
            </div>
          </div>

            {/* ---------------------Next-------------- */}
          <button className='rounded-md bg-slate-500 mt-[20px] h-[38px] text-white font-semibold hover:bg-slate-700 focus:outline-none'>Next
          </button>

        </div>
      </div >

    </>
  )
}

export default Beforelogup