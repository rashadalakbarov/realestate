import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa6'

const ClientFooter = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-4'>Real Estate CO.</h3>
          <p className='text-gray-400'>Your trusted partner in finding the perfect home</p>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-gray-400'>
            <li>Home</li>
            <li>Properties</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Contact Info</h4>
          <ul className='space-y-2 text-gray-400'>
            <li>123 Realestate ave</li>
            <li>Los Angeles, CA 9001</li> 
            <li>realestate@gmail.com</li>
            <li>558215673</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Follow us</h4>
          <div className='flex space-x-4'>
            <Link href={"/"}><FaInstagram className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer'/></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ClientFooter