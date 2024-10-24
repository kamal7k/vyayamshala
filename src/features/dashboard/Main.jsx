import React from 'react';
import Footer from '../../ui/Footer';
import Header from '../../ui/Header';
import Facilities from '../../ui/Facilities';
import Trainers from './Trainers';
import Testimonials from '../../ui/Reviews';
import About from '../../ui/About';
import Services from '../../ui/Services';
import Join from '../../ui/Join';
const Main = () => {

  return (
    <div className="bg-black text-white min-h-screen p-7">
      <Header />
      <About/>
      <Services/>
      <Testimonials />
      <Facilities />
      <Trainers />
      <Join/>
      <Footer />
    </div>
  );
};

export default Main;