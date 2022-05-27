import React from "react";

const Info = ({ amount, token, text }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex items-end">
      <span className="font-[400] text-[39.06px] leading-[47px] text-center font-monument text-white">
        {amount}
      </span>
      <span className="text-white font-[400] leading-[14px] text-[12px] font-monument ">
        {token}
      </span>
    </div>
    <span className="text-center capitalize text-[#E74141] text-[12px] leading-[14px] text-monument font-400">
      {text}
    </span>
  </div>
);

export default Info;