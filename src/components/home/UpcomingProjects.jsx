import Card from 'components/subcomponents/Card';

export default function UpcomingProject() {
	return (
		<div className='relative my-12 text-white max-w-[90%] px-4 md:px-5 py-8 w-full mx-auto'>
			<div className='absolute top-[90px]'>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src='/assets/backgrounds/topology-bg.svg'
					alt='definpronto'
					className='bg-center bg-no-repeat h-full'
				/>
			</div>
			<div className='relative grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-4 w-full'>
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
		</div>
	);
}
