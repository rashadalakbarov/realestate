import React from 'react'

interface ProfileLayoutProps {
    children: React.ReactNode;
}

const ProfileLayout = ({children}:ProfileLayoutProps) => {
  return (
    <div className='flex h-screen bg-gray-50 justify-center items-center'>
        {children}
    </div>
  )
}

export default ProfileLayout