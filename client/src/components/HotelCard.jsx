import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
    return (
        <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} key={room._id}
            className="relative w-full rounded-xl overflow-hidden bg-white text-gray-600 shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
           

            <img src={room.images[0]} alt={room.hotel?.name || 'Hotel image'} className="w-full h-48 object-cover" />


            {index % 2 == 0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>}
            <div className='p-4 pt-5'>
                <div className='flex items-center justify-between'>
                    <p className='font-playfair text-lg md:text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                    <div className='flex items-center gap-1'>
                        <img src={assets.starIconFilled} alt="star-icon" /> 4.5
                    </div>
                </div>

                <div className="flex items-center gap-1 text-sm">
                    <img src={assets.locationIcon} alt="location-icon" />
                    <span>{room.hotel.address}</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <p>
                        <span className="text-lg md:text-xl text-gray-800">${room.pricePerNight}</span>/night
                    </p>
                    <button className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-black rounded-lg cursor-pointer group">
                        {/* Gradient border layer */}
                        <span className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-[length:200%_200%] animate-[gradientMove_3s_ease_infinite]"></span>

                        {/* Inner background */}
                        <span className="relative rounded-lg w-full h-full bg-white group-hover:bg-gray-100 flex items-center justify-center">
                            Book Now
                        </span>
                    </button>



                </div>

            </div>
        </Link>
    )
}

export default HotelCard