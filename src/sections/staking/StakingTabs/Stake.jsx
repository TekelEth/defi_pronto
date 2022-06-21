import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Modal from 'components/general/Modal';
import Icon from 'components/general/Icons';
import { useState } from 'react';
import StakingPageModal from '../StakingPageModal';
import StakingCalculator from './StakingCalculator';
import StakeCalCulatorModal from 'components/general/Modal/StakeCalculatorModal';

const InfoCard = ({ keys, value, icon, ...rest }) => (
	<div
		className={`w-full border-2 mb-3 ${
			icon ? 'border-theme-main' : 'border-[#515050]'
		} rounded-[5px] py-2 px-3 flex justify-between items-center`}
	>
		<span className='text-[#515050] capitalize text-[10.24px] md:text-base leading-[13px] mc:leading-[20.83px] font-DMSans font-bold'>
			{keys}
		</span>
		<div className='items-center justify-center space-x-4'>
			<span className='text-white text-sm md:text-base font-DMSans leading-[18px] md:leading-[20.83px] text-right font-bold'>
				{value}
			</span>
			{icon && (
				<button
					{...rest}
					className='text-theme-main hover:text-white text-[16px] font-DMSans leading-[20.83px] text-right font-bold'
				>
					<Icon icon={icon} />
				</button>
			)}
		</div>
	</div>
);

export const StakingContent = () => {
	let [isOpen, setIsOpen] = useState(false);
	let [isCalcOpen, setIsCalcOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const closeCalcModal = () => {
		setIsCalcOpen(!isCalcOpen);
	};

	const openCalcModal = () => {
		setIsCalcOpen(!isCalcOpen);
	};

	return (
		<div className='p-5 md:p-10 flex mt-10 justify-center flex-col border-2 w-full border-theme-main rounded-[10px] bg-theme-card'>
			<h5 className='font-orbitron text-left text-[25px] leading-[30px] text-white'>Lock Duration</h5>

			<div className='w-full text-center mt-10 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>

			<div className='w-full mt-6 flex-col flex md:flex-row items-center gap-6'>
				<div className='w-full md:w-2/5'>
					<InfoCard keys='APY Rate' value='5%' />
				</div>
				<div className='w-full md:w-3/5'>
					<InfoCard keys='Maturity Date' value='10 May, 2022' />
				</div>
			</div>
			<InfoCard keys='APY Rate' value='5%' />
			<InfoCard keys='Your Staked Amount' value='25,000 DFP' />
			<InfoCard keys='Pending Withdrawal Amount' value='5,000 DFP' />
			<InfoCard keys='Balance' value='6,000 DFP' icon='ri-calculator-line' onClick={openModal} />

			<div className='flex items-start justify-start my-6'>
				<input
					id='link-checkbox'
					type='checkbox'
					value=''
					className='w-4 h-4 text-theme-main bg-gray-100 rounded border-gray-300 focus:ring-theme-main dark:focus:ring-theme-main focus:ring-2'
				/>
				<label htmlFor='link-checkbox' className='ml-2 text-sm font-medium text-white'>
					I have read and accept the terms described above.
				</label>
			</div>

			<Button
				title={'Aprove'}
				variant={'contained'}
				color='primary'
				icon={'ri-arrow-right-up-line'}
				onClick={openModal}
			/>
			<StakingPageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />

			<StakeCalCulatorModal isOpen={isCalcOpen} openModal={openCalcModal} closeModal={closeCalcModal}>
				<StakingCalculator />
			</StakeCalCulatorModal>
		</div>
	);
};

export default function Stake() {
	return (
		<div className='items-start mt-10'>
			<div>
				<h5 className='font-orbitron text-[25px] leading-[30px] text-white'>Staking Info</h5>
				<div className='lg:w-[606px] mt-4'>
					<p className='text-theme-100 font-DMSans text-base leading-[21px]'>
						Staking your tokens will generate new tokens daily based on the APY percentage above. If you
						stake in one of the tiers, it also makes you eligible for early contribution rounds to IDOs of
						projects launched on Defipronto.
					</p>
					<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
						Be aware of the unstaking fees, as outlined in the table. These fees are in place to prevent
						someone from staking right before a tier snapshot, then unstaking immediately after. Unstaking
						fees are burned and will no longer be in circulation, reducing the total supply of DFP tokens.
					</p>
					<p className='mt-8 text-white font-DMSans'>
						<span className='text-theme-main'>Note:</span> Please stake a minimum of 100 DFP tokens, fewer
						will not work.
					</p>
				</div>
				<h5 className='font-orbitron text-[25px] leading-[30px] text-white mt-8'>Terms & Conditions</h5>
				<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
					By using this website to stake tokens on the Cardano blockchain, you accept that you are interacting
					with a smart contract that this website has no control over. The operators of this website accept no
					liability whatsoever in relation to your use of these smart contracts. By using this website to
					stake, you also have read and agree to the{' '}
					<CustomLink href={'/terms'} className='text-theme-main'>
						Terms and Conditions
					</CustomLink>
					.
				</p>
			</div>
		</div>
	);
}
