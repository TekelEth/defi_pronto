import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/general/Icons';

export default function Footer() {
	const FooterLink = ({ path, title, ...rest }) => (
		<CustomLink
			href={path}
			{...rest}
			className='font-DMSans font-normal text-base capitalize text-theme-100 hover:text-theme-main duration-300 mb-2'
		>
			{title}
		</CustomLink>
	);
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
						<h2 className='font-orbitron font-normal text-[25px] lg:text-5xl text-white text-center leading-[30px] lg:leading-[59px] tracking-wide'>
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

			<footer className='w-full container pt-20 px-4 mx-auto'>
				<div className='md:flex items-center lg:flex-row md:justify-between'>
					<div className='order-1 md:order-none'>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src='/assets/logo-light.svg' alt='logo' className=' w-[100px] h-[82px] mb-2' />
						<p className='font-DMSans text-base font-normal text-theme-100 leading-[21px] w-[334px] h-[84px]'>
							Decentralized Incubation and launchpad for cardano.
						</p>
					</div>
					<div className='md:top-[107px] md:right-[180px] w-full md:w-[555px] mt-10  lg:h-[157px] grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
						<div>
							<h4 className='font-orbitron text-base font-medium leading-[32px] text-theme-light mb-2'>
								Company
							</h4>
							<div className='flex flex-col justify-start text-left'>
								<FooterLink path='/about' title='about' />
								<FooterLink path='/how-it-work' title='How it works' />
								<FooterLink path='/projects' title='Projects' />
								<FooterLink path='/staking' title='Staking' />
							</div>
						</div>
						<div>
							<h4 className='font-orbitron font-medium text-base leading-[32px] text-theme-light mb-2'>
								Support
							</h4>
							<div className='flex flex-col justify-start text-left'>
								<FooterLink path='https://docs.defipronto.com/' title='Documentation' target='_blank' />
								<FooterLink
									path='https://docs.defipronto.com/tutorial/overview'
									title='Tutorials & Guide'
									target='_blank'
								/>
								<FooterLink
									path='https://docs.defipronto.com/tutorial/faq'
									title='FAQ'
									target='_blank'
								/>
								<FooterLink path='/' title='Apply' target='_blank' />
							</div>
						</div>
						<div>
							<h4 className='font-orbitron font-medium  text-base leading-[32px] text-theme-light mb-2'>
								Social Media
							</h4>

							<div className='flex flex-col justify-start text-left'>
								<FooterLink path='https://t.me/defipronto' title='Telegram' target='_blank' />
								<FooterLink path='https://medium.com/@defipronto' title='Medium' target='_blank' />
								<FooterLink path='https://twitter.com/defipronto' title='Twitter' target='_blank' />
								<FooterLink path='https://github.com/Defipronto-Labs' title='Github' target='_blank' />
							</div>
						</div>
					</div>
				</div>
				<div className='md:flex container w-full items-center justify-between py-8 mx-auto'>
					<span className='text-base font-DMSans text-theme-100 sm:text-center leading-[21px]'>
						© {new Date().getFullYear()} Defipronto. All rights reserved.
					</span>
					<div className='flex mt-4 pr-10 lg:items-center space-x-4'>
						<CustomLink
							href='https://t.me/defipronto'
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[32px] duration-300'
						>
							<Icon icon={'ri-telegram-fill'} />
						</CustomLink>
						<CustomLink
							href='https://medium.com/@defipronto'
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[32px] duration-300'
						>
							<Icon icon={'ri-medium-fill'} />
						</CustomLink>
						<CustomLink
							href='https://twitter.com/defipronto'
							rel='noreferrer'
							target='_blank'
							className='text-theme-main hover:text-theme-light text-[32px] duration-300'
						>
							<Icon icon={'ri-twitter-fill'} />
						</CustomLink>
					</div>
				</div>
			</footer>
		</div>
	);
}
