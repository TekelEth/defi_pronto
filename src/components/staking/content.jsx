import CustomLink from 'components/CustomLink';
import Button from 'components/general/Button';

export default function Content() {
	return (
		<section>
			<div className='relative container lg:max-w-[90%] px-7 lg:px-5 py-24 mx-auto'>
				<div className='items-center lg:flex'>
					<div className='w-full h-full lg:w-[40%]'>
						<h1 className='font-monument font-normal text-[31px] lg:text-6xl text-white leading-[38px] lg:leading-[63px] tracking-wide'>
							Stake your <span className='text-theme-main'> DFP tokens </span> to join IDOsr
						</h1>
						<p className='mt-8 lg:mt-2 w-auto h-[105px] lg:w-[500px] lg:h-[105px] text-left text-theme-100 text-xs lg:text-sm font-DMSans leading-[17px] lg:leading-[21px] tracking-wide'>
							Note: DFP Staked only display tokens in your primary connected address. To see all staked
							tokens across all connected addresses in this wallet, see{' '}
							<CustomLink href={'/portfolio'} className='text-theme-main'>
								Portfolio
							</CustomLink>
							.
						</p>
						<div className='mt-8 flex items-center space-x-10'>
							<CustomLink href={'/'}>
								<Button
									title='Buy DFP'
									variant={'outlined'}
									color='primary'
									icon='ri-money-dollar-circle-line'
									order
								/>
							</CustomLink>
						</div>
					</div>
					{/* <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[60%]'>
						<img
							className='w-full h-full lg:max-w-2xl'
							src='/assets/backgrounds/Looper-3.png'
							alt='illustration'
						/>
					</div> */}
				</div>
			</div>
		</section>
	);
}
