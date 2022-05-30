import Allocations from "components/authenticated/porfolio/Allocations";
import Home from "components/authenticated/porfolio/Home";
import WalletDetails from "components/authenticated/porfolio/WalletDetails";
import React from "react";

function Porfolio() {
  return (
    <div className="md:max-w-[90%] px-4 md:px-5 h-full  w-full mx-auto">
      <Home />
      <WalletDetails />
      <Allocations />
    </div>
  );
}

export default Porfolio;
