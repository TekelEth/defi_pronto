import Button from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';
import Icon from 'components/general/Icons';
import InputField from 'components/general/InputField';
import Modal from 'components/general/Modal';
import { useState } from 'react';

export default function UnStakingModal({ isOpen, openModal, closeModal }) {
	const [step, setStep] = useState(0);

	// move to the next step
	const nextStep = () => {
		setStep(step + 1);
	};

	// Go back to previous step
	const prevStep = () => {
		setStep(step - 1);
	};
	return (
		<Modal isOpen={isOpen} openModal={openModal} step={step} prevStep={prevStep} closeModal={closeModal}>
			{modalHandler(step, nextStep)}
		</Modal>
	);
}

function modalHandler(step, nextStep) {
	const handlers = {
		0: <TermsAndConditions nextStep={nextStep} />,
		1: <UnStake nextStep={nextStep} />,
		2: <EnterUnStakeAmount nextStep={nextStep} />,
		3: <ConfirmUnStakeAmount nextStep={nextStep} />,
		4: <UnStakeCompletedd />,
	};

	return handlers[step];
}

function TermsAndConditions({ nextStep }) {
	return (
		<div className='h-full px-1 pr-2 md:px-0 max-h-[550px] md:h-full md:max-h-[520px] overflow-y-scroll md:overflow-hidden'>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Staking Info</h5>
			<div className='mt-2'>
				<p className='text-theme-100 font-DMSans text-sm leading-[21px]'>
					Staking your tokens will generate new tokens daily based on the APY percentage above. If you stake
					in one of the tiers, it also makes you eligible for early contribution rounds to IDOs of projects
					launched on Defipronto.
				</p>
				<p className='text-theme-100 font-DMSans text-sm leading-[21px]'>
					Be aware of the unstaking fees, as outlined in the table. These fees are in place to prevent someone
					from staking right before a tier snapshot, then unstaking immediately after. Unstaking fees are
					burned and will no longer be in circulation, reducing the total supply of DFP tokens.
				</p>
				<p className='mt-8 text-white font-DMSans'>
					<span className='text-theme-main'>Note:</span> Please stake a minimum of 100 DFP tokens, fewer will
					not work.
				</p>
			</div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white mt-4'>Terms & Conditions</h5>
			<p className='text-theme-100 font-DMSans text-sm leading-[21px] mt-2'>
				By using this website to stake tokens on the Cardano blockchain, you accept that you are interacting
				with a smart contract that this website has no control over. The operators of this website accept no
				liability whatsoever in relation to your use of these smart contracts. By using this website to stake,
				you also have read and agree to the{' '}
				<CustomLink href={'/terms'} className='text-theme-main'>
					Terms and Conditions
				</CustomLink>
				.
			</p>
			<div className='flex justify-center flex-col  w-full my-8'>
				<Button
					title={'Contuninue'}
					variant={'contained'}
					color='primary'
					icon={'ri-arrow-right-up-line'}
					onClick={nextStep}
				/>
			</div>
		</div>
	);
}

function UnStake({ nextStep }) {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
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
	return (
		<div className='h-full px-1 pr-2 md:px-0 max-h-[550px] md:h-full overflow-y-scroll md:overflow-hidden'>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Staking Info</h5>
			<hr className='w-full broder-2 border-[#606060] my-5 mx-auto' />

			<InfoCard keys='Your Staked Amount' value='25,000 DFP' />
			<InfoCard keys='Pending Withdrawal Amount' value='5,000 DFP' />
			<InfoCard keys='Balance' value='6,000 DFP' icon='ri-calculator-line' onClick={openModal} />

			<div className='flex items-start justify-start my-6'>
				<input
					id='link-checkbox'
					type='checkbox'
					value=''
					className='w-4 h-4 text-theme-main bg-gray-100 rounded border-gray-300 focus:ring-theme-main dark:focus:ring-theme-main accent-theme-main focus:ring-2'
				/>
				<label htmlFor='link-checkbox' className='ml-2 text-sm font-medium text-white'>
					I have read and accept the terms described above.
				</label>
			</div>
			<div className='flex justify-center flex-col  w-full my-4'>
				<Button
					title={'Approve'}
					variant={'contained'}
					color='primary'
					icon={'ri-arrow-right-up-line'}
					onClick={nextStep}
				/>
			</div>
			<Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
				<StakeCalculator />
			</Modal>
		</div>
	);
}

function EnterUnStakeAmount({ nextStep }) {
	const [value, setValue] = useState('');
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Enter Unstake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				The amount of $DFP you want to unstake
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='0.00005 DFP'
					actionLink={
						value !== '' && <span className='text-white text-sm leading-[18px] font-DMSans'>{value}</span>
					}
					subBalance={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>Balance: 200,000 DFP</span>
					}
					onChange={() => setValue('Early Unstake Fee - 15%')}
				/>
			</div>
			<div className='flex justify-center flex-col  w-full my-8'>
				<Button
					title={'Proceed'}
					variant={'contained'}
					color='primary'
					icon={'ri-arrow-right-up-line'}
					onClick={nextStep}
				/>
			</div>
		</div>
	);
}

function ConfirmUnStakeAmount({ nextStep }) {
	const [value, setValue] = useState('');
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Confirm Unstake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				Please confirm the amount of $DFP you want to unstake{' '}
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='0.00005 DFP'
					actionLink={
						value !== '' && <span className='text-white text-sm leading-[18px] font-DMSans'>{value}</span>
					}
					subBalance={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>Balance: 200,000 DFP</span>
					}
					onChange={() => setValue('Early Unstake Fee - 15%')}
				/>
			</div>
			<div className='flex justify-center flex-col  w-full my-8'>
				<Button
					title={'Confirm'}
					variant={'contained'}
					color='primary'
					icon={'ri-arrow-right-up-line'}
					onClick={nextStep}
				/>
			</div>
		</div>
	);
}

function UnStakeCompletedd() {
	return (
		<div className='h-full px-1 pr-2 md:px-0 max-h-[550px] md:h-full md:max-h-[520px] overflow-y-scroll md:overflow-hidden'>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Unstake Completed</h5>
			<p className='font-DmSams text-base leading-[21px] text-theme-100 mt-1'>
				You have successfully staked <span className='text-white'>6,000 DFP</span>
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'0x7bfgh5236457tyu689573542tg4624347c677'}
					icon={'ri-file-copy-line'}
					actionLink={
						<CustomLink href='/' className='text-sm font-DMSans leading-[18px] text-theme-main underline'>
							View on Cardano Testnet Explorer
						</CustomLink>
					}
				/>
			</div>
			<div className='w-full text-center my-10 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>
			<div className='w-full border-2 mb-3 border-theme-100 rounded-[5px] py-3 px-3 flex justify-between items-center text-theme-100 capitalize text-[12px] md:text-base leading-[17px] md:leading-[21px] font-DMSans font-bold'>
				<span>Pending Withdrawal Amount</span>
				<span>6,000 DFP</span>
			</div>

			<p className='text-sm md:text-base leading-[17px] md:leading-[21px] text-theme-100 font-bold font-DMSans'>
				Amount Withdrawable at: <span className='text-white'>14 June, 2022. 14:03 GMT+1</span>
			</p>

			<div className='flex justify-center flex-col  w-full my-8'>
				<Button title={'Restake'} variant={'contained'} color='primary' icon={'ri-arrow-right-up-line'} />
			</div>

			<div className='flex justify-center flex-col  w-full my-8'>
				<Button title={'Withdraw'} variant={'outlined'} color='disable' icon={'ri-arrow-right-up-line'} />
			</div>
		</div>
	);
}

function StakeCalculator({}) {
	const [value, setValue] = useState(0);
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Stake Calculator</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				Calculate the amount of DFP you will earn
			</p>

			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='10,000 DFP'
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<hr className='w-full broder-2 border-[#606060]  mt-10 mx-auto' />

			<div className='w-full mt-6 flex-col flex md:flex-row items-center gap-6'>
				<div className='w-full md:w-2/5'>
					<div className='first-letter:w-full border-2 mb-3  border-[#515050] rounded-[5px] py-2 px-3 flex justify-between items-center'>
						<span className='text-[#515050] capitalize text-[10.24px] md:text-base leading-[13px] mc:leading-[20.83px] font-DMSans font-bold'>
							APY Rate
						</span>
						<div className='items-center justify-center space-x-4'>
							<span className='text-white text-sm md:text-base font-DMSans leading-[18px] md:leading-[20.83px] text-right font-bold'>
								5%
							</span>
						</div>
					</div>
				</div>
				<div className='w-full md:w-3/5'>
					<div className='first-letter:w-full border-2 mb-3  border-[#515050] rounded-[5px] py-2 px-3 flex justify-between items-center'>
						<span className='text-[#515050] capitalize text-[10.24px] md:text-base leading-[13px] mc:leading-[20.83px] font-DMSans font-bold'>
							Earnings
						</span>
						<div className='items-center justify-center space-x-4'>
							<span className='text-white text-sm md:text-base font-DMSans leading-[18px] md:leading-[20.83px] text-right font-bold'>
								{value * 2} DFP
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
