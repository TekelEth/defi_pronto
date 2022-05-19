/* eslint-disable @next/next/no-img-element */
import React from 'react';
import CustomLink from './CustomLink';
import Button from './general/Button';
import Icon from './Icons';

function Hero({}) {
	return (
		<>
			<div className='relative'>
				<div>
					<img
						src='/assets/backgrounds/bg.png'
						className='hidden lg:block absolute w-full h-screen bg-cover bg-no-repeat bg-bottom'
						alt='home'
					/>
					<img
						src='/assets/backgrounds/home-bg-mobile.png'
						className='lg:hidden absolute w-full h-full bg-cover bg-no-repeat bg-bottom'
						alt='home'
					/>
				</div>
				<div className='relative container lg:max-w-[90%] px-7 lg:px-5 py-32 mx-auto'>
					<div className='items-center lg:flex'>
						<div className='w-full h-full lg:w-3/5'>
							<h1 className='font-monument font-normal text-[31px] lg:text-6xl text-white leading-[38px] lg:leading-[63px] tracking-wide'>
								Decentralized Incubation and launchpad for{' '}
								<span className='text-theme-main'>cardano</span>
							</h1>
							<p className='mt-8 lg:mt-2 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-xs lg:text-sm font-DMSans leading-[17px] lg:leading-[21px] tracking-wide'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et
								neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis
								dignissim quisque scelerisque vitae tempor ante. Elementum, augue iaculis condimentum
								quis. Quis tortor ultricies placerat nam urna.
							</p>
							<div className='mt-8 flex items-center space-x-10'>
								<CustomLink href={'/'}>
									<Button
										variant='outlined'
										color='primary'
										title={'Go To App'}
										icon={'ri-arrow-right-up-line'}
									/>
								</CustomLink>
								<div className='flex items-center space-x-4'>
									<CustomLink
										href={'/'}
										rel='noreferrer'
										target='_blank'
										className='text-white text-[20px] lg:text-[32px]'
									>
										<Icon icon={'ri-telegram-line'} />
									</CustomLink>
									<CustomLink
										href={'/'}
										rel='noreferrer'
										target='_blank'
										className='text-white text-[20px] lg:text-[32px]'
									>
										<Icon icon={'ri-discord-line'} />
									</CustomLink>
									<CustomLink
										href={'/'}
										rel='noreferrer'
										target='_blank'
										className='text-white text-[20px] lg:text-[32px]'
									>
										<Icon icon={'ri-twitter-fill'} />
									</CustomLink>
								</div>
							</div>
						</div>
						<div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-2/5'>
							<img
								className='w-full h-full lg:max-w-2xl'
								src='/assets/backgrounds/Looper-3.png'
								alt='illustration'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

{
	/* <div className='absolute w-full h-[982px] top-0 left-0 bg-cover bg-no-repeat bg-[url("/assets/backgrounds/bg.png")]' /> */
}

export default Hero;
