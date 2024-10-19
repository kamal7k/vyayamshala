import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  // const nav = useNavigate();
  return (
    <div className='px-5'>
      {/* Navigation */}
      <nav className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex flex-col items-center">
          <img src="./image/logo.ico" alt="logo" className="h-20" />
          {/* <div className="font-bold ">Vyayamshala</div> */}
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-4">
          <Link></Link>
          <a href="#" className="text-yellow-400">Home</a>
          <a href="#">About</a>
          <a href="#">Reviews</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        {/* Menu Button for Mobile */}
        <button className="md:hidden">Menu</button>
      </nav>
    </div>
  )
}

export default Header