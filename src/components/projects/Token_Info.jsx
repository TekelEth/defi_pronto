import React from "react";

const Info = ({ keys, value }) => (
  <div className="w-full  mb-3 border-[#515050] bg-transparent  flex justify-between items-center ">
    <span className="text-[#515050] capitalize text-[14px] md:text-[16px] leading-[18px] md:leading-[20.83px] font-DMSans font-[700]">
      {keys}
    </span>
    <span className="text-white text-[14px] md:text-[16px] font-DMSans leading-[18px] md:leading-[20.83px] text-right font-[700]">
      {value}
    </span>
  </div>
);

function Token_Info() {
  return (
    <div className="rounded-[10px] flex flex-col  bg-[#2F282E] py-8 px-6 md:px-12">
      <span className="text-[#E74141] font-monument font-[400] text-[20px] md:text-[25px] leading-[24px] md:leading-[30px] mb-5">
        Token Information
      </span>
      <Info keys="Name" value="Hyper Drive Metaverse" />
      <Info keys="Symbol" value="$HDM" />
      <Info keys="Decimals" value="18" />
      <Info keys="total supply" value="100,000,000" />
      <Info keys="Supported Tokens" value="$ADA, $DFP" />
    </div>
  );
}

export default Token_Info;
