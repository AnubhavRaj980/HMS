import React from 'react'
import logo from '../../Images/logo.jpg'
const Navbar = () => {
    return (
        <div>

            {/* ----------------------------------Navbar----------------------------- */}
            <div>
                <div className='flex items-center space-around space-x-4 bg-gray-300 h-[4rem]'>

                    {/* --------------------------------------Logo--------------------------- */}
                    {/* <div className="flex-initial w-59 p-4">Logo</div> */}
                    <img src={logo} alt="logo_image" className='w-[4rem] h-[4rem]' />


                    {/* -------------------------------------SearchBar-------------------------------------------- */}
                    <div className="flex flex-initial w-74 p-4 space-around">
                        <input type="text" className='input p-3 rounded-lg mr-3 w-[35rem] border-2 border-slate-300 items-center 
                        focus:outline-none focus:border-black'
                            placeholder='Search...' />
                        <button href="#" className='button p-3 rounded-lg border-2 border-slate-400 bg-gray-100'>Search</button>
                    </div>

                    {/* --------------------------Navigation---------------------------- */}
                    <div className="flex w-[35rem] items-center space-around p-4 space-around"
                        style={{ marginLeft: "43px", marginRight: " 45px" }}
                    >
                        <div href="#" className="text-black mx-8 cursor-pointer">Home</div>
                        <div href="#" className="text-black mx-8 cursor-pointer">Link1</div>
                        <div href="#" className="text-black mx-8 cursor-pointer">Link1</div>
                        <div href="#" className="text-black mx-8 cursor-pointer">Link1</div>
                        <div href="#" className="text-black mx-8 cursor-pointer">Link1</div>
                    </div>

                    {/* ----------------LogOut---------------- */}
                    <div className="bg-blue-500 p-4 rounded-full bg-slate-400">
                        <button href="#" className="text-white">Sign Out</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar