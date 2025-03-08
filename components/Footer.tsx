import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

// constants
import images from '@/constants/images'
import company from '@/constants/company'


const Footer = () => {
  return (
    <footer className="w-full bg-black p-8 text-white">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
            <Image src={images.logo} alt="logo" className="w-10" width={0} height={0}/>

            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Link href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500" > Haqqımızda </Link>
                </li>
                <li>
                    <Link href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500" > İstifadəçi razılaşması </Link>
                </li>
                <li>
                    <Link href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500" > Məxfilik siyasəti </Link>
                </li>
                <li>
                    <Link href="#" color="blue-gray" className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500" > Reklam yerləşdirin </Link>
                </li>
            </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <div className="flex w-full flex-col items-center justify-center border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <div className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0" >
                &copy; 2024-{new Date().getFullYear()} {company.name}. Bütün hüquqlar qorunur.
            </div>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                {
                    company.social.map((social, i) => (
                        <Link key={i} href={social.url}  target="_blank" className="opacity-80 transition-opacity hover:opacity-100">
                            <social.icon className="h-5 w-5"/>
                        </Link> 
                    ))
                }
                     
            </div>
        </div>
    </footer>
  )
}

export default Footer