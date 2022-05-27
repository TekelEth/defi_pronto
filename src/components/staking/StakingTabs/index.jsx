import CustomLink from 'components/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/Icons';
import { useState } from 'react';
import Stake, { StakeContent } from './Stake';
import Tier from './Tier';
import UnStake, { UnStakeContent } from './UnStake';

const TabHeader = ({ title, current, clicked }) => {
	return (
		<button
			className={`inline-block py-3 mr-4 capitalize font-monument text-base md:text-xl leading-[19px] lg:leading-[24px] text-center ${
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
				<div className='w-full md:w-1/2 items-center justify-center md:pl-10'>
					{current === 'stake' && <StakeContent />}
					{current === 'unstake' && <UnStakeContent />}

					{/* <div className='p-5 md:p-10 flex justify-center flex-col border-2 w-full border-theme-main rounded-[18px]'>
						<h5 className='font-monument text-left text-[25px] leading-[30px] text-white'>Lock Duration</h5>

						<div className='w-full text-center mt-10 mx-auto'>
							<hr className='w-full broder-2 border-[#606060]' />
						</div>

						<div className='w-full mt-6 flex-col flex md:flex-row items-center gap-6'>
							<div className='w-full md:w-2/5'>
								<Info keys='APY Rate' value='5%' />
							</div>
							<div className='w-full md:w-3/5'>
								<Info keys='Maturity Date' value='10 May, 2022' />
							</div>
						</div>
						<Info keys='APY Rate' value='5%' />
						<Info keys='Your Staked Amount' value='25,000 DFP' />
						<Info keys='Pending Withdrawal Amount' value='5,000 DFP' />
						<Info keys='Balance' value='6,000 DFP' icon='ri-calculator-line' />

						<div className='flex items-start justify-start my-6'>
							<input
								id='link-checkbox'
								type='checkbox'
								value=''
								className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
							/>
							<label
								htmlFor='link-checkbox'
								className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
							>
								I have read and accept the terms described above.
							</label>
						</div>

						<Button
							title={'Aprove'}
							variant={'contained'}
							color='primary'
							icon={'ri-arrow-right-up-line'}
						/>
					</div> */}
				</div>
			</div>
		</section>
	);
}
