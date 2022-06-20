import React from 'react';

function Roadmap() {
	return (
		<div className='md:max-w-[70%] max-w-full py-12 flex flex-col my-6 items-center justify-center mx-auto'>
			<h1 className='text-white font-[400] lg:w-[80%] mx-auto font-orbitron text-[25px] md:text-[49px] leading-[30px] md:leading-[58px] mb-8 text-center '>
				Our Road Map
			</h1>
			<div className='lg:w-[60%] w-full mx-auto relative position'>
				<div className='flex flex-col relative h-[200px] w-[50%] items-start justify-start'>
					<span className='font-[400] mb-2  text-[14px] md:text-[20px] leading-[16.8px] md:leading-[24px] font-orbitron text-white'>
						Phase 1 - Launch Platform
					</span>
					<div className='font-[400] w-full md:w-[80%] text-[14px] leading-[17px] font-DMSans text-theme-100'>
						DeFi Pronto Initial Announcement Defipronto Launchpad UI/UX Wireframing Website Release Onepager
						Release Partnerships & Integrations Private Seed Sale Community Building
					</div>
				</div>
				<div className='flex flex-col relative h-[200px] w-[50%] items-end justify-start'>
					<span className='font-[400] mb-2  text-[14px] md:text-[20px] leading-[16.8px] md:leading-[24px] font-orbitron text-white'>
						Phase 2 - Launch Token
					</span>
					<div className='font-[400] w-full md:w-[80%]  text-[14px] leading-[17px] font-DMSans text-theme-100'>
						Defipronto Accelerator Program Initial Projects Selection Tokenomics & Information About
						Selected Projects To be Launched DFP Token Pre-Sale Exchange Listing CMC/Coin Gecko Listing
						Initial Defipronto IDO Registration
					</div>
				</div>
				<div className='flex flex-col relative h-[200px] w-[50%] items-start justify-start'>
					<span className='font-[400] mb-2  text-[14px] md:text-[20px] leading-[16.8px] md:leading-[24px] font-orbitron text-white'>
						Phase 3 - Staking Begins
					</span>
					<div className='font-[400] w-full md:w-[80%]  text-[14px] leading-[17px] font-DMSans text-theme-100'>
						Project Team Token Lock As A Service Project Team Token Staking As A Service NFT Launchpad
						Defipronto NFT Launchpad
					</div>
				</div>
				<div className='flex flex-col relative h-[200px] w-[50%] items-end justify-start'>
					<span className='font-[400] text-[14px] md:text-[20px] leading-[16.8px] md:leading-[24px] mb-2 font-orbitron text-white'>
						Phase 4 - Onboard Projects
					</span>
					<div className='font-[400] w-full md:w-[80%]  text-[14px] leading-[17px] font-DMSans text-theme-100'>
						Further Partnerships Defipronto Launchpad As A Service
					</div>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
