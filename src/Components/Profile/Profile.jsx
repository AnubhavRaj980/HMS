import React, { useState } from 'react'
import person_image from '../../Images/person_image.png'


const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(person_image);
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Update error state when gender is selected
  const handleGenderSelect = (gender) => {
    setSelectedOption(gender);
    toggleDropdown();
  };
  return (
    <>
      <div className='border-2 border-black my-8 mx-[300px] rounded-lg flex'>
        <div>
          <img className='w-60 h-64 border-2 border-black rounded-lg m-8' src={selectedImage} alt="" />
          <div className='text-center'>
            <input type="file" onChange={handleImageUpload} className='hidden' id="fileUpload" />
            <label htmlFor="fileUpload" className='bg-orange-500 rounded-lg py-2 px-4 cursor-pointer 
            hover:bg-orange-600 active:bg-orange-700'>
              Upload Photo</label>
          </div>
        </div>
        <div className='my-12 mx-14'>



          <div className='flex m-4'>
            <div className='mr-4 text-[18px] font-semibold text-slate-500'>Name</div>
            <div className=''>
              <input type="text "
                className='rounded-md border-2 p-[5px] w-[25rem] border-slate-400'
                placeholder='Name' />
            </div>
          </div>


          <div className='flex m-4 font-semibold'>
            <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[20px] '>DOB</div>
            <input type="date" className='font-mono p-2 text-[15px] w-[250px] 
            border-2 border-slate-500 rounded-md ml-[50px] w-[246px]'
              placeholder='Enter Your Age' />
          </div>

          <div className=''>
            <div className='font-semibold flex flex-row mt-8'>
              <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[43px]'>Gender</div>
              <div className=''>
                <div className='relative'>
                  <button
                    className={`border-2 px-4 py-2 bg-white rounded-md font-medium w-[250px] h-[45px] 
                  ${selectedOption === '' ? 'text-slate-500 border-slate-500' : 'text-black border-slate-500'}`}
                    onClick={toggleDropdown}
                  >
                    {selectedOption === '' ? 'Select Gender' : selectedOption}
                  </button>

                  {isOpen && (
                    <div className="absolute mt-2 w-48 bg-white w-[245px] shadow-md rounded-md overflow-hidden z-10">
                      <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                        handleGenderSelect('Male');
                        toggleDropdown();
                      }}>
                        Male
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                        handleGenderSelect('Female');
                        toggleDropdown();
                      }}>
                        Female
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-[245px]" onClick={() => {
                        handleGenderSelect('Other');
                        toggleDropdown();
                      }}>
                        Other
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>


          <div>
            <div className='font-semibold flex flex-row'>
              <div className='p-2 text-slate-500 text-[18px] ml-[10px] mr-[3px] w-[120px]'>Mobile No.</div>
              <input type="tel" className='font-mono p-2 text-[15px] cursor-pointer w-[250px] border-2 border-slate-500 
              rounded-md w-[245px]' min={0}
                placeholder='Enter Your Number' />
            </div>
            <div className='flex flex-row ml-[18px]'> {/*Note*/}
              <div className='text-[12px] font-bold mr-2'>Note:</div>
              <div className='text-[12px] font-semibold'>Write the Contact No. with Country Code</div>
            </div>
          </div>


          <div className='flex m-4'>
            <div className='mr-4 text-[25px] font-semibold'>Address</div>
            <div className='mt-[6px]'>
              <input type="text "
                className='rounded-md border-2 p-[5px] w-[25rem] border-slate-400'
                placeholder='Name' />
            </div>
          </div>

          <div>
            <button className='bg-green-500 rounded-lg py-2 px-4 m-4 text-[15px] hover:bg-green-600 active:bg-green-700'>Edit</button>
            <button className='bg-green-500 rounded-lg py-2 px-4 m-4 text-[15px] hover:bg-green-600 active:bg-green-700'>Save</button>
          </div>


          <button className='bg-red-500 rounded-lg py-2 px-4 m-4 hover:bg-red-600 active:bg-red-700'>Delete Account</button>
        </div>
      </div>

    </>
  )
}

export default Profile