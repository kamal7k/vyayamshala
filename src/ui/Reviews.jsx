import { Carousel } from '@material-tailwind/react';
import React from 'react'
import { ImStarFull } from "react-icons/im";
const Testimonials = () => {
  return (
    <div id='reviews'>

      <h2 className="text-3xl font-bold mb-8 text-center">
        Stories of our <span className="text-yellow-400">Vyayamshala</span> Family
      </h2>
      <Carousel>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          {/* Left Side: Before and After Images */}
          <div className="relative w-96 h-96">
            <div className="absolute left-0 top-0 z-2">
              <img
                src="./image/after.jpg"
                alt="After"
                className="rounded-3xl w-75 h-72 object-cover"
              />
              <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-lg">After</span>
            </div>
            <div className="absolute right-0 bottom-9">
              <img
                src="./image/before.png"
                alt="Before"
                className="rounded-3xl w-50 h-60 object-cover"
              />
              <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-lg">Before</span>
            </div>
          </div>

          {/* Right Side: Testimonial Text */}
          <div className="flex flex-col justify-center items-start text-left max-w-lg ">
            <div className="text-5xl font-serif leading-tight mb-4 text-yellow-400">“</div>
            <p className="text-lg italic">
              One day I teased a man by asking if his large stomach was a beer belly or a very big baby bump. He was offended and let me know it. Not five minutes later while I was still talking to him, a woman asked when I was due. I wasn't pregnant, just fat. And that's what made it funny.
            </p>
            <div className="mt-4 flex space-x-52">
              <div className='space-y-2'>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <ImStarFull key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <div className="font-bold">Nikocado Avakado, influencer</div>
              </div>
              <div className="text-5xl font-serif leading-tight mb-4 text-yellow-400">”</div>
            </div>
          </div>
        </div>
        {/* 2nd Carousel */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          {/* Left Side: Before and After Images */}
          <div className="relative w-96 h-96">
            <img
              src="./image/b-a.png"
              alt="before/after"
              className=''
            />

          </div>

          {/* Right Side: Testimonial Text */}
          <div className="flex flex-col justify-center items-start text-left max-w-lg ">
            <div className="text-5xl font-serif leading-tight mb-4 text-yellow-400">“</div>
            <p className="text-lg italic">
              One day I teased a man by asking if his large stomach was a beer belly or a very big baby bump. He was offended and let me know it. Not five minutes later while I was still talking to him, a woman asked when I was due. I wasn't pregnant, just fat. And that's what made it funny.
            </p>
            <div className="mt-4 flex space-x-52">
              <div className='space-y-2'>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <ImStarFull key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <div className="font-bold">Nikocado Avakado, influencer</div>
              </div>
              <div className="text-5xl font-serif leading-tight mb-4 text-yellow-400">”</div>
            </div>
          </div>
        </div>
      </Carousel>

    </div>
  )
}

export default Testimonials