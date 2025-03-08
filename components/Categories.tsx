import React from 'react'

// helpers
import SectionHeader from '@/helpers/SectionHeader'

// data
import { categoryTypeData } from '@/data/data'

// image
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className="w-[80%] mx-auto">
            <SectionHeader title="Explore Apartment Types" description="Lorem ipsum dolor, sit amet" />
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center'>
                {
                    categoryTypeData.map((cat) => {
                        return (
                            <div key={cat.id}>
                                <div className='rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300'>
                                    <Image alt='cat' width={50} height={50} src={cat.icon}/>
                                    <div className='mt-12'>
                                        <h1 className='text-lg font-bold'>{cat.type}</h1>
                                        <p className='mt-2 text-sm text-gray-800'>{cat.number} Properties</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Categories