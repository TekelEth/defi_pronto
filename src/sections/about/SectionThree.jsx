import DefiPronto from 'components/subcomponents/DefiPronto';
import Header from 'components/subcomponents/Header';
import React from 'react';
import FAQ from './FAQ';
import Chart from './Chart';

function SectionThree() {
	return (
		<div className='my-16'>
			<DefiPronto />
			<Header
				header='Allocation & Utility'
				content='$DFP Token Distribution and how the token will be utilized in the Defipronto ecosystem.'
			/>
			<Chart seed={80} strategic={30} pre_sale={80} liquidity={40} dao={70} />
			<FAQ />
		</div>
	);
}

export default SectionThree;
