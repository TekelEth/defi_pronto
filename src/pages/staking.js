import Head from 'next/head';
import Content from 'sections/staking/content';
import StakingTabs from 'sections/staking/StakingTabs';

export default function Staking() {
	return (
		<>
			<Head>
				<title>DefiPronto | Staking</title>
			</Head>

			<div className='container relative px-4 h-full md:py-20 w-full mx-auto md:bg-[url("/assets/backgrounds/staking-section.svg")] md:bg-no-repeat md:bg-cover md:bg-center'>
				<Content />
				<StakingTabs />
			</div>
		</>
	);
}
