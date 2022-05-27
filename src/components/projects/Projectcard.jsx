import Icon from "components/Icons";
import React from "react";

function Projectcard({ img,img_2, sub_text, heading, content }) {
  return (
    <div className="h-[618px] rounded-[10px] w-full">
      <div className="h-[241px] w-full rounded-[10px] relative">
        <img
          src={img}
          alt="Prject Image"
          className="w-full h-full object-cover object-center rounded-t-[10px]"
        />
        <div className="flex items-center absolute h-[128px] w-[128px] rounded-full  top-[177px] left-[422px] ">
          <img
            src={img_2}
            alt="Prject Image"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </div>
      </div>
      <div className="flex  px-8 flex-col items-start justify-center h-[377px] rounded-b-[10px] bg-[#2F282E]">
        <span className="text-white font-[400] text-[12px] leading-[14px] font-monument">
          {sub_text}
        </span>
        <span className="w-[229px] font-monument font-[400] text-[25px] leading-[30px] py-2 text-white">
          {heading}
        </span>
        <span className="w-[90%] text-left font-DMSans font-[400] text-[16px] leading-[20.83px] py-2 text-[#A4A4A4]">
          {content}
        </span>
        <div className="mt-6 flex items-center w-[75%]">
          <Icon icon="ri-global-line" className="text-white text-xl mr-4" />
          <Icon icon="ri-telegram-fill" className="text-white text-xl mr-4" />
          <Icon icon="ri-discord-line" className="text-white text-xl mr-4" />
          <Icon icon="ri-twitter-fill" className="text-white text-xl mr-4" />
          <div className="ml-4 flex items-center">
            <Icon
              icon="ri-file-text-line"
              className="text-[#E74141] mr-2 text-base"
            />
            <span className="text-[#E74141]  text-base capitalize">
              white paper
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectcard;