import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/general/Icons';

export default function Footer() {
	return (
		<div className='w-full h-full'>
			<div className='relative w-full h-[314px] bg-theme-main'>
				<div className='absolute top-[95px] left-[10px] right-[10px] lg:left-[118px] lg:top-[75px] lg:right-[118px]'>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src='/assets/backgrounds/DefiPronto-white.svg'
						alt='definpronto'
						className='bg-center bg-no-repeat h-full'
					/>
				</div>
				<div className='relative container top-[70px] px-10 lg:px-40 mx-auto'>
					<div className='items-center'>
						<h2 className='font-monument font-normal text-[25px] lg:text-5xl text-white text-center leading-[30px] lg:leading-[59px] tracking-wide'>
							Want to launch your project on DefiPronto?
						</h2>
						<div className='flex items-center justify-center  mt-12 lg:mt-3'>
							<CustomLink href={'/'} className=' items-center'>
								<Button title={'Apply To Launch Pad'} variant={'contained'} color='plain' />
							</CustomLink>
						</div>
					</div>
				</div>
			</div>

			<footer className='w-full container lg:max-w-[90%] pt-20 px-5 mx-auto'>
				<div className='md:flex items-center lg:flex-row md:justify-between'>
					<div className='order-1 md:order-none'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src='/assets/logo-light.svg' alt='logo' className=' w-[100px] h-[82px] mb-2' />
						<p className='font-DMSans text-base font-normal text-theme-100 leading-[21px] w-[334px] h-[84px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.
							Sed adipiscing risus aenean neque imperdiet amet fermentum.
						</p>
					</div>
					<div className='md:top-[107px] md:right-[180px] w-full md:w-[555px] mt-10  lg:h-[157px] grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
						<div>
							<h4 className='font-monument text-base leading-[19px] text-theme-light mb-2'>Company</h4>
							<div className='flex flex-col justify-start text-left'>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									About
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									How it works
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Projects
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Staking
								</CustomLink>
							</div>
						</div>
						<div>
							<h4 className='font-monument text-base leading-[19px] text-theme-light mb-2'>Support</h4>
							<div className='flex flex-col justify-start text-left'>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Documentation
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Tutorials & Guide
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									FAQ
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Apply
								</CustomLink>
							</div>
						</div>
						<div>
							<h4 className='font-monument text-base leading-[19px] text-theme-light mb-2'>
								Social Media
							</h4>
							<div className='flex flex-col justify-start text-left'>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Telegram
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Discord
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									Twitter
								</CustomLink>
								<CustomLink
									href={'/'}
									className='font-DMSans font-normal text-base text-theme-100 leading-[21px] hover:text-theme-main mb-2'
								>
									GitHub
								</CustomLink>
							</div>
						</div>
					</div>
				</div>
				<div className='md:flex items-center justify-between py-8'>
					<span className='text-base font-DMSans text-theme-100 sm:text-center leading-[21px]'>
						© {new Date().getFullYear()} Defipronto. All rights reserved.
					</span>
					<div className='flex mt-4 lg:items-center space-x-4'>
						<CustomLink
							href={'/'}
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[20px] lg:text-[32px]'
						>
							<Icon icon={'ri-telegram-line'} />
						</CustomLink>
						<CustomLink
							href={'/'}
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[20px] lg:text-[32px]'
						>
							<Icon icon={'ri-discord-line'} />
						</CustomLink>
						<CustomLink
							href={'/'}
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[20px] lg:text-[32px]'
						>
							<Icon icon={'ri-twitter-fill'} />
						</CustomLink>
					</div>
				</div>
			</footer>
		</div>
	);
}
