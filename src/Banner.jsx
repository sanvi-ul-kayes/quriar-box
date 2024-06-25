import React from 'react'

const Banner = () => {
    return (
        <div className='bg-[#FFD078]'>
            <div className='w-container mx-auto '>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='w-[516px] text-[#261134] text-[49px] max-w-[500px] leading-[120%]font-raleway'>A trusted provider of <b>courier services.</b></h1>
                        <p className='text-[20px] max-w-[400px] text[#4D4D4D] leading-[120%] mt-[16] mb-[41px] font-raleway'>We deliver your products safely to your home in a reasonable time.</p>
                        <button className='bg-[#F95C19] px-[20px] py-[12px] rounded-[5px] text-[#ffffff]font-raleway'>Get started  </button>
                    </div>
                    <div>
                    <img className='py-[70px]' src="./img/banner image.png" alt="banner" />
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Banner