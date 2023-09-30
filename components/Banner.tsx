import React from 'react'
import Table from './Table'

const Banner = () => {
  return (
    <div className='w-full h-[520px] bg-banner-image'>
        <div className='flex flex-col'>
            <div className='flex flex-col items-center text-white pt-10'>
                <p className='text-lg'>California Dreaming in</p>
                <p className='text-6xl font-extrabold'>Los Angeles</p>
            </div>
            <div className='pt-[150px] px-[60px]'>
                <Table />
            </div>
        </div>
    </div>
  )
}

export default Banner