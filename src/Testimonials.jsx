import React from 'react'
import { FaStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";



const Testimonials = () => {
    return (
        <div className='bg-[#FFD078] '>
            <div className='w-container mx-auto'>
                <h4 className='text-[#F95C19] text-[31px] text-center'>TESTIMONIAL</h4>
                <h2 className='text-[#11111D] text-[39px] max-w-[700] leading-[110px] text-center relative top-0 left-0 '> <ImQuotesLeft className='after:absolute'/>
                Our Awesome
                    Clients</h2>
                <div>
                    <h3>Fantastic service!</h3>
                    <p>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                    <div>
                        <div>
                        <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                        <div >
                            <div>
                                <h5>Yves Tanguy</h5>
                                <h6>Chief Executive, DLF</h6>
                            </div>
                            <div>
                                <img src="./img/Avatar.png" alt="Avatar" />
                            </div>
                    </div>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Testimonials