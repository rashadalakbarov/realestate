import React from 'react'

interface ProfileTitleProps {
  children: React.ReactNode
}

const ProfileTitle = ({children}:ProfileTitleProps) => {
  return (
    <div className='mb-4 inline-block'>
      <h1 className='translate-all cursor-default border-b-2 border-slate-300 pb-3 text-2xl font-semibold text-slate-700 ease-in-out hover:border-blue-700 duration-700'>
        {children}
      </h1>
    </div>
  )
}

export default ProfileTitle