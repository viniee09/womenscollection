import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
            Our curated collection offers a wide range of fashion-forward pieces designed to celebrate every woman's unique personality.
            Whether you're looking for casual chic, professional elegance, or evening glamour, we have something to suit every occasion.
            Explore our exclusive range of high-quality clothing, accessories, and more, crafted with care and attention to detail. 
            Discover timeless trends, stunning designs, and everything you need to elevate your wardrobe today.

 
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>9730915957</li>
                <li>contact@womenscollection.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@womenscollection.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
