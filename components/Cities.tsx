"use client"

import React from 'react'

import SectionHeader from '@/helpers/SectionHeader'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { cities } from '@/data/data';

import CityCard from '@/helpers/CityCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

const Cities = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[80%] mx-auto'>
            <SectionHeader title="Explor City Properties" description="Lorem ipsum dolor, sit amet" />

            <div className='mt-10 md:mt-16'>
                <Carousel responsive={responsive} arrows={true} autoPlay={true} autoPlaySpeed={5000} infinite>
                    {
                        cities.map((city) => {
                            return (
                                <div key={city.id}>
                                    <CityCard city={city} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Cities