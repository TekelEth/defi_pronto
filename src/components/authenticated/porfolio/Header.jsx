import React from 'react';

function Header({ heading }) {
	return (
		<div className='flex md:mb-6 md:mb-0 items-center'>
			<span className='w-10 h-1 bg-[#E74141] mr-2'></span>
			<span className='bg-[#E74141] p-1 rounded-full mr-4'></span>
			<span className='font-[400] text-[16px] md:text-[31.25px] leading-[19.2px] md:leading-[37.5px] font-orbitron text-white capitalize'>
				{heading}
			</span>
		</div>
	);
}

export default Header;
