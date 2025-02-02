import React from 'react'
import ProfileTitle from './ProfileTitle'

type ProgressDetail = {
  title: string;
  intro: string;
  amount: number;
  color: string;
}

const progressData:ProgressDetail[] = [
  {
    title: "Sales",
    intro: "Total sales today",
    amount: 500,
    color: "bg-green-100",
  },
  {
    title: "Profit",
    intro: "Per day ratio",
    amount: 200,
    color: "bg-orange-100",
  },
  {
    title: "Orders",
    intro: "Total order today",
    amount: 200,
    color: "bg-blue-100",
  },
  {
    title: "Visits",
    intro: "Total visit today",
    amount: 350,
    color: "bg-gray-100",
  },
];

const ProfileProgres = () => {
  return (
    <div className='flex-1 rounded-md bg-white p-5'>
      <ProfileTitle>Dashboard</ProfileTitle>

      <div className="flex flex-wrap gap-4">
        {
          progressData.map((item)=>(
            <div key={item.title} className={`${item.color} flex w-[100%] items-center justify-between rounded-lg p-8 lg:w-[48%]`}>
              <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>{item.title}</h1>
                <span className='text-sm font-semibold text-gray-400'>{item.intro}</span>
              </div>
              <h1 className='text-3xl font-bold'>{item.amount} $</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProfileProgres