import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

    const navigate = useNavigate();
    return (
        <div className=' flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-12'>

            <Title title={"Featured Destinations"} subTitle={"Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."} align="center" />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 w-full'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={index} room={room} index={index} />
                ))}
            </div>

            <button
                onClick={() => {navigate('/rooms'); scrollTo(0,0)}}
                className="my-16 px-5 py-2.5 text-sm font-medium border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-all cursor-pointer"
            >
                View All Destinations
            </button>

        </div>
    )
}

export default FeaturedDestination