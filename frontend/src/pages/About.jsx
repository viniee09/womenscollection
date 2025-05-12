import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At Women’s Collection, we believe that fashion is more than just clothing—it's a form of self-expression. Our curated collection is designed to empower women to embrace their unique style, whether they’re dressing for work, a night out, or relaxing at home. We understand that every woman is different, and that’s why we offer a variety of pieces to suit every personality, occasion, and season.</p>
              <p>We strive to make shopping easy, enjoyable, and inspiring. Whether you’re seeking the perfect outfit for a special event or looking to refresh your wardrobe, Women’s Collection is here to bring the latest in fashion directly to your doorstep</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to empower women through fashion, offering curated collections that celebrate diversity, inclusivity, and creativity. We aim to create a shopping experience that is as effortless and rewarding as the clothes we sell. At Women’s Collection, we’re not just about selling clothes—we’re about helping you express who you are and embracing your personal style.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
