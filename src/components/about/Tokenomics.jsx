import Header from "components/subcomponents/Header";
import React from "react";

const TokenDetails = ({ title, amount }) => (
  <div className="flex flex-col h-[160px] border-[#E74141] border-2 py-4 py-2 items-center text-center justify-center rounded-[20px] bg-transparent hover:shadow-shadow-card">
    <span className="text-[#E74141] font-[400] text-[12px] leading-[14.4px] text-center">
      {title}{" "}
    </span>
    <span className="text-white text-center font-[400] text-[39px] leading-[47px] font-monument ">
      {amount}
    </span>
  </div>
);

function Tokenomics() {
  return (
    <div className="w-full">
      <Header
        header="Tokenomics"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum."
      />
      <div className="w-full my-4 grid grid-cols-3 gap-x-4 gap-y-4">
        <TokenDetails title="Token Name" amount="Defipronto" />
        <TokenDetails title="Market Cap" amount="$1,000,000" />
        <TokenDetails title="Total Supply" amount="400,000" />
        <TokenDetails title="Current Total Supply" amount="200,000" />
        <TokenDetails title="Defipronto Burned" amount="30,000" />
        <TokenDetails title="Defipronto in Circulation" amount="100,000" />
      </div>
    </div>
  );
}

export default Tokenomics;
