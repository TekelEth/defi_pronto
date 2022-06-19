import Completed from 'sections/projects/Completed';
import Hero from 'sections/projects/Hero';
import Ongoing from 'sections/projects/Ongoing';
import Upcoming from 'sections/projects/Upcoming';
import React from 'react';

export default function Projects() {
	return (
		<div className='container w-full px-4 mx-auto'>
			<Hero />
			<Upcoming />
			<Ongoing />
			<Completed />
		</div>
	);
}
