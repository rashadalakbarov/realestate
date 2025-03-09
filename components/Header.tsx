"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2';

export const navLinks = [
    {
      id: 1,
      url: "#",
      label: "Alqı-satqı",
    },
    {
      id: 2,
      url: "#",
      label: "Kirayə",
    },
    {
      id: 3,
      url: "#",
      label: "Günlük",
    },
    {
      id: 4,
      url: "agentlikler",
      label: "Agentliklər",
    },
    {
      id: 5,
      url: "#",
      label: "Yaşayış Kompleksləri",
    },
];

const Header = () => {
    const [navBg, setNavBg] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    const navOpen =showNav ? "translate-x-0" : "translate-x-[-100%]"

    useEffect(() => {
      const handler = () => {
        if(window.scrollY >= 90 ) setNavBg(true)
            if(window.scrollY < 90 ) setNavBg(false)
      }

      window.addEventListener("scroll", handler)

      return () => {
        window.removeEventListener("scroll", handler)
      }
    }, [])
    
  return (
    <div>
        {/* Navbar */}
        <div className={`fixed ${navBg ? "bg-gray-800" : "" } h-[10vh] z-[100]  w-full transition-all duration-200`}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* LOGO */}
                <Link href={"/"}>
                    <div className='flex items-center space-x-2 '>
                        <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col '>
                            <FaHouse/>
                        </div>
                        <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">Sərfəli Əmlak</h1>
                    </div>
                </Link>
                
                {/* Nav Links */}
                <div className='lg:flex items-center space-x-6 text-white hidden'>
                    {
                        navLinks.map((navlink) => {
                            return (
                                <Link key={navlink.id} href={navlink.url}>
                                    <p className='font-medium hover:text-yellow-300'>{navlink.label}</p>
                                </Link>
                            )
                        })
                    }
                </div>

                {/* Login and Burger Menu */}
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-rose-400 transition-all duration-200'>
                        <FaUserCircle className='w-5 h-5'/>
                        <Link href={'/login'}><p className="font-bold text-xs sm:text-base">Login / Register</p></Link>
                    </div>
                    {/* Burger Menu */}
                    <HiBars3BottomRight onClick={openNavHandler} className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden'/>
                </div>                
            </div>
        </div>

        {/* Mobile Navbar */}        
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
            {/* nav links */}
            <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}>
                {
                    navLinks.map((navlink) => {
                        return (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className='text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-yellow-300'>{navlink.label}</p>
                            </Link>
                        )
                    })
                }
                
                {/* Close */}
                <CgClose onClick={closeNavHandler} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer'/>
            </div>
            
        </div>
    </div>
  )
}

export default Header