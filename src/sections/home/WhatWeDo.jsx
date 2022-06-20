/* eslint-disable @next/next/no-img-element */
import DefiPronto from 'components/subcomponents/DefiPronto';

export default function WhatWeDo() {
	return (
		<div className='container px-4 py-5 md:pt-40 w-full mx-auto'>
			<DefiPronto />
			<div className='flex lg:items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:space-x-10'>
				<div className='w-full mt-10 lg:mt-0 lg:w-1/2 order-2 md:order-1'>
					<img
						className='w-full h-full lg:max-w-2xl'
						src='/assets/backgrounds/blockchain_dark_7.svg'
						alt='illustration'
					/>
				</div>
				<div className='w-full h-full lg:w-1/2 lg:order-2'>
					<h3 className='font-orbitron font-medium text-white text-[32px] lg:text-[42px] leading-[52px] tracking-wide'>
						What we do at DefiPronto
					</h3>
					<p className='mt-4 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-base font-DMSans leading-[32px]'>
						We propel and accelerate the best projects, launching only high-quality projects on the Cardano
						blockchain. Stake $DFP tokens to get early-access to the most promising projects.
					</p>
				</div>
			</div>
		</div>
	);
}
