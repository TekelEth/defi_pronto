import { useState } from "react";
import Assets from "./Assets";
import Header from "./Header";

const Tab = ({ text, clicked, current, type }) => {
  return (
    <span
      onClick={clicked}
      className={`font-monument duration-300 leading-[24px] hover:cursor-pointer text-[20px] mr-8 font-[400] ${
        current === type ? "text-white border-b-[5px] border-b-[#E74141]" : "text-[#898888]"
      } py-2 `}
    >
      {text}
    </span>
  );
};

function Allocations() {
  const [current, setCurrent] = useState("assets");
  return (
    <div className="mb-8">
      <Header heading="My Allocations" />
      <div className="w-full my-12 border-b-[1px] flex items-center border-[#606060]">
        <div className="flex-wrap flex -mb-px">
          <Tab
            text="Assets"
            clicked={()=> setCurrent("assets")}
            type="assets"
            current={current}
          />
          <Tab
            text="Transactions"
            type="transactions"
            clicked={()=> setCurrent("transactions")}
            current={current}
          />
        </div>
      </div>
      {
          current === "assets" ? (<Assets />) : (<div>Trnasactions</div>)
      }
    </div>
  );
}

export default Allocations;
