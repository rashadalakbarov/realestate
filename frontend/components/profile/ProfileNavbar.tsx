import images from '@/constants/image'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiSearch, CiSettings, CiUser } from 'react-icons/ci';

const navLists = ["Dashboard", "Features", "Pricing", "About Us"];

const ProfileNavbar = () => {
  return (
    <header className='flex items-center justify-between rounded-xl bg-white px-5 py-3'>
      <div>
        <Image src={images.logo} alt='logo' width={32} height={32} className='cursor-pointer'/>
      </div>

      <nav className='hidden items-center gap-4 rounded-full bg-slate-100 md:flex'>
        {
          navLists.map((nav) => (
            <Link href={"/"} key={nav} className='translate-all rounded-full px-5 py-3 text-sm font-semibold text-slate-700 duration-700 ease-in-out hover:bg-slate-700 hover:text-white'>{nav}</Link>
          ))
        }
      </nav>

      <div className="flex items-center gap-1">
        <CiSearch className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
        <CiSettings className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
        <CiUser className='translate-all cursor-pointer text-2xl duration-700 ease-in-out hover:bg-slate-700 hover:text-white rounded-full p-1'/>
      </div>
    </header>
  )
}

export default ProfileNavbar