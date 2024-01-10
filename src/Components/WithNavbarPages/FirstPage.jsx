import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from './Dashboard'

const FirstPage = () => {
  return (
    <>
    <Navbar/>

    <div className='p-4'>
      <div className='font-bold text-[35px] m-4 mx-8'>
      Hi, Sanje
    </div>

    <div className='flex flex-row'>
      <div className='' id='dashboard'><Dashboard health={60}/></div>
      <div className='' id='task'>Today Task
        <div className=''>

        </div>
      </div>
    </div>
    </div>
    
    


    </>
  )
}

export default FirstPage