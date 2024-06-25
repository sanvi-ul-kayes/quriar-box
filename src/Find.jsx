import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";






const Find = () => {
  return (
      <div className='bg-[#FFD078] pt-[109px] pb-[202px] '>
          <div className='w-container mx-auto'>
              <h2>FIND US</h2>
              <h4>Access us easily</h4>
              
              <div className='flex justify-between'>
                  <div>
                      <img src="./img/Screenshot_1 1.png" alt="Screenshot_1 1.png" />
                  </div>
                  <div>
                      <h3>Contact with us</h3>
                      <div>
                          <FaLocationDot />
                          <p>2277 Lorem Ave, San Diego, CA 22553</p>
                      </div>
                      <div>
                          <FaRegClock />
                          <p>Monday - Friday: 10 am - 10pm
                          Sunday: 11 am - 9pm</p>
                      </div>
                      <div>
                          <MdOutlineLocalPostOffice />
                          <p>info@quriarbox.com</p>
                      </div>
                      <FaFacebook />
                      <FaInstagramSquare />
                      <FaTwitterSquare />
                  </div>
              </div>
                  <button> <IoIosCall />
                  Call us to delivery  123-456789</button>
          </div>
    </div>
  )
}

export default Find