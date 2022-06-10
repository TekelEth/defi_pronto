import Button from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';
import InputField from 'components/general/InputField';
import Modal from 'components/general/Modal';
import { useState } from 'react';

export const TermsAndConditions = ({ nextStep }) => {
	return (
		<div>
			<h5 className='font-monument text-[20px] leading-[30px] text-white'>Staking Info</h5>
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
			<h5 className='font-monument text-[20px] leading-[30px] text-white mt-4'>Terms & Conditions</h5>
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
};

function modalHandler(step, nextStep) {
	const handlers = {
		0: <TermsAndConditions nextStep={nextStep} />,
		1: <EnterAmount nextStep={nextStep} />,
		2: <ConfirmAmount nextStep={nextStep} />,
		3: <CompletedStake />,
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
			<h5 className='font-monument text-[20px] leading-[30px] text-white'>Enter Stake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				The amount of $DFP you want to stake
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='6,000 DFP'
					actionLink={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>
							Need more DFP,{' '}
							<CustomLink href='/' className='text-theme-main underline'>
								Buy more
							</CustomLink>
						</span>
					}
					subBalance={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>Balance: 250,000 DFP</span>
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
			<h5 className='font-monument text-[20px] leading-[30px] text-white'>Confirm Stake Amount</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				Please confirm the amount of $DFP you want to stake
			</p>
			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='6,000 DFP'
					actionLink={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>
							Need more DFP,{' '}
							<CustomLink href='/' className='text-theme-main underline'>
								Buy more
							</CustomLink>
						</span>
					}
					subBalance={
						<span className='text-sm text-theme-100 font-DMSans leading-[18px]'>Balance: 250,000 DFP</span>
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
			<h5 className='font-monument text-[20px] leading-[30px] text-white'>Stake Completed</h5>
			<p className='font-DmSams text-[16px] leading-[21px] text-theme-100 mt-1'>
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
