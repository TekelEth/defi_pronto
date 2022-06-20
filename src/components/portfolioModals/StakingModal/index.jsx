import Button, { ButtonWithText } from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';
import Icon from 'components/general/Icons';
import InputField from 'components/general/InputField';
import Modal from 'components/general/Modal';
import { useState } from 'react';

function modalHandler(step, nextStep) {
	const handlers = {
		0: <TermsAndConditions nextStep={nextStep} />,
		1: <LockDuration nextStep={nextStep} />,
		2: <EnterAmount nextStep={nextStep} />,
		3: <ConfirmAmount nextStep={nextStep} />,
		4: <CompletedStake />,
	};

	return handlers[step];
}

export default function StakingModal({ isOpen, openModal, closeModal }) {
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
			{/* <ModalHandler step={step} nextStep={nextStep} /> */}
		</Modal>
	);
}

function TermsAndConditions({ nextStep }) {
	return (
		<div>
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

function LockDuration({ nextStep }) {
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
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Staking Info</h5>

			<hr className='w-full broder-2 border-[#606060]  mt-10 mx-auto' />

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
			<div className='flex justify-center flex-col  w-full my-8'>
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

function EnterAmount({ nextStep }) {
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Enter Stake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				The amount of $DFP you want to stake
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='6,000 DFP'
					actionLink={<ButtonWithText text='Need more DFP' link={'/'} linkTitle='Buy more' />}
					subBalance={
						<span className='text-[10px] leading-[13px] text-theme-100 font-DMSans md:text-sm md:leading-[18px]'>
							Balance: 250,000 DFP
						</span>
					}
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

function ConfirmAmount({ nextStep }) {
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Confirm Stake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				Please confirm the amount of $DFP you want to stake
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='6,000 DFP'
					actionLink={<ButtonWithText text='Need more DFP' link={'/'} linkTitle='Buy more' />}
					subBalance={
						<span className='text-[10px] leading-[13px] text-theme-100 font-DMSans text-sm md:leading-[18px]'>
							Balance: 250,000 DFP
						</span>
					}
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

function CompletedStake() {
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Stake Completed</h5>
			<p className='font-DmSams text-[16px] leading-[21px] text-theme-100 mt-1'>
				You have successfully staked <span className='text-white'>6,000 DFP</span>
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'0x7bfgh5236457tyu689573542tg4624347c677'}
					icon={'ri-file-copy-line'}
					actionLink={
						<ButtonWithText link={'/'} linkTitle='View on Cardano Testnet Explorer' />
						// <CustomLink href='/' className='text-sm font-DMSans leading-[18px] text-theme-main underline'>
						// 	View on Cardano Testnet Explorer
						// </CustomLink>
					}
				/>
			</div>

			<div className='flex justify-center flex-col  w-full my-8'>
				<Button
					title={'Stake more'}
					variant={'contained'}
					color='primary'
					icon={'ri-arrow-right-up-line'}
					// onClick={nextStep}
				/>
			</div>
		</div>
	);
}

function StakeCalculator({}) {
	const [value, setValue] = useState();
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
