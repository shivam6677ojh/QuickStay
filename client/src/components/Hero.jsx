import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-[100vh]'>
            <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-24 md:mt-20'>
                The Ultimate Hotel Experience
            </p>

            <h1 className='font-playfair text-3xl sm:text-4xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-2xl mt-4'>
                Discover Your Perfect Gateway Destination
            </h1>

            <p className='max-w-2xl mt-3 text-base md:text-lg'>
                Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts.
                Start your journey today.
            </p>

            <form className='bg-white text-gray-700 rounded-xl px-6 py-5 mt-8 w-full max-w-3xl flex flex-col md:flex-row md:items-end gap-4 md:gap-6 shadow-lg/30 backdrop-blur-sm'>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon} alt="" className='h-4' />
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" type="text" className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type here" required />
                <datalist id='destinations'>
                    {cities.map((city, index) => (
                        <option key={index} value={city} />
                    ))}
                </datalist>
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon}  alt="" className='h-4' />
                    <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calenderIcon}  alt="" className='h-4' />
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className="w-full rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-3 py-2 mt-1.5 text-sm outline-none w-full md:max-w-16 focus:ring-2 focus:ring-blue-500" placeholder="0" />
            </div>

            <button className='flex items-center justify-center gap-2 rounded-lg bg-black py-3 px-5 text-white my-auto cursor-pointer w-full md:w-auto hover:bg-gray-900 transition-colors' >
               <img src={assets.searchIcon}  alt="searchIcon" className='h-7' />
                <span>Search</span>
            </button>
        </form>

        </div>


    )
}

export default Hero
