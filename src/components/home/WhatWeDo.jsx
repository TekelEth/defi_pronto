/* eslint-disable @next/next/no-img-element */
import DefiPronto from 'components/subcomponents/DefiPronto';

export default function WhatWeDo() {
	return (
		<div className='max-w-[90%] px-4 md:px-5 py-8 w-full mx-auto'>
			<DefiPronto />
			<div className='flex lg:items-center flex-col mt-4 lg:mt-0 lg:px-10 lg:flex-row lg:space-x-10'>
				<div className='w-full mt-10 lg:mt-0 lg:w-1/2 order-2 md:order-1'>
					<img
						className='w-full h-full lg:max-w-2xl'
						src='/assets/backgrounds/blockchain_dark_7.svg'
						alt='illustration'
					/>
				</div>
				<div className='w-full h-full lg:w-1/2 lg:order-2'>
					<h3 className='font-monument font-normal text-white text-[25px] lg:text-[39.0px] leading-[30px] lg:leading-[47px] tracking-wide'>
						What we do at DefiPronto
					</h3>
					<p className='mt-4 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-xs lg:text-sm font-DMSans leading-[17px] lg:leading-[21px] tracking-wide'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed
						adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis dignissim quisque
						scelerisque vitae tempor ante. Elementum, augue iaculis condimentum quis. Quis tortor ultricies
						placerat nam urna.
					</p>
				</div>
			</div>
		</div>
	);
}
