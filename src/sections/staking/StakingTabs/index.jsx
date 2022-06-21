import { useState } from 'react';
import Icon from 'components/general/Icons';
import Stake, { StakingContent } from './Stake';
import UnStake, { UnStakeContent } from './UnStake';
import Tier, { TierContent } from './Tier';

const TabHeader = ({ title, current, clicked }) => {
	return (
		<button
			className={`inline-block py-3 mr-4 capitalize font-orbitron text-base md:text-xl leading-[19px] lg:leading-[24px] text-center ${
				current === title ? 'text-white rounded-t-lg border-b-[5px] border-theme-main' : 'text-theme-100'
			} tracking-wide`}
			onClick={clicked}
		>
			{title}
		</button>
	);
};

const Info = ({ keys, value, icon }) => (
	<div
		className={`w-full border-[1px] mb-3 ${
			icon ? 'border-theme-main' : 'border-[#515050]'
		} rounded-[3px] py-3 px-3 flex justify-between items-center`}
	>
		<span className='text-[#515050] capitalize text-[16px] leading-[20.83px] font-DMSans font-[700]'>{keys}</span>
		<div className=' items-center justify-center space-x-4'>
			<span className='text-white text-[16px] font-DMSans leading-[20.83px] text-right font-[700]'>{value}</span>
			{icon && (
				<span className='text-theme-main text-[16px] font-DMSans leading-[20.83px] text-right font-[700]'>
					<Icon icon={icon} />
				</span>
			)}
		</div>
	</div>
);

export default function StakingTabs() {
	const [current, setCurrent] = useState('stake');

	return (
		<section className='mt-8'>
			<div className='w-full flex-col flex md:flex-row items-center lg:space-x-8'>
				<div className='md:w-1/2 w-full flex flex-col col-span-2 justify-start py-10'>
					<div className='text-sm font-medium text-center border-b border-[#606060]'>
						<div className='flex flex-wrap -mb-px'>
							<TabHeader title='stake' current={current} clicked={() => setCurrent('stake')} />
							<TabHeader title='unstake' current={current} clicked={() => setCurrent('unstake')} />
							<TabHeader title='tiers' current={current} clicked={() => setCurrent('tiers')} />
						</div>
					</div>
					{/* tab content */}
					{current === 'stake' && <Stake />}
					{current === 'unstake' && <UnStake />}
					{current === 'tiers' && <Tier />}
				</div>
				<div className='w-full md:w-1/2 items-center justify-center py-5 md:pl-10'>
					{current === 'stake' && <StakingContent />}
					{current === 'unstake' && <UnStakeContent />}
					{current === 'tiers' && <TierContent />}
				</div>
			</div>
		</section>
	);
}
