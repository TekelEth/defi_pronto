import React from "react";

const Info = ({ keys, value }) => (
  <div className="w-full border-[1px] mb-3 border-[#515050] rounded-[3px] bg-transparent py-3 px-3 flex justify-between items-center ">
    <span className="text-[#515050] capitalize text-[16px] leading-[20.83px] font-DMSans font-[700]">
      {keys}
    </span>
    <span className="text-white text-[16px] font-DMSans leading-[20.83px] text-right font-[700]">
      {value}
    </span>
  </div>
);

function Pool_Info() {
  return (
    <div className="rounded-[10px] flex flex-col  bg-[#2F282E] py-8 px-12">
      <span className="text-[#E74141] font-monument font-[400] text-[25px] leading-[30px] mb-5">
        Pool Information
      </span>
      <Info keys="token distribution" value="Date UTC" />
      <Info keys="min. allocation" value="20 ADA" />
      <Info keys="max. allocation" value="2000 ADA" />
      <Info keys="price per token" value="0.00005 ADA - 1HDM" />
      <Info keys="IDO Contact Address" value="0x7bfgh5.......7c677" />
    </div>
  );
}

export default Pool_Info;