import React from 'react'

// components
import ProfileTitle from './ProfileTitle'

// icons
import { FaEye } from 'react-icons/fa';
import { IoMdAnalytics } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';

type StatsItem = {
    title: string;
    value: number;
    time: string;
    icon: React.ComponentType;
  }

const statsData: StatsItem[] = [
    {
        title: "Views",
        value: 4000,
        time: "Per day",
        icon: FaEye,
    },
    {
        title: "Visits",
        value: 7000,
        time: "Per minutes",
        icon: IoMdAnalytics,
    },
    {
        title: "Orders",
        value: 900,
        time: "Per day",
        icon: CiDeliveryTruck,
    },
];

const ProfileStats = () => {
  return (
    <div className='rounded-lg bg-white p-4'>
        <ProfileTitle>Sales</ProfileTitle>

        <div className='flex justify-between rounded-lg p-10 bg-red-50'>
            { statsData.map((item)=>(
                <div key={item.title} className='flex flex-col gap-3'>
                    <span className='flex h-12 w-12 items-center justify-center rounded-full bg-red-100 p-2'><item.icon /></span>
                    <span className='text-slate-400'>{item.title}</span>
                    <h1 className='text-3xl'>{item.value}</h1>
                    <span className='text-slate-400'>{item.time}</span>
                </div>
            )) }
        </div>
    </div>
  )
}

export default ProfileStats