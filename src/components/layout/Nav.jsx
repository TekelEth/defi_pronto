/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from 'react';
import CustomLink from 'components/general/CustomLink';
import Icon from 'components/general/Icons';
import { useRouter } from 'next/router';
import WalletConnect from 'components/general/Modal/WalletConnect';
import { WalletContext } from './WalletContext';

const MobileNav = ({ isMenuOpen, setIsMenuOpen, walletDisplay }) => {
	const router = useRouter();
	const path_name = router.pathname;
	const walletDisplays = () => {
		setIsMenuOpen(false)
		walletDisplay()
	}
	return (
		<div
			className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#241B23] h-screen  duration-300 py-6 my-4 flex flex-col items-start gap-y-7`}
		>
			<div className='flex flex-col items-start py-2 px-2 gap-8'>
				<CustomLink
					onClick={() => setIsMenuOpen(false)}
					href={'/about'}
					className={`${path_name === '/about' ? 'text-theme-main' : 'text-white'
						} w-auto h-[21px] font-orbitron font-bold text-lg leading-[21px] hover:text-theme-main order-1`}
				>
					About
				</CustomLink>
				<CustomLink
					onClick={() => setIsMenuOpen(false)}
					href={'/#features'}
					className={`${path_name === '/features' ? 'text-theme-main' : 'text-white'
						} w-auto h-[21px] font-orbitron font-bold text-lg leading-[21px] hover:text-theme-main order-2`}
				>
					Features
				</CustomLink>
				<CustomLink
					onClick={() => setIsMenuOpen(false)}
					href={'/#howitworks'}
					className={`${path_name === '/howitworks' ? 'text-theme-main' : 'text-white'
						} w-auto h-[21px] font-orbitron font-bold text-lg leading-[21px] hover:text-theme-main order-3`}
				>
					How it works
				</CustomLink>

				<CustomLink
					onClick={() => setIsMenuOpen(false)}
					href={'/projects'}
					className={`${path_name === '/projects' ? 'text-theme-main' : 'text-white'
						} w-auto h-[21px] font-orbitron font-bold text-lg leading-[21px] hover:text-theme-main order-4`}
				>
					Projects
				</CustomLink>
				<CustomLink
					onClick={() => setIsMenuOpen(false)}
					href={'/staking'}
					className={`${path_name === '/staking' ? 'text-theme-main' : 'text-white'
						} w-auto h-[21px] font-orbitron font-bold text-lg leading-[21px] hover:text-theme-main order-5`}
				>
					Staking
				</CustomLink>
			</div>
			<button className='flex flex-row justify-center items-center py-[15px] px-[32px] gap-2 text-white bg-theme-main rounded-[5px]' onClick={walletDisplays}>
				<span className='text-base font-orbitron font-bold leading-[21px]'>Connect Wallet</span>
				{/* <ArrowRightUpIcon className='w-[24px] h-[24px] text-white' /> */}
				<Icon icon={'ri-arrow-right-up-line'} className='w-[24px] h-[24px] text-white' />
			</button>
		</div>
	);
};

export default function Nav() {
	const [showWallet, setShowWallet] = useState(false);
	const router = useRouter();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const path_name = router.pathname;
	const position = path_name === '/' ? 'absolute bg-transparent' : 'sticky bg-[#241B23]';
	const closeWallet = () => {
		setShowWallet(false)
		setIsMenuOpen(false)
	}
	const { connected, setConnected } = useContext(WalletContext);
	console.log(connected, "connected")
	return (
		<div className={`${position} inset-x-0 z-30 top-0 px-4 md:px-12 py-6 w-full max-w-full mx-auto`}>
			<div className='flex items-center mx-auto justify-between'>
				<CustomLink href={connected ? '/auth/portfolio/' : '/'} className='flex items-center'>
					<img src='/assets/logo.svg' alt='Defi Pronto Logo' className=' w-14' />
				</CustomLink>
				<div className='hidden lg:flex lg:flex items-center gap-7'>
					<div className='flex flex-row items-start py-2 px-2 gap-8'>
						{
							!connected && <>
								<CustomLink
									href={'/about'}
									className={`${path_name === '/about' ? 'text-theme-main' : 'text-white'
										} w-auto h-[21px] font-orbitron font-bold text-base leading-[21px] hover:text-theme-main order-1`}
								>
									About
								</CustomLink>
								<CustomLink
									href={'/#features'}
									className={`${path_name === '/features' ? 'text-theme-main' : 'text-white'
										} w-auto h-[21px] font-orbitron font-bold text-base leading-[21px] hover:text-theme-main order-2`}
								>
									Features
								</CustomLink>
								<CustomLink
									href={'/#howitworks'}
									className={`${path_name === '/howitworks' ? 'text-theme-main' : 'text-white'
										} w-auto h-[21px] font-orbitron font-bold text-base leading-[21px] hover:text-theme-main order-3`}
								>
									How it works
								</CustomLink>
							</>
						}

						<CustomLink
							href={'/projects'}
							className={`${path_name === '/projects' ? 'text-theme-main' : 'text-white'
								} w-auto h-[21px] font-orbitron font-bold text-base leading-[21px] hover:text-theme-main order-4`}
						>
							Projects
						</CustomLink>
						<CustomLink
							href={'/staking'}
							className={`${path_name === '/staking' ? 'text-theme-main' : 'text-white'
								} w-auto h-[21px] font-orbitron font-bold text-base leading-[21px] hover:text-theme-main order-5`}
						>
							Staking
						</CustomLink>
					</div>
					<button className='flex flex-row justify-center items-center py-[15px] px-[32px] gap-2 text-white bg-theme-main rounded-[5px]' onClick={() => setShowWallet(true)}>
						<span className='text-base font-orbitron font-bold leading-[21px]'>Connect Wallet</span>
						{/* <ArrowRightUpIcon className='w-[24px] h-[24px] text-white' /> */}
						<Icon icon={'ri-arrow-right-up-line'} className='w-[24px] h-[24px] text-white' />
					</button>
				</div>

				<div className='lg:hidden'>
					<button
						aria-label='Open Menu'
						title='Open Menu'
						className='p-2 -mr-1 text-[24px] text-white transition duration-200'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <Icon icon={'ri-close-line'} /> : <Icon icon={'ri-menu-3-fill'} />}
					</button>
				</div>
			</div>
			<div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-[100%]'} transition-all duration-500`}>
				<MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} walletDisplay={() => setShowWallet(true)} />
			</div>

			<WalletConnect close={closeWallet} showWallet={showWallet} />
		</div>
	);
}
