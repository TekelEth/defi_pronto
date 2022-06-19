import Button from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';
import InputField from 'components/general/InputField';
import Modal from 'components/general/Modal';
import { useState } from 'react';

export default function UnStakingPageModal({ isOpen, openModal, closeModal }) {
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
		0: <EnterUnStakeAmount nextStep={nextStep} />,
		1: <ConfirmUnStakeAmount nextStep={nextStep} />,
		2: <UnStakeCompletedd />,
	};

	return handlers[step];
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
		<div>
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
