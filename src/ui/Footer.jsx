import React from 'react'
const Footer = () => {
  return (
    <div id='contact' className='p-10 text-gray-300'>
      <footer className="md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-6">
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-2xl">Contact</h3>
            <p className="mb-2">Lakeside 15th street</p>
            <p className="mb-2">Pokhara, Nepal</p>
            <p>Phone: +977 0000000000</p>
          </div>
          <div className='rounded-lg h-64'>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.905571083218!2d83.95488277516478!3d28.210181403135227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595f8b38c9001%3A0x43a4d6819bbaba1c!2sVyayamshala%20Gym%20%26%20Fitness%20Centre!5e0!3m2!1sen!2snp!4v1728790141605!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>Copyright © 2024 Vyayamshala</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.facebook.com" className="text-2xl hover:text-yellow-400 transition-colors">f</a>
            <a href="https://www.instagram.com" className="text-2xl hover:text-yellow-400 transition-colors">in</a>
            <a href="https://www.youtube.com" className="text-2xl hover:text-yellow-400 transition-colors">YT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer