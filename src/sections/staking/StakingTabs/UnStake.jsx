import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import Icon from 'components/general/Icons';
import UnStakingPageModal from '../UnStakingPageModal';
import { useState } from 'react';
import StakingCalculator from './StakingCalculator';
import Modal from 'components/general/Modal';

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

export const UnStakeContent = () => {
	let [isOpen, setIsOpen] = useState(false);
	let [isShow, setIsShow] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const showModal = () => {
		setIsShow(true);
	};
	const closeShowModal = () => {
		setIsShow(false);
	};
	return (
		<div className='p-5 md:p-10 flex justify-center flex-col border-2 w-full bg-theme-card border-theme-main rounded-[10px]'>
			<h5 className='font-orbitron text-left text-[25px] leading-[30px] text-white'>Unstake</h5>

			<div className='w-full text-center mt-10 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>

			<InfoCard keys='Your Staked Amount' value='25,000 DFP' />
			<InfoCard keys='Pending Withdrawal Amount' value='5,000 DFP' />
			<div className='mt-6'>
				<InfoCard keys='Balance' value='6,000 DFP' icon='ri-calculator-line' onClick={openModal} />
			</div>

			<div className='flex items-start justify-start mt-2 mb-8'>
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
			<UnStakingPageModal isOpen={isOpen} openModal={openModal} closeModal={closeModal} />
			<Modal isOpen={isShow} openModal={showModal} closeModal={closeShowModal}>
				<StakingCalculator />
			</Modal>
		</div>
	);
};

export default function UnStake() {
	return (
		<div className='items-start mt-10'>
			<div>
				<h5 className='font-orbitron text-[25px] leading-[30px] text-white'>Warning!</h5>
				<div className='lg:w-[606px] mt-4'>
					<p className='text-theme-100 font-DMSans text-base leading-[21px]'>
						You will get a refund of your tokens and won???t join the next IDO pool. The refund is calculated
						based on the number of tokens left in the pool, which you are not eligible to claim, and the
						token???s IDO price.
					</p>
					<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
						The forfeited token vestings will be redistributed to Defipronto development fund, further
						developing the platform and ecosystem.
					</p>
					<p className='mt-8 text-theme-100 font-DMSans'>
						<span className='text-theme-main'>Note:</span> Early unstaking attracts a{' '}
						<span className='text-white'>15% fee</span>. The unstaked amount will be airdropped into your
						wallet within the stipulated time frame.
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
