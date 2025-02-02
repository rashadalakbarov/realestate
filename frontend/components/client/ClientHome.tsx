import React from 'react'

// components
// import properties from '@/constants/properties'
import Image from 'next/image'
import images from '@/constants/image'
import { FaLocationDot } from 'react-icons/fa6'

const ClientHome = () => {
  return (
    <div className='relative h-[100vh]'>
      <Image src={images.home_image} fill alt='home image' className='w-full h-full object-cover' />

      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50 flex items-center justify-center'>
        <div className='text-center text-white px-4 max-w-5xl'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tighter p-3'>Where Meets to Life</h1>
          <p className='text-lg md:text-2xl mb-8'>Exclusive estates and architecturial masterpieces in California</p>
          <div className='bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md mx-auto max-w-2xl'>
            <div className='flex flex-col gap-3 md:flex-row'>
              <input type="text" placeholder='Search by location' className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200'/>

              <select name="" id="" className='px-4 py-3 rounded-lg text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <option value="">House</option>
                <option value="">Apartment</option>
                <option value="">Villa</option>
              </select>

              <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>Search</button>
            </div>

            <div className='grid grid-cols-3 gap-3 mt-6'>
              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer'>
                <FaLocationDot className='mb-2 text-blue-600'/>
                <span className='font-semibold text-white'>Beverly Hills</span>
              </div>

              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer'>
                <FaLocationDot className='mb-2 text-blue-600'/>
                <span className='font-semibold text-white'>Beverly Hills</span>
              </div>

              <div className='flex flex-col p-3 items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer'>
                <FaLocationDot className='mb-2 text-blue-600'/>
                <span className='font-semibold text-white'>Beverly Hills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientHome