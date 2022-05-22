/* eslint-disable @next/next/no-img-element */
import DefiPronto from 'components/subcomponents/DefiPronto';

export default function OurSupporters() {
	return (
		<div className='max-w-[90%] px-4 md:px-5 pt-8 pb-40 w-full mx-auto'>
			<DefiPronto />
			{/* <div className='px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'> */}
			<div className='w-full lg:max-w-[60%] mx-auto text-center flex flex-col items-center z-50 justify-center'>
				<h5 className='mb-4 font-monument text-[25px] lg:text-[39.06px] leading-[30px] lg:leading-[47px] tracking-wide text-white'>
					<span className='text-theme-main'>Our </span>Supporters
				</h5>
			</div>

			<div className='items-center justify-center mx-auto'>
				<div className='grid gap-8 mt-8 grid-cols-2 lg:grid-cols-4'>
					<img
						src='/assets/supporters/image-1.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
					<img
						src='/assets/supporters/image-2.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
					<img
						src='/assets/supporters/image-3.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
					<img
						src='/assets/supporters/image-4.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
				</div>
				<div className='grid gap-6 mt-8 grid-cols-2 lg:grid-cols-5'>
					<div className='hidden lg:block' />
					<img
						src='/assets/supporters/image-5.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
					<img
						src='/assets/supporters/image-6.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px]'
					/>
					<img
						src='/assets/supporters/image-7.svg'
						alt='sponsors'
						className='lg:w-[147px] w-[235px] h-[43px] lg:h-[70px] col-span-3 lg:col-span-1'
					/>
					<div className='hidden lg:block' />
				</div>
			</div>
		</div>
	);
}
