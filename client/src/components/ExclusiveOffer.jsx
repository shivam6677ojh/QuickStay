import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffer = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl-px-32 pt-16 md:pt-20 pb-20'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4'>
                <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.' />

                <button className='group flex items-center justify-between gap-2 font-medium cursor-pointer max-md:mt-2'>View All offers
                    <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-2 transition-all ' />
                </button>

                
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12 w-full'>
                {exclusiveOffers.map((item) => {

                    return (<div key={item._id} className='group relative min-h-72 flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center'
                        style = {{ backgroundImage: `url(${item.image})` }}>
                            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-700 font-medium rounded-full'>{item.priceOff}% OFF</p>
                            
                            <div>
                                <p className='font-medium text-2xl md:text-4xl leading-tight'>{item.title}</p>
                                <p className='mt-1 text-sm md:text-base'>{item.description}</p>
                                <p className='text-xs text-white/70 mt-3'>Expires {item.expiryDate}</p>
                            </div>
                            <button className='flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5 py-2 px-3 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur'>
                                View Offers
                                <img src={assets.arrowIcon} alt="arrow-icon" className='invert group-hover:translate-x-2 transition-all ' />
                            </button>
                    </div>)
                })}
            </div>
            
        </div>
    )
}

export default ExclusiveOffer