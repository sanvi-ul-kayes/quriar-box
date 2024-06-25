import React from 'react'
import { CiTrophy } from "react-icons/ci";
import { RiClapperboardFill } from "react-icons/ri";
import { IoManSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleSharp } from "react-icons/io5";



const Advertisements = () => {
    return (
        <div className='bg-[#FFD078] pb-[149px]' >
            <div className='w-container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <CiTrophy className='text-[64px]' />
                        <p className='text-[49px] max-w-[700] leading-[110%] text-[#F95C19]'>26+</p>
                        <h3 className='text-[20px] max-w-[500] leading-[120%] text-[#464558]'>Awards  won</h3>
                    </div>
                    <div>
                    <RiClapperboardFill className='text-[64px]'  />
                        <p className='text-[49px] max-w-[700] leading-[110%] text-[#F95C19]'>65+</p>
                        <h3 className='text-[20px] max-w-[500] leading-[120%] text-[#464558]'>States covered</h3>
                    </div>
                    <div>
                    <IoManSharp className='text-[64px]'  />
                        <p className='text-[49px] max-w-[700] leading-[110%] text-[#F95C19]'>689K+</p>
                        <h3 className='text-[20px] max-w-[500] leading-[120%] text-[#464558]'>Happy clients</h3>
                    </div>
                    <div>
                    <CiDeliveryTruck className='text-[64px]'  />
                        <p className='text-[49px] max-w-[700] leading-[110%] text-[#F95C19]'>130M+</p>
                        <h3 className='text-[20px] max-w-[500] leading-[120%] text-[#464558]'>Goods delivered</h3>
                    </div>
                    <div>
                    <IoBagHandleSharp className='text-[64px]'  />
                        <p className='text-[49px] max-w-[700] leading-[110%] text-[#F95C19]'>130M+</p>
                        <h3 className='text-[20px] max-w-[500] leading-[120%] text-[#464558]'>Business hours</h3>
                    </div>
                </div>
            </div>
      </div>
  )
}

export default Advertisements