import React from 'react';
import { Play, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router';
// import Login from '../auth/Login';
import Footer from '../../ui/Footer';
import Header from '../../ui/Header';
import Facilities from '../../ui/Facilities';
import Add from '../auth/Add';
const Main = () => {
  const nav = useNavigate();
  return (
    <div className="bg-black text-white min-h-screen p-7">

      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center p-8">
        <div className="max-w-lg mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join The World Of Fitness.</h1>
          <p className="mb-6">Our aim is to bring more people into fitness so that every individual, family, society and whole nation...</p>
          <div className='flex gap-3 mb-5'>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full mr-4 mb-4 md:mb-0">Join Now</button>
            <button className="flex items-center"><Play className="mr-2" /> Watch video</button>
          </div>
          {/* Stats */}
          <div className="flex justify-around">
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-4xl font-bold">7</div>
              <div>Years experience</div>
            </div>
            <div className="text-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-4xl font-bold">25k+</div>
              <div>Happy customers</div>
            </div>
            <div className="text-center w-full sm:w-auto">
              <div className="text-4xl font-bold">95</div>
              <div>Expert trainers</div>
            </div>
          </div>

        </div>
        <div>
          <img src="./image/poster.png" alt="Fitness model" className="rounded-lg w-full md:w-auto" />
        </div>
      </section>


      {/* Services */}
      <section className="p-8 flex">
        <div className='justify-items-start'>
          <h2 className="text-3xl font-bold mb-4">We provide service that fits the best for you.</h2>
          <p className="mb-6 ">Strive for greatness with the best, around the best, and in the best fitness environment available in the city</p>
          <button className="mt-8 border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full">See All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Whole body fat loss', icon: './icons/stretch.png' },
            { name: 'Yoga', icon: './icons/meditation.png' },
            { name: 'Bodybuilding', icon: './icons/fitness.png' },
            { name: 'Cardio', icon: './icons/squats.png' },
            { name: 'Zumba', icon: './icons/zumba.png' },
            { name: 'Free Weights', icon: './icons/lifting-weight.png' }
          ].map((service, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={service.icon} alt={service.name} className="w-12 h-12" />
              <span>{service.name}</span>
            </div>
          ))}
        </div>

      </section>


      {/* Testimonials */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Stories of our <span className="text-yellow-400">Vyayamshala</span> Family
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
          {/* Left Side: Before and After Images */}
          <div className="relative w-80 h-96">
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
              A complete package to all the fitness freaks out there. Join soon and test yourself. Vyayamshala's layouts, environment, and its surroundings play a vital role to motivate and push beyond your limitation.
            </p>
            <div className="mt-4">
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <div className="font-bold">Nikocado Avakado, influencer</div>
            </div>
          </div>
        </div>
      </section>



      {/* Facilities */}
      <Facilities />

      {/* Trainers */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-4">Meet our Trainers</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: 'Aniz Shrestha', image: './image/trainers/t1.jpg' },
            { name: 'Chris Thapa', image: './image/trainers/t2.jpg' },
            { name: 'Sunil Chetri', image: './image/trainers/t3.jpg' },
            { name: 'Priya K.C', image: './image/trainers/t4.jpg' },
            { name: 'Rita Puri', image: './image/trainers/t5.jpg' },
            { name: 'Santosh Adhikari', image: './image/trainers/t6.jpg' }
          ].map((trainer, index) => (
            <div key={index} className="text-center">
              <img src={trainer.image} alt={trainer.name} className=" mx-auto mb-2  h-70 object-cover" />
              <div>{trainer.name}</div>
            </div>
          ))}
        </div>
        <button className="mt-8 border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full">View All</button>
      </section>


      {/* Call to Action */}
      <section className="p-8 bg-gray-900">
        <h2 className="text-3xl font-bold mb-4">What's Stopping you?</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="./image/regi.jpg" alt="Fitness motivation" className="rounded-lg" />
          </div>
          {/* <div className="md:w-1/2 md:pl-8"> */}


          <Add/>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;