"use client"

import images from '@/constants/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// icons
import { LuBox } from 'react-icons/lu'
import { TbUser } from 'react-icons/tb'

type SidebarLink = {
    id: number;
    icon: React.ReactNode;
    name: string;
    path: string;
}

const SIDEBAR_LINKS: SidebarLink[] = [
    {id: 1, path: "/admin/dashboard", name:"Dashboard", icon: <LuBox/>},
    {id: 2, path: "/admin/member", name:"Members", icon: <TbUser/>},
]

const AdminSidebar = () => {    
    const [activeLink, setActiveLink] = React.useState<number>(0);

    const handleLinkClick = (index:number) => {
        setActiveLink(index);
    }
  return (
    <div className='w-16 md:w-56 fixed left-0 top-0 z-10 h-screen md:pt-0 px-4 bg-white border-r pt-8'>
        {/* Logo */}
        <div className='mb-8 flex justify-center'>
            <Image src={images.logo_text} alt='logo' width={170} height={52} className='hidden md:flex' priority />
            <Image src={images.logo} alt='logo' width={32} height={112} className='flex md:hidden' priority />
        </div>

        {/* Navigation Link */}
        <ul className='mt-6 space-y-3'>
            {
                SIDEBAR_LINKS.map((link, index) => (
                    <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}>
                        <Link href={link.path} className="flex justify-center md:justify-start items-center md:space-x-5" onClick={() => handleLinkClick(index)}>
                            <span>{link.icon}</span>
                            <span className={`text-sm text-gray-500 hidden md:flex`}>{link.name}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default AdminSidebar