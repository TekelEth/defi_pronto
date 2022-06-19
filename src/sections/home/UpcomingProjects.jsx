import Card from 'components/subcomponents/Card';

export default function UpcomingProject() {
	return (
		<section className='relative container my-8 text-white px-6 py-8 w-full mx-auto md:bg-[url("/assets/backgrounds/upcoming-section.svg")] md:bg-no-repeat md:bg-center'>
			<div className='w-full flex flex-row items-center mb-12 md:mb-16 justify-between'>
				<div className='flex mb-6 md:mb-0 items-center'>
					<span className='w-10 h-1 bg-theme-main mr-2'></span>
					<span className='bg-theme-main p-1 rounded-full mr-4'></span>
					<span className='font-semibold text-[20px] md:text-[31.25px] leading-[24px] md:leading-[37.5px] font-orbitron text-white capitalize'>
						Upcoming Projects
					</span>
				</div>
			</div>

			<div className='relative grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4 w-full'>
				<div>
					<Card
						image='/assets/projects/project1.png'
						heading='Hyper Drive Metaverse'
						totalRaised='0.00'
						desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.'
					/>
				</div>
				<div>
					<Card
						image='/assets/projects/project1.png'
						heading='Hyper Drive Metaverse'
						desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.'
						totalRaised='0.00'
					/>
				</div>
				<div>
					<Card
						image='/assets/projects/project1.png'
						heading='Hyper Drive Metaverse'
						totalRaised='0.00'
						desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.'
					/>
				</div>
				<div>
					<Card
						image='/assets/projects/project1.png'
						heading='Hyper Drive Metaverse'
						totalRaised='0.00'
						desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.'
					/>
				</div>
				<div>
					<Card
						image='/assets/projects/project1.png'
						heading='Hyper Drive Metaverse'
						totalRaised='0.00'
						desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.'
					/>
				</div>
			</div>
		</section>
	);
}
