import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMan } from 'react-icons/io5'
import { BiCalendar } from 'react-icons/bi'

const Table = () => {
    const bannerItem = [
        {
            "icon": <HiOutlineLocationMarker size={20} className='text-yellow-600' />,
            "title": "Leaving from",
            "label": "London(LON)"
        },
        {
            "icon": <HiOutlineLocationMarker size={20} className='text-yellow-600' />,
            "title": "Going to",
            "label": "Airport code or city name"
        },
        {
            "icon": <IoMan size={20} className='text-yellow-600' />,
            "title": "Passengers",
            "label": "1 passenger"
        },
        {
            "icon": <BiCalendar size={20} className='text-yellow-600' />,
            "title": "Depart",
            "label": "Departure date"
        },
        {
            "icon": <BiCalendar size={20} className='text-yellow-600' />,
            "title": "Return",
            "label": "Return date"
        }
    ]
    return (
        <div className=''>
            <div className='flex'>
                <div className='bg-white py-2 px-4 text-xs text-sky-500 font-semibold border border-sky-500 rounded-t-lg'>flight</div>
                <div className='bg-blue-500 py-2 px-4 text-white text-xs font-semibold border border-sky-500 rounded-t-lg'>hotels</div>
                <div className='bg-blue-500 text-white py-2 px-4 text-xs font-semibold border border-sky-500 rounded-t-lg'>flight + hotels</div>
            </div>
            <div className='w-full bg-white border-sky-500 rounded-b-lg rounded-r-lg grid grid-cols-10'>
                <div className='col-start-1 col-end-10 flex flex-col pt-3 px-5'>
                    <div className='flex flex-row gap-5 justify-between'>
                        {bannerItem.map((item) =>
                            <>
                                <div className='flex flex-row gap-2'>
                                    <div className='pt-1'>
                                        {item.icon}
                                    </div>
                                    <div className='flex flex-col text-xs'>
                                        <div className='text-sky-500'>
                                            {item.title}
                                        </div>
                                        <div className='text-gray-500 text-base'>
                                            {item.label}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="inline-block h-[1px] w-15 self-stretch bg-sky-500 opacity-20 mt-2"></div>
                    <div className='flex flex-row gap-5 text-xs justify-between py-2'>
                        <div className='flex gap-8'>
                            <div className='flex'>
                                <input type='checkbox' className='bg-gray-100 text-blue-300 ring-blue-300' />
                                <label htmlFor="" className='ml-2 font-medium text-gray-500'>Direct flight</label>
                            </div>
                            <div className='text-gray-500'>
                                Round trip
                            </div>
                            <div className='text-gray-500'>
                                Economy
                            </div>
                            <div className='text-gray-500'>
                                All Airlines
                            </div>
                            <div className='text-gray-500'>
                                Flexibli dates?
                            </div>
                        </div>
                        <div className='text-gray-500'>
                            Show less flight options
                        </div>
                    </div>
                </div>
                <div className='bg-green-500 flex justify-center items-center rounded-r-lg uppercase text-white text-sm font-medium'>search</div>
            </div>
        </div>
    )
}

export default Table