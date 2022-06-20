/* eslint-disable @next/next/no-img-element */ // import Toast, { ToastMessage } from 'components/general/Toast';
import DefiPronto from 'components/subcomponents/DefiPronto';

export default function OurSupporters() {
	return (
		<div className='max-w-[90%] px-4 md:px-5  pb-40 w-full mx-auto'>
			<DefiPronto />
			{/* <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'> */}
			<div className='w-full lg:max-w-[60%] mx-auto text-center flex flex-col items-center z-50 justify-center mb-8'>
				<h5 className='mb-4 font-orbitron text-[25px] lg:text-[39.06px] leading-[30px] lg:leading-[47px] tracking-wide text-white'>
					<span className='text-theme-main'>Our </span>Supporters
					{/* <Toast type={'disconnected'}><ToastMessage message='Wallet Disconnected' /></Toast> */}
				</h5>
			</div>

			<div className='items-center justify-center mx-auto'>
				<div className='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-8'>
					<div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2'>
						<img
							src='/assets/supporters/image-1.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px] col-span-1 md:col-span-2 lg:col-span-2'
						/>
					</div>
					<div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2'>
						<img
							src='/assets/supporters/image-2.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px] col-span-1 md:col-span-2 lg:col-span-2'
						/>
					</div>
					<div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2'>
						<img
							src='/assets/supporters/image-3.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px] col-span-1 md:col-span-2 lg:col-span-2'
						/>
					</div>
					<div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2'>
						<img
							src='/assets/supporters/image-4.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px] col-span-1 md:col-span-2 lg:col-span-2'
						/>
					</div>

					<div className='hidden md:flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1' />
					<div className='flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-2'>
						<img
							src='/assets/supporters/image-5.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px]'
						/>
					</div>
					<div className='flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-2'>
						<img
							src='/assets/supporters/image-6.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px]'
						/>
					</div>
					<div className='flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-2'>
						<img
							src='/assets/supporters/image-1.svg'
							alt='sponsors'
							className='w-[128px] h-full md:w-[200px] md:h-[60px]'
						/>
					</div>
					<div className='hidden md:flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1' />
				</div>
			</div>
		</div>
	);
}
