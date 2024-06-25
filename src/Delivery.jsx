import React from "react";
import { SlSocialYoutube } from "react-icons/sl";
<SlSocialYoutube />;

const Delivery = () => {
  return (
    <div className="bg-[#FFD078] pt-[109px] pb-[202px]">
      <div className="w-container mx-auto">
        <div className="relative">
          <img
            className="after:top-0 after:left-0"
            src="./img/Rectangle 12.png"
            alt="Rectangle"
          />

          <div className="absolute flex items-center justify-center top-0 w-full h-full">
            <div className="flex flex-col items-center">
              <SlSocialYoutube className="text-[#F95C19] h-[40px] mb-3 w-[40px]" />
              <h2 className="text-[#F95C19] font-bold  text-[30px]">
                FASTEST DELIVERY
              </h2>
              <p className="text-white text-[20px] mt-[10px] w-[70%] text-center">
                {" "}
                You can get your valuable item in the fastest period of time
                with safety. Because your emergency is our first priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
