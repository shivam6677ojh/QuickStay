import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBooking = () => {


    const [booking, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>


            <Title title='My Bookings' subTitle='Easily manage past, current upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left' />


            <div className='max-w-10xl mt-8 w-full text-gray-800'>
                <div className=' md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Dates & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

            </div>

            {booking.map((booking) => (
                <div
                    key={booking._id}
                    className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] gap-4 w-full border-b border-gray-300 py-6 first:border-t items-center"
                >
                    {/* Hotel Details */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Hotel Image */}
                        <img
                            src={booking.room.images[0]}
                            alt="hotel-img"
                            className="w-full md:w-44 h-32 md:h-28 object-cover rounded-lg shadow-sm"
                        />

                        {/* Hotel Info */}
                        <div className="flex flex-col justify-center">
                            <p className="font-playfair text-2xl text-gray-600">
                                {booking.hotel.name} <span className="text-sm text-gray-500">({booking.room.roomType})</span>
                            </p>

                            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                                <img
                                    src={assets.locationIcon}
                                    alt="location-icon"
                                    className="w-4 h-4"
                                />
                                <span>{booking.hotel.address}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                                <img
                                    src={assets.guestsIcon}
                                    alt="guests-icons"
                                    className="w-4 h-4"
                                />
                                <span>Guest: {booking.guests}</span>
                            </div>
                            <p className='text-base'>
                                Total : ${booking.totalPrice}
                            </p>
                        </div>
                    </div>

                    {/* Dates & Timings */}
                    <div className="flex flex-col justify-center mt-4 md:mt-0 text-gray-700">
                        <p className="font-medium">Check-In:</p>
                        <p className="text-sm text-gray-500">
                            {new Date(booking.checkInDate).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </p>
                        <p className="font-medium">Check-Out:</p>
                        <p className="text-sm text-gray-500">
                            {new Date(booking.checkOutDate).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                            })}
                        </p>
                    </div>



                    {/* Payment */}
                    {/* <div className="flex flex-col items-start justify-center pt-3 ">
                        <div className='flex items-center gap-2'>
                            <div className={`h-3 w-3  rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}>
                            </div>
                            <p className={`text-sm gap-3 ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>
                                {booking.isPaid ? "Paid" : "Unpaid"}
                            </p>
                        </div>
                        {!booking.isPaid && (
                            <button>Pay Now</button>
                        )}
                    </div> */}
                    {/* Payment */}
                    <div className="flex flex-col items-start justify-center pt-3 md:pt-0">
                        {/* Payment Status */}
                        <div className="flex items-center gap-2 mb-3">
                            <div
                                className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"
                                    }`}
                            ></div>
                            <span
                                className={`text-sm font-medium ${booking.isPaid ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {booking.isPaid ? "Paid" : "Unpaid"}
                            </span>
                        </div>

                        {/* Payment Button (only if unpaid) */}
                        {!booking.isPaid && (
                            <button
                                className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-all duration-200 active:scale-95"
                            >
                                Pay Now
                            </button>
                        )}
                    </div>

                </div>
            ))}

        </div>
    )
}

export default MyBooking