import React from 'react'
import { FaSearch } from "react-icons/fa";


const Navber = () => {
  return (
      <nav className='bg-[#FDF8EF] py-[15px]'>
          <div className='w-container mx-auto'>
              <div className='flex justify-between items-center'>
                      <img src="./img/Logo.png" alt="Logo" />
                  <div className='flex items-center'>
                  <ul className='flex gap-[25px] font-raleway'>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Our services</a></li>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">What’s new?</a></li>
                      </ul>
                      <div className=' bg-yellow-400 py-3 px-1 ml-[45px] inline-block item-center'>
                      <FaSearch />
                      </div>
                      <button className='bg-[#FFE4D9] py-[12px] px-[20px] ml-[9px] item-center font-raleway text-[#F95C19]'>Contact us</button>
                   </div>
              </div>
          </div>
    </nav>
  )
}

export default Navber