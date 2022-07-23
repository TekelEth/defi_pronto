/* eslint-disable @next/next/no-img-element */
import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/general/Icons';

const SocialLink = ({ linkRef, socialIcon }) => (
	<CustomLink
		href={linkRef}
		rel='noreferrer'
		target='_blank'
		className='text-white hover:text-theme-main text-[35px] lg:text-[32px] duration-300'
	>
		<Icon icon={socialIcon} />
	</CustomLink>
);

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
		 
			<div className='relative container px-4 pt-40 mx-auto'>
				<div className='items-center lg:flex'>
					<div className='w-full h-full lg:w-3/5'>
						<h1 className='font-orbitron font-semibold text-[31px] lg:text-[61px] text-white leading-[38px] lg:leading-[63px] tracking-wide'>
							Decentralized Incubation and launchpad for <span className='text-theme-main'>cardano</span>
						</h1>
						<p className='mt-8 lg:mt-2 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-base font-DMSans leading-[17px] lg:leading-[21px] tracking-wide'>
							Get early access to the most promising Cardano projects with Highly-vetted ideas and teams
							you can trust.
						</p>
						<div className='my-2 md:my-4 flex items-center space-x-10'>
							<CustomLink href={'/presale'}>
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
								<SocialLink linkRef='https://t.me/defipronto' socialIcon='ri-telegram-fill' />
								<SocialLink linkRef='https://medium.com/@defipronto' socialIcon='ri-medium-fill' />
								<SocialLink linkRef='https://twitter.com/defipronto' socialIcon='ri-twitter-fill' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hero;
