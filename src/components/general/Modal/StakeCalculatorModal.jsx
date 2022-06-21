import { Dialog, Transition } from '@headlessui/react';
import Icon from 'components/general/Icons';
import { Fragment } from 'react';

export default function StakeCalCulatorModal({ isOpen, closeModal, children }) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full md:max-h-fit flex justify-center items-center my-4'
				onClose={closeModal}
			>
				<div className='relative p-4 w-full max-w-xl h-full'>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Dialog.Panel className='relative transform bg-theme-card shadow-xl transition-all border-2 border-theme-main rounded-[10px] p-4'>
							<div className='flex items-center justify-between p-1 md:p-2'>
								{/* Start of action button */}

								<div>
									<button
										className='text-[20px] text-white hover:text-theme-100'
										onClick={closeModal}
									>
										<Icon icon={'ri-close-fill'} /> {/* close button */}
									</button>
								</div>
							</div>
							{/* End of action button */}
							<div className='lg:p-2'>{children}</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
