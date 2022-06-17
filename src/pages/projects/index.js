import Pagination from "components/general/CustomLink/Pagination";
import Completed from "components/projects/Completed";
import Hero from "components/projects/Hero";
import Ongoing from "components/projects/Ongoing";
import Upcoming from "components/projects/Upcoming";
import React from "react";

export default function Projects() {
  return (
    <div className="md:max-w-[90%] px-4 md:px-5 h-full  w-full mx-auto">
      <Hero />
      <Upcoming />
      <Ongoing />
      <Completed />
      <div className="-mt-8">
        <Pagination />
      </div>
      <div className="w-full py-3 text-center bg-transparent border-[2px] border-[#E74141] font-DMSans font-semibold text-lg -mt-6 mb-12 leading-[13px] text-white text-base rounded-md md:hidden">
        Next Page
      </div>
    </div>
  );
}
