import React from 'react'
import person_image from '../../Images/person_image.png'

const About = () => {
    return (
        <>
            <div className='my-8 mx-[200px] '>
                <div className='border-2 border-black rounded-lg pb-[50px]'>

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

        </>
    )
}

export default About