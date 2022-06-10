import { Dialog, Transition } from '@headlessui/react';
import Icon from 'components/general/Icons';
import { Fragment } from 'react';

export default function Modal({ isOpen, closeModal, step, prevStep, children }) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as='div'
				className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center items-center'
				onClose={closeModal}
			>
				<div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
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
							<div className='flex items-center justify-between p-4'>
								{/* Start of action button */}
								<div>
									{step !== 0 && (
										<button className='text-[20px] text-theme-main' onClick={prevStep}>
											<Icon icon={'ri-arrow-left-line'} /> {/* back button */}
										</button>
									)}
								</div>
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
							<div className='px-4 py-3'>{children}</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}

{
	/* export const sal = () => {
    return (
        <div className='overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center'>
        <div className='relative p-4 w-full max-w-2xl h-full md:h-auto'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
</div>
</div>
</div>
    )
} */
}
