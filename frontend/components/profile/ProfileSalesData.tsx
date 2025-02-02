import React from 'react'

// icons
import { FaUsers } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { TbHomeStats } from 'react-icons/tb';
import { TfiStatsUp } from 'react-icons/tfi';
import ProfileTitle from './ProfileTitle';

type SalesItem = {
    title: string;
    value: string;
    icons: React.ComponentType;
  }

const salesData: SalesItem[] = [
    {
      title: "Sales",
      value: "300k",
      icons: TfiStatsUp,
    },
    {
      title: "Profit",
      value: "100k",
      icons: TbHomeStats,
    },
    {
      title: "Revenue",
      value: "500k",
      icons: FaMoneyCheckDollar,
    },
    {
      title: "Customers",
      value: "90k",
      icons: FaUsers,
    },
  ];

const ProfileSalesData = () => {
  return (
    <div className='flex-1 rounded-lg bg-white p-4'>
        <ProfileTitle>Sales Revenue</ProfileTitle>

        <div className='rounded-lg p-4 bg-slate-100'>            
            { salesData.map((item)=>(
                <div key={item.title} className='flex items-center justify-between gap-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <span className='rounded-full bg-slate-600 p-2 text-3xl font-bold text-white'><item.icons/></span>
                        <h1 className='font-semibold text-slate-500'>{item.title}</h1>                        
                    </div>
                    <span className='text-slate-700'>{item.value}</span>
                </div>
            )) }
        </div>
    </div>
  )
}

export default ProfileSalesData