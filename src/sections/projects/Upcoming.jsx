import Card from 'components/subcomponents/Card';
import { useEffect, useState } from 'react';
import { getFunctionByType } from '../../../utils/projects';
import ProjectHeading from './ProjectHeading';

function Upcoming() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		const res = getFunctionByType('upcoming');
		setProjects(res);
		console.log(res);
	}, []);
	return (
		<section className='mt-28 md:mt-32 md:bg-[url("/assets/backgrounds/upcoming-section.svg")] md:bg-no-repeat md:bg-cover md:bg-center'>
			<ProjectHeading heading='upcoming projects' />
			<div className='relative grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4 w-full'>
				{projects &&
					projects.length > 0 &&
					projects.map((x, i) => (
						<div key={i}>
							<Card
								id={x.id}
								image={x.image}
								heading={x.heading}
								totalRaised={x.totalRaised}
								targetAmount={x.targetAmount}
								desc={x.desc}
							/>
						</div>
					))}
			</div>
		</section>
	);
}

export default Upcoming;
