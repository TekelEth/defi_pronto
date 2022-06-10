/* eslint-disable @next/next/no-img-element */
const TierInfo = ({ heading, value }) => {
	return (
		<div className='flex flex-col items-center'>
			<span className='text-[8px] md:text-[10px] font-monument leading-[10px]  md:leading-[12px] text-center text-theme-main mb-1'>
				{heading}
			</span>
			<span className='text-sm md:text-lg leading-[19px] md:leading-[24px] text-center text-white font-monument'>
				{value}
			</span>
		</div>
	);
};

export const TierContent = () => {
	return (
		<div className='p-2 md:p-5 flex justify-center flex-col border-2 w-full border-theme-border rounded-[18px]'>
			<div className='flex items-center flex-col md:flex-row justify-center gap-3'>
				<img src='/assets/tiers/tiers-1.svg' alt='tiers-1' className='w-[100px] h-[100px]' />
				<div className='flex flex-row items-center justify-center gap-2 md:gap-4'>
					<TierInfo heading='DFP Required' value='20,000' />
					<TierInfo heading='Pool Weightage' value='2X' />
					<TierInfo heading='Time of Stake' value='7 Days' />
				</div>
			</div>
			<div className='w-full text-center my-5 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>

			<div className='flex items-center flex-col md:flex-row justify-center gap-3'>
				<img src='/assets/tiers/tiers-2.svg' alt='tiers-2' className='w-[100px] h-[100px]' />
				<div className='flex flex-row items-center justify-center gap-2 md:gap-4'>
					<TierInfo heading='DFP Required' value='40,000' />
					<TierInfo heading='Pool Weightage' value='10X' />
					<TierInfo heading='Time of Stake' value='30 Days' />
				</div>
			</div>
			<div className='w-full text-center my-5 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>

			<div className='flex items-center flex-col md:flex-row justify-center gap-3 my-5'>
				<img src='/assets/tiers/tiers-3.svg' alt='tiers-3' className='w-[100px] h-[100px]' />
				<div className='flex flex-row items-center justify-center gap-2 md:gap-4'>
					<TierInfo heading='DFP Required' value='60,000' />
					<TierInfo heading='Pool Weightage' value='30X' />
					<TierInfo heading='Time of Stake' value='180 Days' />
				</div>
			</div>
		</div>
	);
};

export default function Tier() {
	return (
		<div className='items-start mt-10'>
			<div>
				<h5 className='font-monument text-[25px] leading-[30px] text-white'>Tier System</h5>
				<div className='lg:w-[606px] mt-4'>
					<p className='text-theme-100 font-DMSans text-base leading-[21px]'>
						Staking your tokens will generate new tokens daily based on the APY percentage above. If you
						stake in one of the tiers, it also makes you eligible for early contribution rounds to IDOs of
						projects launched on Defipronto.
					</p>
					<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
						If you stake enough tokens to reach one of the following staking tiers, you will have an
						opportunity to get into reserved early contribution rounds to any of the projects that IDO
						through Defipronto. We will take a snapshot at a specific time and date, as outlined in that
						project&apos;s roadmap. In order to be considered for the snapshot, please remember to sign your
						wallet address up for the appropriate whitelist.
					</p>
					<p className='mt-8 text-theme-100 font-DMSans'>
						<span className='text-theme-main'>Note:</span> You can meet more than one tier at once. For
						example, if you stake 75,000 tokens at one address, you will qualify for both Tier 1 and 2 Be
						sure to follow our socials and check the announcement channels to keep informed about upcoming
						IDOs and important dates.
					</p>
				</div>
			</div>
		</div>
	);
}
