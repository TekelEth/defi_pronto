import React from "react";

function Roadmap() {
  return (
    <div className="max-w-[70%] py-12 flex items-center justify-center mx-auto">
      <div className="lg:w-[50%] w-full mx-auto relative position">
        <div className="flex flex-col relative h-[200px] w-[200px] items-start justify-start">
          <span className="font-[400] mb-2  text-[20px] leading-[24px] font-monument text-white">
            Q1 - Launch Platform
          </span>
          <div className="font-[400] text-[13px] leading-[17px] font-DMSans text-[#636262]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque.
          </div>
        </div>
        <div className="flex flex-col relative h-[200px] w-[200px] items-start justify-start">
          <span className="font-[400] mb-2 text-[20px] leading-[24px] font-monument text-white">
            Q2 - Launch Token
          </span>
          <div className="font-[400]  text-[13px] leading-[17px] font-DMSans text-[#636262]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque.
          </div>
        </div>
        <div className="flex flex-col relative h-[200px] w-[200px] items-start justify-start">
          <span className="font-[400] mb-2 text-[20px] leading-[24px] font-monument text-white">
            Q3 - Staking Begins
          </span>
          <div className="font-[400]  text-[13px] leading-[17px] font-DMSans text-[#636262]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque.
          </div>
        </div>
        <div className="flex flex-col relative h-[200px] w-[200px] items-start justify-start">
          <span className="font-[400] text-[20px] mb-2 leading-[24px] font-monument text-white">
            Q4 - Onboard Projects
          </span>
          <div className="font-[400] text-[13px] leading-[17px] font-DMSans text-[#636262]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
            imperdiet nibh at et neque.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
