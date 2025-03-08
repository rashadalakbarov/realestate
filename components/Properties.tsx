import React from 'react'
import SectionHeader from '@/helpers/SectionHeader'
import { propertiesData } from '@/data/data'
import PropertyCard from '@/helpers/PropertyCard'

const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <div className='w-[80%] mx-auto'>
            <SectionHeader title="Discover Our Properties" description="Lorem ipsum dolor, sit amet" />

            <div className='mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
                {
                    propertiesData.map((property) => {
                        return (
                            <div key={property.id}>
                                <PropertyCard property={property} />
                            </div>
                        )
                    })
                }
            </div>
        </div>        
    </div>
  )
}

export default Properties