import HowItWorks from 'components/home/HowItWorks';
import MoreProjects from 'components/home/MoreProjects';
import OurSupporters from 'components/home/OurSupporters';
import UpcomingProject from 'components/home/UpcomingProjects';
import WhatWeDo from 'components/home/WhatWeDo';
import Hero from '../components/home/Hero';

export default function Home() {
	return (
		<>
			<Hero />
			<WhatWeDo />
			<UpcomingProject />
			<div className='px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<MoreProjects />
				<HowItWorks />
			</div>
			<OurSupporters />
		</>
	);
}
