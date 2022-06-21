import Button, { ButtonWithText } from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';
import Icon from 'components/general/Icons';
import InputField from 'components/general/InputField';
import Modal from 'components/general/Modal';
import { useState } from 'react';

function modalHandler(step, nextStep) {
	const handlers = {
		0: <EnterAmount nextStep={nextStep} />,
		1: <ConfirmAmount nextStep={nextStep} />,
		2: <CompletedStake />,
	};

	return handlers[step];
}

export default function StakingPageModal({ isOpen, openModal, closeModal }) {
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
					type={'number'}
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
					actionLink={<ButtonWithText link={'/'} linkTitle='View on Cardano Testnet Explorer' />}
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
