import React from "react";
import Icon from "../Icons";
import Progress from "./Progress";
import { useRouter } from "next/router";

function Card({ id, image, heading, totalRaised, targetAmount, desc }) {
  const router = useRouter();
  const setProject = () => {
    router.push(`/projects/${id}`);
  };
  return (
    <div className="rounded-xl w-full shadow-lg hover:shadow-shadow-card duration-[300ms]">
      <div
        className="w-full md:h-[223px] h-[167px] object-fit flex flex-col items-center"
        onClick={setProject}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={heading}
          className="w-full h-full rounded-t-lg bg-cover bg-center"
        />
      </div>
      <div className="bg-[#2F282E]  w-full rounded-b-lg overflow-hidden flex px-8 md:px-12 flex-col items-center py-12  text-left">
        <div className="mb-12">
          <h1 className="font-[400] text-white text-[20px] md:text-[25px] leading-[24px] md:leading-[35px] font-monument  mb-2">
            {heading}
          </h1>
          <span className="font-[400] text-[12.8px] text-[#A4A4A4] font-DMSans leading-[17px]">
            {desc}
          </span>
        </div>
        {totalRaised > 0 && (
          <Progress
            base_color="#000000"
            completed={totalRaised}
            maxCompleted={targetAmount}
          />
        )}
        <div className="flex w-full self-start items-start mb-8 justify-between">
          <div className="flex items-start flex-col justify-start">
            <span className=" tracking-wide text-[#E74141] font-monument font-[400] text-[10px] md:text-[13px] leading-[12px] md:leading-[15.6px] mb-1">
              Target Amount
            </span>
            <span className="font-monument font-[400] text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white">
              {targetAmount ? targetAmount : "TBA"}
            </span>
          </div>
          <div className="flex items-start flex-col justify-start">
            <span className="text-[#E74141]  mb-1 tracking-wide font-monument font-[400] text-[10px] md:text-[13px] leading-[12px] md:leading-[15.6px]">
              Total Raised
            </span>
            <span className="font-monument font-[400] text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white">
              {totalRaised}
            </span>
          </div>
        </div>
        <div className="border-t-[2px] w-full pt-4 border-[#525252]">
          <div className="flex w-[40%] items-center justify-start">
            <Icon icon="ri-telegram-line" className="text-white mr-2" />
            <Icon icon="ri-twitter-line" className="text-white mr-2" />
            <Icon icon="ri-instagram-line" className="text-white mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
