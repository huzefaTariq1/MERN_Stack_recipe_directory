import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    let [open, setOpen] = useState(false);
    let [searchOpen, setSearchOpen] = useState(false);
    let navigate = useNavigate();
    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-red-400 py-4 md:px-10 px-7'>
                <div className='flex items-center justify-center'>
                    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                        <span className='text-sm text-white mr-1 pt-2'>
                            {/* <ion-icon name="logo-ionic"></ion-icon> */}
                            <img className='w-6' src={window.location.origin + '/img/logo.png'} alt="logo" />
                        </span>
                        <h1 className='text-white'> Recipe Foods</h1>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-xs absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                        {/* <ion-icon name={open ? 'close' : 'menu'}></ion-icon> */}
                        {!open && <img className='w-5' src={window.location.origin + '/img/hamburger.png'} alt='hamburger' />}
                        {open && <img className='w-6' src={window.location.origin + '/img/cross.png'} alt='cross' />}
                    </div>

                    <ul className={` md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-red-400 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>

                        <li className='md:ml-8 text-xl md:my-0 my-7 w-fit'>
                            <NavLink to="/" className=' text-white hover:text-white hover:font-bold cursor-pointer duration-500 fromLeft '>Home</NavLink>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 w-fit'>
                            <NavLink to="/" className=' text-white hover:text-white hover:font-bold cursor-pointer duration-500 fromLeft '>Home</NavLink>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7 w-fit'>
                            <NavLink to="/recipes/1" className=' text-white hover:text-white hover:font-bold cursor-pointer duration-500 fromLeft '>Home</NavLink>
                        </li>

                        {open && <>
                            <div className='mt-2 flex justify-center text-white'>
                                <img onClick={() => setSearchOpen(!searchOpen)} className='mx-2 w-5' src={window.location.origin + '/img/icon.png'} alt='icon' ></img>
                                {searchOpen && <input className='border rounded-lg pl-3  w-32 focus:outline-none focus:border-grey-500 focus:ring-grey-500  focus:ring-1 sm:mr-2' type="text" placeholder='Enter text' />}
                                <button onClick={() => navigate("/create")} className='outline outline-offset-2 outline-1 bg-red-400 cursor-pointer hover:bg-red-500 p-1 px-2 text-white rounded-lg'> Create Recipe</button>
                            </div>
                        </>}



                    </ul>
                </div>

                {!open && <>
                    <div className='mt-2 justify-center md:block hidden text-white '>
                        <div className='flex'>
                            <img onClick={() => setSearchOpen(!searchOpen)} className='mx-2 w-5'  src={window.location.origin + '/img/icon.png'} alt='icon' ></img>
                            {searchOpen && <input className='border rounded-lg pl-3  w-32 focus:outline-none focus:border-grey-500 focus:ring-grey-500  focus:ring-1 sm:mr-2' type="text" placeholder='Enter text' />}
                            <button onClick={() => navigate("/create")} className='outline outline-offset-2 outline-1 bg-red-400 cursor-pointer hover:bg-red-500 p-1 px-2 text-white rounded-lg'> Create Recipe</button>
                        </div>
                    </div>
                </>}

            </div>
        </div>
    )
}

export default Navbar









