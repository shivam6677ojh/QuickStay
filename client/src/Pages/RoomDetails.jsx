import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setmainImage] = useState(null)


    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setmainImage(room.images[0])
    }, [id])


    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32 '>
            {/*     rOOM dETAILS */}

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-xs'>({room.roomType})</span>
                </h1>
                <p className='text-xs w-fit font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>

            {/* Room Rating */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            {/* Room Address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/* Room Image */}
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room - Image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setmainImage(image)} key={index} src={image} alt="Room Image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>

            {/* Room Hightlights */}

            <div className='mt-10 flex items-center justify-between'>
                <h2 className='font-playfair md:text-3xl'>Experience Luxury Like Never Before</h2>
                <p className='text-xl text-black font-bold'>$299/night</p>

            </div>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index) => (
                    <div key={index} className='flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F3F4F6]/70'>
                        <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                        <p className='text-xs'>{item}</p>
                    </div>
                ))}
            </div>


            {/*  checkIn checkOut Form */}

            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.25)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

                <div className='flex flex-col flex-wrap md:flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col'>
                        <label htmlFor="heckInDate" className='font-medium'>Check-In</label>
                        <input type="date" id='checkInDate' placeholder='Check-In' className='width-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

                    <div className='flex flex-col'>
                        <label htmlFor="heckOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id='checkOutDate' placeholder='Check-Out' className='width-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" id='guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-4 py-2 mt-1.5 outline-none' required />
                    </div>

                </div>

                <button type='submit' className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max:-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                    Check Availability
                </button>


            </form>


            {/* Common Specifications */}
            <div className='mt-25 space-y-4 mb-10'>
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className='w-11/12 md:w-2/3 lg:w-[40%] h-px bg-gray-400/70 mb-10'></div>

                <p className='w-11/12 md:w-2/3 lg:w-[40%] text-xs font-playfair text-gray-700'>
                    Guests will be allocated on the ground floor according to availability. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
                </p>

                <div className='w-11/12 md:w-2/3 lg:w-[40%] h-px bg-gray-400/70 mt-10'></div>
            </div>


            {/* Hosted By  */}

            {/* Hosted By */}
            <div className='flex flex-col left-0 items-start gap-5 pt-4 pb-4 pr-4 border mt-4 border-gray-50 rounded-xl shadow-sm'>

                {/* Header */}
                <h2 className='text-2xl font-playfair text-gray-800'>
                    Hosted by {room.hotel.owner.name}
                </h2>

                {/* Host Info */}
                <div className='flex items-center gap-4'>
                    <div>
                        <img
                            src={room.hotel.owner.image}
                            alt={`Profile of ${room.hotel.owner.name}`}
                            className='w-4 h-4 rounded-full object-cover'
                        />
                    </div>
                    <div>
                        <p className='text-lg font-semibold text-gray-900'>
                            {room.hotel.owner.name}
                        </p>
                        <p className='text-sm text-gray-500'>
                            Superhost • 3 years hosting
                        </p>
                    </div>
                </div>

                {/* Host Bio/Description */}
                <p className='text-gray-600 leading-relaxed'>
                    {room.hotel.owner.bio || "Our host is dedicated to providing a fantastic stay for our guests. Don't hesitate to reach out with any questions you might have!"}
                </p>

                {/* Contact Button */}
                <Link to='/contactHere' className='mt-2 px-6 py-3 cursor-pointer bg-black text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all'>
                    Contact Host
                </Link>
            </div>


        </div>
    )
}

export default RoomDetails