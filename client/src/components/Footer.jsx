import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-#F6F9FC from-65% to-white to-50%  text-gray-500/80 pt-10 px-6 md:px-16 lg:px-24 xl:px-32 bottom-0 w-full '>
            <div className='flex flex-wrap justify-between gap-10 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert' />
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-4 mt-4'>
                        
                        <img src={assets.instagramIcon} alt="instagramIcon" className='w-6 cursor-pointer' />
                        <img src={assets.facebookIcon} alt="facebookIcon" className='w-6 cursor-pointer' />
                        <img src={assets.twitterIcon} alt="twitterIcon" className='w-6 cursor-pointer' />
                        <img src={assets.linkendinIcon} alt="linkdinIcon" className='w-6 cursor-pointer' />
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-700'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-700'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80 w-full sm:w-auto'>
                    <p className='font-playfair text-lg text-gray-700'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4 w-full max-w-sm'>
                        <input type="email" className='bg-black text-white rounded-l border border-gray-300 h-11 px-3 outline-none flex-1' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-11 w-11 aspect-square rounded-r'>
                            {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrow-icon" className='invert w-3.5' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-800 mt-12' />
            <div className='flex flex-col md:flex-row gap-3 items-center text-gray-700 justify-between py-6'>
                <p>© {new Date().getFullYear()} QuickStay. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer