"use client"
import React from 'react'
import { agentsData } from '@/data/agents'
import Link from 'next/link'
import SectionHeader from '@/helpers/SectionHeader'
import Image from 'next/image'

const AgentliklerLists = () => {
  return (
    <>
        <SectionHeader title="daşınmaz əmlak agentlikləri" description="bakıdan olan əmlak agentliklərini buradan izləyə bilərsiniz." />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10 md:mt-20'>
            {
                agentsData.map((agent) => {
                    return (
                        <Link href={`/agentlikler/${agent.id}`} key={agent.id}>
                            <div className='relative group border rounded-lg shadow-lg overflow-hidden'>
                                <Image src={agent.logo} alt={agent.title} width={200} height={200} priority className='object-cover w-full'/>
                                <div className="absolute inset-0 bg-black opacity-40"></div>
                                <div className='absolute p-4 top-4 text-white'>
                                    <h1 className='text-2xl capitalize mb-1 font-bold'>{agent.title}</h1>
                                    <p className='mb-8 text-white-400'>{agent.count} təklif</p>
                                    <p className='line-clamp-4'>{agent.description}</p>
                                </div>
                            </div>                            
                        </Link>
                    )
                })
            }
        </div>        
    </>
  )
}

export default AgentliklerLists