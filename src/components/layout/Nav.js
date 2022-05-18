/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import CustomLink from '../CustomLink';
import Icon, { ArrowRightUpIcon } from '../Icons';

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className='inset-x-0 z-50 absolute top-0 px-4 py-6 mx-auto w-full max-w-full bg-transparent  md:px-24 lg:px-8'>
			<div className='flex items-center max-w-[90%] mx-auto justify-between'>
				<CustomLink href={'/'} className='flex items-center'>
					<img src='/assets/logo.png' alt='Defi Pronto Logo' className=' w-14' />
				</CustomLink>
				<div className='hidden md:flex lg:flex items-center gap-7'>
					<div className='flex flex-row items-start py-2 px-2 gap-8'>
						<CustomLink
							href={'/'}
							className='text-white w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main'
						>
							About
						</CustomLink>
						<CustomLink
							href={'/'}
							className='text-white w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-1'
						>
							Features
						</CustomLink>
						<CustomLink
							href={'/'}
							className='text-white w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-2'
						>
							How it works
						</CustomLink>
						<CustomLink
							href={'/'}
							className='text-white w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-3'
						>
							Projects
						</CustomLink>
						<CustomLink
							href={'/'}
							className='text-white w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-4'
						>
							Staking
						</CustomLink>
					</div>
					<button className='flex flex-row justify-center items-center py-[15px] px-[32px] gap-2 text-white bg-theme-main rounded-[5px]'>
						<span className='text-base font-DMSans font-bold leading-[21px]'>Connect Wallet</span>
						{/* <ArrowRightUpIcon className='w-[24px] h-[24px] text-white' /> */}
						<Icon icon={'ri-arrow-right-up-line'} className='w-[24px] h-[24px] text-white' />
					</button>
				</div>

				<div className='lg:hidden'>
					<button
						aria-label='Open Menu'
						title='Open Menu'
						className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
							/>
							<path
								fill='currentColor'
								d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
							/>
							<path
								fill='currentColor'
								d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
