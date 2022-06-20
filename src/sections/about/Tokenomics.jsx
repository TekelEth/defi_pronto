import Header from 'components/subcomponents/Header';
import React from 'react';

const TokenDetails = ({ title, amount }) => (
	<div className='flex flex-col h-[160px] bg-[#241B23] cursor-default border-[#E74141] border-2 py-4 items-center text-center justify-center rounded-[20px] hover:shadow-shadow-card'>
		<span className='text-[#E74141] font-orbitron text-[12px] leading-[14.4px] text-center'>{title} </span>
		<span className='text-white text-center text-[31.25px] md:text-[39px] leading-[37.5px] md:leading-[47px] font-orbitron '>
			{amount}
		</span>
	</div>
);

function Tokenomics() {
	return (
		<div className='w-full'>
			<Header
				header='Tokenomics'
				content='Tokenomics Description: Ever wondered how many $DFP tokens will ever exist? and how it is distributed.'
			/>
			<div className='w-full my-4 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4'>
				<TokenDetails title='Token Name' amount='Defipronto' />
				<TokenDetails title='Market Cap' amount='$1,000,000' />
				<TokenDetails title='Ticker' amount='$DFP' />
			</div>
		</div>
	);
}

export default Tokenomics;
