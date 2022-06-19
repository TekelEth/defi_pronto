/* eslint-disable @next/next/no-img-element */
import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/general/Icons';
// import Toast, { ToastInfo, ToggleToast } from 'components/general/Toast';

function Hero() {
	return (
		// <div className='relative'>
		<div className='relative flex justify-between md:h-[calc(100vh)] md:max-h-[62rem] py-2 px-[calc((100vw - 1300px) / 2)]'>
			{/* after */}
			<img
				src='/assets/backgrounds/hero-section.svg'
				className='hidden lg:block absolute -top-[100px] left-0 right-0 w-full h-[calc(100% + 100px)] max-h-[69rem] my-0 mx-auto bg-no-repeat bg-cover bg-center '
				alt='hero-section'
			/>
			{/* before */}
			{/* <img
				src='/assets/backgrounds/bg.png'
				className='hidden lg:block absolute w-full h-screen bg-cover bg-no-repeat bg-center'
				alt='home'
			/> */}
			{/* <img
				src='/assets/backgrounds/home-bg-mobile.png'
				className='lg:hidden absolute w-full h-full bg-cover bg-no-repeat bg-bottom'
				alt='home'
			/> */}
			<div className='relative container px-4 pt-40 mx-auto'>
				<div className='items-center lg:flex'>
					<div className='w-full h-full lg:w-3/5'>
						<h1 className='font-orbitron font-semibold text-[31px] lg:text-[61px] text-white leading-[38px] lg:leading-[63px] tracking-wide'>
							Decentralized Incubation and launchpad for <span className='text-theme-main'>cardano</span>
						</h1>
						<p className='mt-8 lg:mt-2 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-base font-DMSans leading-[17px] lg:leading-[21px] tracking-wide'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.
							Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis dignissim
							quisque scelerisque vitae tempor ante. Elementum, augue iaculis condimentum quis. Quis
							tortor ultricies placerat nam urna.
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
							{/* <Toast>
									<ToastInfo type={'disconnected'} message='Wallet Disconnected' />
									<ToggleToast />
								</Toast> */}
							<div className='flex items-center space-x-4'>
								<CustomLink
									href={'/'}
									rel='noreferrer'
									target='_blank'
									className='text-white hover:text-theme-main text-[25px] lg:text-[32px] duration-300'
								>
									<Icon icon={'ri-telegram-line'} />
								</CustomLink>
								<CustomLink
									href={'/'}
									rel='noreferrer'
									target='_blank'
									className='text-white hover:text-theme-main text-[25px] lg:text-[32px] duration-300'
								>
									<Icon icon={'ri-discord-line'} />
								</CustomLink>
								<CustomLink
									href={'/'}
									rel='noreferrer'
									target='_blank'
									className='text-white hover:text-theme-main text-[25px] lg:text-[32px] duration-300'
								>
									<Icon icon={'ri-twitter-fill'} />
								</CustomLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hero;
