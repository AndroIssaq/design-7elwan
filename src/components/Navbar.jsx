/* eslint-disable no-unused-vars */

import React from 'react'
import logo from '../assets/logo.png'
import {TfiShoppingCart,TfiSearch} from 'react-icons/tfi'
import {FaFacebookF,FaLinkedinIn,FaBehance,FaTwitter} from 'react-icons/fa'
// eslint-disable-next-line no-unused-vars
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoMenuOutline} from 'react-icons/io5'
import MainCategories from './MainCategories'
const Navbar = () => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <>
    <nav className='w-full relative mt-[20px] border-b border-second lg:pb-[30px] md:pb-[30px] pb-[0px]'>
        <div className="container lg:px-[100px]">

            <div className='  lg:hidden md:hidden sm:flex flex items-center justify-between w-full h-[70px] mb-[10px]'>
                <button><span className=' cart-icon text-[25px] flex-1 relative '>
                    <TfiShoppingCart/>
                    <span className={` flex items-center justify-center`}>0</span>
                    </span>
                </button>

            <Link to={'/'}><div className="img flex-1 w-[150px]  lg:hidden md:hidden sm:block block "><img src={logo} alt="" className='w-[100%] object-cover' /></div></Link>

            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:hidden md:hidden sm:block block text-[35px]'><IoMenuOutline/></button>
            </div>

            <div className="content flex items-center lg:justify-center md:justify-center sm:justify-between justify-between  h-[70px] lg:gap-[100px] md:gap-[30px] sm:gap-[20px] gap-[10px]">
                <button className='lg:block md:block sm:hidden hidden'><span className=' cart-icon text-[25px] flex-1 relative '>
                    <TfiShoppingCart/>
                    <span className={` flex items-center justify-center`}>0</span>
                    </span>
                </button>

                <div className='flex relative items-center justify-center flex-[2]'>
                    <input type="text" className='w-full text-right'  placeholder='ابحث عن المنتجات '/> <span className=' cursor-pointer text-[20px] text-[#a2a0a0] absolute left-0 w-[20%] flex items-center justify-center border-r h-full border-[#a2a0a0]'><TfiSearch/></span>
                </div>

                <Link to={'/'}><div className="img flex-1 lg:w-[150px] md:w-[120px] lg:block md:block sm:hidden hidden "><img src={logo} alt="" className='w-[100%] object-cover' /></div></Link>
            </div>
        </div>
    </nav>

    {/* Links Under Navbar*/}
    <MainCategories/>

    {/* Mobile Navbar */}
    <div className={`mobile-nav lg:hidden md:hidden flex ${openMenu?'fade-in':'fade-out'}  absolute w-[100%]  flex flex-col items-center justify-start gap-[40px] pt-[20px]`}>
     <Link to={'/'}>
       <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>أقوي العروض</h1></button>
        </Link>
        <Link to={'/ourteam'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1> غرف المعيشة </h1></button>
        </Link>
        <Link to={'portfolio'}> 
        <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>غرف النوم</h1></button>
        </Link>
        <Link to={'/contactus'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>غرف السفرة</h1></button>
       </Link>
       <Link to={'/contactus'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>ترابيزات و حافظات أحذية</h1></button>
       </Link>
       <Link to={'/contactus'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>أثاث الحدائق</h1></button>
       </Link>
       <Link to={'/contactus'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>إضاءة</h1></button>
       </Link>
       <Link to={'/contactus'}>
            <button onClick={()=>setOpenMenu(!openMenu)} className='lg:text-[40px] md:text-[40px] text-[25px]'><h1>مطابخ</h1></button>
       </Link>

        <div className="icons text-main flex items-center gap-[20px] ">
            <span className=' cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaFacebookF/></span>
            <span className=' cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaLinkedinIn/></span>
            <span className=' cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaBehance/></span>
            <span className=' cursor-pointer lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaTwitter/></span>
        </div>
    </div>
    </>
  )
}

export default Navbar

/* 

    
          
                */ 