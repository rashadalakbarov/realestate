import React from 'react'

// components
import ProfileProgres from '@/components/profile/ProfileProgres'
import ProfileNavbar from '@/components/profile/ProfileNavbar'
import ProfileStats from '@/components/profile/ProfileStats'
import ProfileSalesData from '@/components/profile/ProfileSalesData'
import ProfileChart from '@/components/profile/ProfileChart'

const ProfileDashboardPage = () => {
  return (
    <>
        <ProfileNavbar/>

        <div className="flex flex-col items-start gap-3 md:flex-row">
            <div className="flex w-full flex-col gap-3">
                <ProfileProgres/>
                <ProfileStats/>
            </div>

            <div className='flex w-[100%] flex-col gap-3 border-2 md:w-[500px]'>
              <ProfileSalesData/>
              <ProfileChart/>
            </div>
        </div>
    </>
  )
}

export default ProfileDashboardPage