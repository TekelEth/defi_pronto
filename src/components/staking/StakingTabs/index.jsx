import CustomLink from 'components/CustomLink';

const TabHeader = ({ title, link }) => {
	return (
		<li className='mr-3'>
			<CustomLink
				href={link}
				className={
					'inline-block py-2 font-monument text-xl leading-[24px] text-center text-white tracking-wide rounded-t-lg border-b-[5px] border-theme-main'
				}
			>
				{title}
			</CustomLink>
		</li>
	);
};

export default function StakingTabs() {
	return (
		<section className='mt-8'>
			<div className='w-full flex-col flex md:flex-row items-center lg:space-x-8'>
				<div className='md:w-1/2 w-full flex flex-col col-span-2 justify-start py-10'>
					<div className='text-sm font-medium text-center border-b border-[#606060]'>
						<ul className='flex flex-wrap -mb-px'>
							<TabHeader link={'/#'} title='Stake' />
							<TabHeader link={'/#'} title='Unstake' />
							<TabHeader link={'/#'} title='Tiers' />
						</ul>
					</div>
					{/* tab content */}
					<div className='items-start mt-10'>
						<div>
							<h5 className='font-monument text-[25px] leading-[30px] text-white'>Staking Info</h5>
							<div className='lg:w-[606px] mt-4'>
								<p className='text-theme-100 font-DMSans text-base leading-[21px]'>
									Staking your tokens will generate new tokens daily based on the APY percentage
									above. If you stake in one of the tiers, it also makes you eligible for early
									contribution rounds to IDOs of projects launched on Defipronto.
								</p>

								<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
									Be aware of the unstaking fees, as outlined in the table. These fees are in place to
									prevent someone from staking right before a tier snapshot, then unstaking
									immediately after. Unstaking fees are burned and will no longer be in circulation,
									reducing the total supply of DFP tokens.
									<p className='mt-8 text-white'>
										<span className='text-theme-main'>Note:</span> Please stake a minimum of 100 DFP
										tokens, fewer will not work.
									</p>
								</p>
							</div>
							<h5 className='font-monument text-[25px] leading-[30px] text-white mt-8'>
								Terms & Conditions
							</h5>
							<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
								By using this website to stake tokens on the Cardano blockchain, you accept that you are
								interacting with a smart contract that this website has no control over. The operators
								of this website accept no liability whatsoever in relation to your use of these smart
								contracts. By using this website to stake, you also have read and agree to the Terms and
								Conditions.
							</p>
						</div>
					</div>
				</div>
				<div className='w-full md:w-1/2 items-center justify-center'>
					<div className='p-10 border-2 w-[588px] border-theme-main rounded-[18px]'>
						<h5 className='font-monument text-[25px] leading-[30px] text-white'>Lock Duration</h5>

						<div className='w-full text-center mt-10 mx-auto'>
							<hr className='w-full broder-2 border-[#606060]' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
