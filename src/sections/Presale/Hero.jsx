import CustomLink from 'components/general/CustomLink';
import Button from 'components/general/Button';
import React, { useContext } from 'react';
import { WalletContext } from 'components/layout/WalletContext';

function Hero() {
	const { setShowWallet } = useContext(WalletContext);
	return (
		<div className='w-full flex-col flex  md:flex-row items-center'>
			<div className='md:w-1/2 w-full flex flex-col col-span-2 justify-start lg:py-8'>
				<span className='max-w-[643px] text-[#A4A4A4] text-[16px] md:text-[21px] font-orbitron mb-2 font-semibold leading-[25px]'>Connect wallet to register for pre-sale</span>
				<h1 className=' max-w-[643px] font-orbitron font-normal text-[30px] lg:text-[61px] text-white leading-[37px] lg:leading-[73px]'>
					Join the early birds to participate in the  <span className='text-theme-main'>Defi Pronto Pre-sale</span>
				</h1>
				<p className='lg:w-[542px] w-full  mt-3 text-left  text-theme-100 md:text-base text-[12.8px]  font-DMSans leading-[24px]'>
					If you have trouble connecting or are using a wallet that does not support DAPPs, you can <CustomLink href={'/presale/register_manually'} ><span className='text-theme-main font-semibold underline'>Connect Manually</span></CustomLink>
				</p>
				<div className='mt-6 flex items-center space-x-4 lg:space-x-10'>
					<CustomLink href={'#'}>
						<Button
							onClick={() => setShowWallet(true)}
							title='Connect Your Wallet'
							variant={'outlined'}
							color='primary'
							icon='ri-wallet-2-line'
							order
						/>
					</CustomLink>

				</div>
			</div>
			<div className='md:w-1/2 h-[500px] h-ful w-full mt-2 md:mt-0 bg-presale bg-center bg-cover'></div>
		</div>
	);
}

export default Hero;
