import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container border-4 h-[70px] flex flex-row font-bold text-xl px-8 shadow-lg'>
        <div className='flex place-items-center mx-[100px]'>@Copyright By InnerMind Oasis 2023-2034</div>
        <div className='flex place-items-center mx-[30px] cursor-pointer'>Privacy Policy</div>
        <div className='flex place-items-center mx-[30px] cursor-pointer'>About Us</div>
        <div className='flex place-items-center mx-[30px] cursor-pointer'>Terms And Conditions</div>
        <div className='flex place-items-center mx-[30px] cursor-pointer'>Contact Us</div>
      </div>
    </>
  )
}

export default Footer