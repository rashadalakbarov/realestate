import React from 'react'

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({children}:AdminLayoutProps) => {
  return (
    <div className='bg-gray-50'>
        {children}
    </div>
  )
}

export default AdminLayout