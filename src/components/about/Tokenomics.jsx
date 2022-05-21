import Header from "components/subcomponents/Header";
import React from "react";

const TokenDetails = ({title,amount}) => (
    <div className="flex flex-col border-[#E74141] border-2 py-4 py-2 items-center text-center justify-center rounded-lg bg-transparent">
        <span className="text-[#E74141] font-[400] text-[12px] leading-[14.4px] text-center">{title} </span>
    </div>
)

function Tokenomics() {
  return (
    <div className="w-full">
      <Header
        header="Tokenomics"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum."
      />
    </div>
  );
}

export default Tokenomics;
