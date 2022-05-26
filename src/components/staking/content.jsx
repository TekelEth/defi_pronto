import CustomLink from 'components/CustomLink';
import Button from 'components/general/Button';

const TokenDetails = ({ title, amount }) => (
	<div className='flex flex-col h-[176px] border-theme-border bg-theme-card border-2 py-4 md:py-2 items-center text-center justify-center rounded-[20px]'>
		<span className='text-theme-main font-monument font-[400] text-[12px] leading-[14.4px] text-center'>
			{title}{' '}
		</span>
		<span className='text-white text-center font-[400] text-[31.25px] md:text-[39px] leading-[37.5px] md:leading-[47px] font-monument '>
			{amount}
		</span>
	</div>
);

export default function Content() {
	return (
		<section>
			<div className='w-full flex-col  flex md:flex-row items-center lg:space-x-44'>
				<div className='md:w-[30%] w-full flex flex-col col-span-2 justify-start py-10'>
					<div className='w-full lg:w-[550px]'>
						<h1 className='font-monument font-normal text-[31px] lg:text-6xl text-white leading-[37px] lg:leading-[73px] tracking-wide'>
							Stake your <span className='text-theme-main'>DFP tokens</span> to join IDOs
						</h1>
						<p className='w-full lg:w-[483px] my-10 text-theme-100 text-[12.8px] md:text-base font-DMSans leading-[21px]'>
							Note: DFP Staked only display tokens in your primary connected address. To see all staked
							tokens across all connected addresses in this wallet, see{' '}
							<CustomLink href={'/'} className='text-theme-main'>
								Portfolio
							</CustomLink>
							.
						</p>
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
				<div className='w-full md:w-[70%] items-center justify-center lg:-mt-10'>
					<div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
						<TokenDetails title='DFP Staked' amount='0' />
						<TokenDetails title='Number of Stakers' amount='3,000' />
						<TokenDetails title='DFP Tokens Staked' amount='200,000' />
						<TokenDetails title='Current APY' amount='1197.1%' />
					</div>
				</div>
			</div>
		</section>
	);
}
