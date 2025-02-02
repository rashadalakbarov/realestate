import React from 'react'

// components
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';

interface AdminDashboardLayoutProps {
    children: React.ReactNode;
}

const AdminDashboardLayout = ({children}:AdminDashboardLayoutProps) => {
  return (
    <div className='flex'>
      <AdminSidebar/>
      <div className='w-full ml-16 md:ml-56'>
        <AdminHeader/>
        {children}
      </div>
    </div>
  )
}

export default AdminDashboardLayout