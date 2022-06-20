import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import React from 'react';

function Hero() {
	return (
		<div className='w-full flex-col flex md:flex-row items-center'>
			<div className='md:w-1/2 w-full flex flex-col col-span-2 justify-start py-8'>
				<h1 className=' max-w-[643px] font-orbitron font-normal text-[31px] lg:text-[61px] text-white leading-[37px] lg:leading-[73px]'>
					Decentralized Incubation and launchpad for <span className='text-theme-main'>Cardano Projects</span>
				</h1>
				<p className='lg:w-[542px] w-full  mt-3 text-left  text-theme-100 md:text-base text-[12.8px]  font-DMSans leading-[24px]'>
					Get early access to the most promising Cardano projects with Highly-vetted ideas and teams you can
					trust.
				</p>
				<div className='mt-6 flex items-center space-x-4 lg:space-x-10'>
					<CustomLink href={'/'}>
						<Button
							title='Buy DFP'
							variant={'outlined'}
							color='primary'
							icon='ri-money-dollar-circle-line'
							order
						/>
					</CustomLink>
					<CustomLink href={'/'}>
						<Button
							variant='outlined'
							color='plain'
							title={'White papper'}
							icon={'ri-file-text-line'}
							order
						/>
					</CustomLink>
				</div>
			</div>
			<div className='md:w-1/2 w-full mt-2 md:mt-0'>
				<div className='flex w-full h-full items-end justify-end'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src='/assets/backgrounds/about-section.svg'
						alt='about'
						className='w-full h-[500px] bg-cover bg-center'
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
