import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Dashboard from './Dashboard'
import { AverageMarksContext } from './AverageMarksContext';

const FirstPage = () => {
  const { averageMarks } = useContext(AverageMarksContext);
  console.log('Average Marks:', averageMarks);
  return (
    <>
     <Navbar/>
      <div className='p-4'>
        <div className='font-bold text-[35px] m-4 mx-8'>
          Hi, Sanje
        </div>
        <div className='flex flex-row'>
          <div className='' id='dashboard'><Dashboard health={averageMarks}/></div>
          <div className='' id='task'>Today Task
            
          </div>
        </div>
      </div>
    </>
    
    
  )
}

export default FirstPage