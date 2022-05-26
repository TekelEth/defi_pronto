import Chart from "components/subcomponents/Chart";
import DefiPronto from "components/subcomponents/DefiPronto";
import Header from "components/subcomponents/Header";
import React from "react";
import FAQ from "./FAQ";
// import MyDisclosure from "./Disclosure";

function SectionThree() {
  return (
    <div className="my-16">
      <DefiPronto />
      <Header
        header="Allocation & Utility"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum."
      />
      <Chart seed={80} strategic={30} pre_sale={80} liquidity={40} dao={70} />
      <FAQ />
    </div>
  );
}

export default SectionThree;
