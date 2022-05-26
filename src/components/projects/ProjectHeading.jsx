import React from "react";

function ProjectHeading({ heading }) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-start mb-12  md:mb-16  md:justify-between">
      <div className="flex mb-6 md:mb-0 items-center">
        <span className="w-10 h-1 bg-[#E74141] mr-2"></span>
        <span className="bg-[#E74141] p-1 rounded-full mr-4"></span>
        <span className="font-[400] text-[20px] md:text-[31.25px] leading-[24px] md:leading-[37.5px] font-monument text-white capitalize">
          {heading}
        </span>
      </div>
      <div className="relative w-full md:w-[20%] md:flex   items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="w-4 h-4 text-[#515050]"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokewidth="2"
              strokelinecap="round"
              strokelinejoin="round"
            ></path>
          </svg>
        </span>

        <input
          type="text"
          className="w-full  pl-10 py-2 text-[#515050] bg-transparent rounded-md    focus:ring-gray-100 focus:ring-opacity-40 text-[14px] focus:outline-none border-[1px] placeholder:text-[#515050] placeholder:text-[14px]  border-[#515050] "
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default ProjectHeading;
