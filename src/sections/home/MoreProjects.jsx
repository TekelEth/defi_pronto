/* eslint-disable @next/next/no-img-element */

import Button from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';

const FuturePlans = ({ imageIcon, title, subText }) => (
	<div className='text-center my-10'>
		<img
			src={imageIcon}
			alt={title}
			className='w-[160px] h-[160px] flex items-center justify-center mx-auto mb-4'
		/>
		<div className='w-[278px] h-[88px] mx-auto'>
			<h6 className='mb-2 text-white text-[25px] font-normal font-orbitron leading-[30px] tracking-wide text-center'>
				{title}
			</h6>
			<p className='mb-2 text-theme-100 text-base font-DMSans leading-[32px]'>{subText}</p>
		</div>
	</div>
);

export default function MoreProjects() {
	return (
		<section id='features'>
			{/* <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'> */}
			<div className='max-w-screen-sm sm:text-center sm:mx-auto'>
				{/* CTA BUTTON */}
				<CustomLink href='/projects' className='w-full px-4 flex'>
					<Button variant='outlined' color='primary' title='More projects' />
				</CustomLink>
				{/* END OF CTA BUTTON */}

				<div className='w-full lg:max-w-[630px] mx-auto my-20 text-center'>
					<h2 className='mb-6 font-medium font-orbitron text-[32px] lg:text-[42px] leading-[30px] lg:leading-[52px] text-center tracking-wide text-white'>
						Be Part Of The Future Of Cardano Ecosystem
					</h2>
					<p className='text-base font-normal text-theme-100 w-full font-DMSans leading-[32px] text-center'>
						Join the Defipronto community and take part in a Bright, Unique, and Engaging IDO platform on
						Cardano to empower the most innovative projects.
					</p>
				</div>
			</div>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				<FuturePlans
					imageIcon='/assets/future/Projects.svg'
					title='Vetted Projects'
					subText='We only accept and incubate vetted projects with unique use cases and utilities.'
				/>
				<FuturePlans
					imageIcon='/assets/future/Community.svg'
					title='Community'
					subText='Enagage with the Defipronto community in AMA and Q&A sessions.'
				/>
				<FuturePlans
					imageIcon='/assets/future/Launch Pad.svg'
					title='Launch Pad'
					subText='Launch On Defipronto Launchpad with priority access given to $DFP token holders.'
				/>
				<FuturePlans
					imageIcon='/assets/future/Vector.svg'
					title='Marketing'
					subText='We also support projects with after launch marketing.'
				/>
			</div>
			<div className='w-full px-8 lg:max-w-screen-sm text-center mt-24 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>
		</section>
	);
}
