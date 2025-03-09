import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface NolayoutProps {
    children: React.ReactNode;
}

const NoLayout = ({children}: NolayoutProps) => {
  return (
    <>
        <Header/>
        <div className='pt-24 pb-24'>
            <div className="w-[80%] mx-auto">
                {children}
            </div>
        </div>        
        <Footer/>
    </>
  )
}

export default NoLayout