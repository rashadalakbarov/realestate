import React from 'react'

type Props = {
    title: string;
    description: string;
}

const SectionHeader = ({title, description}:Props) => {
  return (
    <div>
        <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-gray-800 capitalize'>{title}</h1>
        <p className='text-sm text-gray-700'>{description}</p>
    </div>
  )
}

export default SectionHeader