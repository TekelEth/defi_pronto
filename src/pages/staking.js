import Content from 'components/staking/content';
import StakingTabs from 'components/staking/StakingTabs';

export default function Staking() {
	return (
		<div className='max-w-[90%] px-4 md:px-5 h-full  py-8 w-full mx-auto'>
			<Content />
			<StakingTabs />
		</div>
	);
}
