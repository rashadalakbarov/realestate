import React from 'react'

// icons
import { FaSearch } from 'react-icons/fa'
import { HiAdjustmentsHorizontal } from 'react-icons/hi2'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-cover bg-center bg-[url('/images/hero/hero.jpg')]">
        {/* Block Overlay */}
        <div className='absolute inset-0 bg-black opacity-70'></div>

        {/* Content */}
        <div className="flex justify-center items-center flex-col w-[95%] sm:w-4/5 h-full mx-auto relative z-10">
          <h1 className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium">
            The Best Way To
          </h1>
          <h1 className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4">
            Find Your Dream Home
          </h1>
          
          <p className="mt-4 text-center text-sm sm:text-base text-gray-200">
            We’ve more than 745,000 apartments, place &amp; plot.
          </p>
          
          <div className='mt-12 w-full'>
            <div className='w-full md:w-[80%] mx-auto bg-white h-[4rem] sm:h-[5rem] flex px-4 sm:px-8 flex-col justify-center rounded-lg'>
              <div className='flex items-center justify-between h-full'>
                <input type="text" className=" sm:flex-[0.8]  h-[60%] bg-gray-100 block rounded-lg outline-none px-4 placeholder:text-gray-800 placeholder:text-sm" placeholder="Enter an address, city, or ZIP to buy" />

                <div className='flex items-center flex-[0.2] ml-8 space-x-6'>
                  <div className='lg:flex hidden items-center cursor-pointer space-x-2'>
                    <HiAdjustmentsHorizontal className='text-gray-700 w-6 h-6'/>
                    <p className="text-gray-700 font-semibold">Advanced</p>
                  </div>
                  <div className='w-12 h-12 bg-rose-600 flex items-center hover:bg-rose-800 transition-all duration-150 cursor-pointer justify-center text-white rounded-full'>
                    <FaSearch/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero