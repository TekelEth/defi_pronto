import React from 'react';

function Hero() {
	return (
		<div className='my-16 max-w-[100%] md:max-w-[80%] w-full mx-auto flex flex-col items-center justify-center text-center'>
			<span className='font-orbitron capitalize font-[400] text-[16px] md:text-[20px] md:leading-[24px] leading-[19.2px] text-[#A4A4A4] mb-3'>
				Projects
			</span>
			<span className='font-orbitron font-[400] text-[29.25px]  md:text-[48.8px] leading-[37.5px] md:leading-[59px] text-center text-white '>
				Decentralized Incubation and launchpad for <span className='text-[#E74141]'>cardano</span>
			</span>
		</div>
	);
}

export default Hero;
