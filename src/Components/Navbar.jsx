import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

import img from '../../public/logo.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='z-10 font-poppins flex justify-between fixed top-0 items-center left-0 w-[100vw] h-[15vh] bg-white px-[4rem] py-2'>
       <img src={img} alt='logo'  className='w-[200px] h-[80px]'/>
       <div className='text-[#E12454] items-center flex text-[1.2rem] font-semibold w-[60%] justify-between'>
       <Link to=''>Home</Link>
       <Link to='/about'>About Us</Link>
       <Link to='/services' className='flex items-center'>Services <RiArrowDropDownLine size={34}/></Link>
       <Link to='/blogs'>Blog</Link>
       <Link to='/contact'>Contact Us</Link>
       <IoLogoWhatsapp className='text-[#25D366]  text-[3rem]' />
       </div>
    </div>
  )
}
