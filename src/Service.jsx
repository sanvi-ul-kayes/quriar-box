import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { CiPillsBottle1 } from "react-icons/ci";
import { LuDot } from "react-icons/lu";

const Service = () => {
  return (
    <div className="bg-[#FFD078] pt-[168px] pb-[173px]">
      <div className="w-container mx-auto">
        <h4
          className="text-[#F95C19] text-[32px] max-w-[700px]  mx-auto text-center
                font-raleway"
        >
          SERVICES
        </h4>
        <h1
          className="text-[#11111D] text-[40px] max-w-[700px] mx-auto text-center mb-[85px]
                font-raleway"
        >
          Our services for you
        </h1>
        <div className="flex justify-between items-center">
          {/* ======================================== */}
          <div className="bg-white px-[60px] py-[49px] rounded-2xl w-[424px] ">
            <div className="w-full flex justify-center">
              <div className="after:content-[''] after:bg-[#ffaf0f6e] after:absolute after:h-[100%] after:rounded-full after:top-[-25px] after:w-[100%] w-[max-content] rounded-[50%] relative">
                <IoBagHandle className="text-[#F95C19] text-[55px] m-auto " />
              </div>
            </div>
            <h2 className="mt-[29px] mb-[32px] text-center text-[#464558] text-[25px]">
              Business Services
            </h2>
            <p className="text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[36px]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
            <ul>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" /> Corporate goods
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" /> Shipment
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[60px]">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" /> Accesories
              </li>
            </ul>
            <button className="text-[#F95C19] py-[12px] px-[96px] border-[2px] border-solid rounded-[5px] border-[#F95C19] hover:bg-[#F95C19] hover:text-white duration-[.4s]">
              Learn more
            </button>
          </div>
          {/* ====================================== */}
          <div className="bg-white px-[60px] py-[49px]  rounded-2xl w-[424px] ">
            <IoIosHome className="text-[#F95C19] text-[55px] m-auto after:absolute after:content-[''] after:left-0 after:bottom-0 rounded-[50%] bg-[#FFD078] relative " />
            <h2 className="mt-[29px] mb-[32px] text-center text-[#464558] text-[25px]">
              Statewide Services
            </h2>
            <p className="text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[36px]">
              Offering home delivery around the city, where your products will
              be at your doorstep within 48-72 hours.
            </p>
            <ul>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Personal items
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Percels
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[60px]">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Documents
              </li>
            </ul>
            <button className="text-[#F95C19] py-[12px] px-[96px] border-[2px] border-solid rounded-[5px] border-[#F95C19] hover:bg-[#F95C19] hover:text-white duration-[.4s]">
              Learn more
            </button>
          </div>
          {/* ============================ */}
          <div className="bg-white px-[60px] py-[49px]  rounded-2xl w-[424px] ">
            <CiPillsBottle1 className="text-[#F95C19] text-[55px] m-auto after:absolute after:content-[''] after:left-0 after:bottom-0 rounded-[50%] bg-[#FFD078] relative " />
            <h2 className="mt-[29px] mb-[32px] text-center text-[#464558] text-[25px]">
              Personal Services
            </h2>
            <p className="text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[36px]">
              You can trust us to safely deliver your most sensitive documents
              to the specific area in a short time.
            </p>
            <ul>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Gifts
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Package
              </li>
              <li className="flex text-center text-[16px] text-[#7B7A8B] leading-[145%] max-w-400 mb-[60px]">
                {" "}
                <LuDot className="mt-[4px] text-[#F95C19]" />
                Documents
              </li>
            </ul>
            <button className="text-[#F95C19] py-[12px] px-[96px] border-[2px] border-solid rounded-[5px] border-[#F95C19] hover:bg-[#F95C19] hover:text-white duration-[.4s]">
              Learn more
            </button>
          </div>
          {/* ========================================== */}
        </div>
      </div>
    </div>
  );
};

export default Service;
