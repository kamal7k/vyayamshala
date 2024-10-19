import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="p-8 bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Vyayamshala</h3>
            <p>Join The World Of Fitness</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p>Address: Pokhara, Nepal</p>
            <p>Phone: +977 9876543210</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <div className="h-50 w-2 bg-gray-700 rounded">
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.905571083218!2d83.95488277516478!3d28.210181403135227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595f8b38c9001%3A0x43a4d6819bbaba1c!2sVyayamshala%20Gym%20%26%20Fitness%20Centre!5e0!3m2!1sen!2snp!4v1728790141605!5m2!1sen!2snp" ></iframe> */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>Copyright © 2024 Vyayamshala</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://www.facebook.com" className="text-2xl">f</a>
            <a href="#" className="text-2xl">in</a>
            <a href="#" className="text-2xl">YT</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer