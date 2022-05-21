/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import CustomLink from '../customLink';
import Icon, { ArrowRightUpIcon } from '../Icons';
import { useRouter } from 'next/router';

export default function Nav() {
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const position = router.pathname === '/' ? 'absolute bg-transparent' : 'sticky bg-[#241B23]';
	return (
		<div className={` ${position} inset-x-0 z-30 top-0 px-4 py-6 w-full max-w-full  md:px-5 lg:px-5 mx-auto`}>
			<div className='flex items-center max-w-[90%] mx-auto justify-between'>
				<CustomLink href={'/'} className='flex items-center'>
					<img src='/assets/logo.svg' alt='Defi Pronto Logo' className=' w-14' />
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
						className='p-2 -mr-1 text-[24px] text-white transition duration-200'
						onClick={() => setIsMenuOpen(true)}
					>
						<Icon icon={'ri-menu-3-fill'} />
					</button>
				</div>
			</div>
		</div>
	);
}
