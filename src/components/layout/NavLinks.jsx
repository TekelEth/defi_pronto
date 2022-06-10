import CustomLink from 'components/general/CustomLink';
import Icon from 'components/general/Icons';
import { useRouter } from 'next/router';

export default function NavLinks() {
	const router = useRouter();
	const path_name = router.pathname;
	return (
		<>
			<CustomLink
				href={'/about'}
				className={`${
					path_name === '/about' ? 'text-theme-main' : 'text-white'
				} w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-1`}
			>
				About
			</CustomLink>
			<CustomLink
				href={'/#features'}
				className={`${
					path_name === '/features' ? 'text-theme-main' : 'text-white'
				} w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-2`}
			>
				Features
			</CustomLink>
			<CustomLink
				href={'/#howitworks'}
				className={`${
					path_name === '/howitworks' ? 'text-theme-main' : 'text-white'
				} w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-3`}
			>
				How it works
			</CustomLink>
			<CustomLink
				href={'/projects'}
				className={`${
					path_name === '/projects' ? 'text-theme-main' : 'text-white'
				} w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-4`}
			>
				Projects
			</CustomLink>
			<CustomLink
				href={'/staking'}
				className={`${
					path_name === '/staking' ? 'text-theme-main' : 'text-white'
				} w-auto h-[21px] font-DMSans font-bold text-base leading-[21px] hover:text-theme-main order-5`}
			>
				Staking
			</CustomLink>
			<div>
				<button className='flex flex-row justify-center items-center py-[15px] px-[32px] gap-2 text-white bg-theme-main rounded-[5px]'>
					<span className='text-base font-DMSans font-bold leading-[21px]'>Connect Wallet</span>
					<Icon icon={'ri-arrow-right-up-line'} className='w-[24px] h-[24px] text-white' />
				</button>
			</div>
		</>
	);
}
