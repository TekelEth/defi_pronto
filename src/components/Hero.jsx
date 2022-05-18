/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CustomLink from './CustomLink';
import Button from './general/Button';
import Nav from './layout/Nav';

function Hero({}) {
	return (
		<>
			{/* <div className='w-full h-full mx-auto '>
				<div
					className='bg-cover bg-center w-full h-screen bg-no-repeat'
					style={{ backgroundImage: 'url("/assets/backgrounds/home-bg.png")' }}
				>
					<div className='flex items-center justify-center w-full h-full'>
						<div className='text-center'>
							<h1 className='text-2xl font-semibold text-white uppercase lg:text-3xl'>
								Build Your new <span className='text-blue-400 underline'>Saas</span>
							</h1>
							<button className='w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
								Start project
							</button>
						</div>
					</div>
				</div>
			</div> */}
			<div className='relative'>
				{/* <div
					className='absolute w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed'
					style={{
						backgroundImage: "url('/assets/backgrounds/home-bg.png')",
					}}
				/> */}
				<img
					src='/assets/backgrounds/home-bg.png'
					className='absolute w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed'
					alt='home'
				/>
				<div className='relative w-full'>
					<div className='px-8 py-32 mx-auto'>
						<div className='items-center lg:flex'>
							<div className='w-full h-full top-[258px] left-[129px] lg:w-1/2'>
								<h1 className='font-monument font-normal text-5xl text-white leading-[73px]'>
									Decentralized Incubation and launchpad for{' '}
									<span className='text-theme-main'>cardano</span>
								</h1>
								<p className='max-w-[542px] mt-2 text-theme-100 text-base font-DMSans leading-[21px]'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et
									neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis
									dignissim quisque scelerisque vitae tempor ante. Elementum, augue iaculis
									condimentum quis. Quis tortor{' '}
								</p>
								<CustomLink href={'/'}>
									<Button variant={'contained'} color={'error'} text='Get it Now'></Button>
								</CustomLink>
							</div>
							{/* <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
								<img
									className='hidden md:block w-full h-full lg:max-w-2xl'
									src='/assets/backgrounds/Looper-3.png'
									alt='illustration'
								/>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
