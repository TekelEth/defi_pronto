import Head from 'next/head';
import HowItWorks from 'sections/home/HowItWorks';
import MoreProjects from 'sections/home/MoreProjects';
import OurSupporters from 'sections/home/OurSupporters';
import UpcomingProject from 'sections/home/UpcomingProjects';
import WhatWeDo from 'sections/home/WhatWeDo';
import Hero from '../sections/home/Hero';

export default function Home() {
	return (
		<>
			<Head>
				<title>DefiPronto | Home</title>
			</Head>
			<Hero />
			<WhatWeDo />
			<UpcomingProject />
			<div className='relative container px-4 lg:px-6 py-10 lg:py-24 mx-auto md:bg-[url("/assets/backgrounds/details-section.svg")] md:bg-no-repeat md:bg-cover md:bg-center'>
				<MoreProjects />
				<HowItWorks />
			</div>
			<OurSupporters />
		</>
	);
}
