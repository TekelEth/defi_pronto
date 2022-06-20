import React from 'react';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
function SectionTwo() {
	return (
		<section className='relative md:bg-[url("/assets/backgrounds/upcoming-section.svg")] md:bg-no-repeat md:bg-cover md:bg-center'>
			<Roadmap />
			<Tokenomics />
		</section>
	);
}

export default SectionTwo;
