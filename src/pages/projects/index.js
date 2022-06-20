import Completed from 'sections/projects/Completed';
import Hero from 'sections/projects/Hero';
import Ongoing from 'sections/projects/Ongoing';
import Upcoming from 'sections/projects/Upcoming';
import React from 'react';
import Head from 'next/head';
import Pagination from "components/general/CustomLink/Pagination";

export default function Projects() {
	return (
		<>
			<Head>
				<title>DefiPronto | Projects</title>
			</Head>
			<div className='container w-full px-4 mx-auto'>
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
		</>
	);
}
