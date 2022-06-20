import Icon from 'components/general/Icons';
import { useState } from 'react';

const Card = ({ id, icon, header, content, isActive, onClicked }) => {
	return (
		<div
			onClick={onClicked}
			className={`md:h-full h-[393px] my-3 px-4 md:my-0 w-[223px] mx-auto  md:w-full col-span-1 flex flex-col items-center hover:bg-theme-main duration-700 justify-center text-center cursor-default ${
				isActive === id ? 'bg-[#E74141]' : 'bg-[#2F282E]'
			} rounded-[10px]`}
		>
			<div className='text-5xl p-4 flex items-center rounded-full bg-white mb-8'>
				<Icon icon={icon} />
			</div>
			<span className='font-[400] text-white mb-4 font-orbitron text-[25px] text-center'>{header}</span>
			<span className='font-[400] font-DMSans text-[#CFCFCF] text-[13px] leading-[17px] text-center'>
				{content}
			</span>
		</div>
	);
};

function Section1() {
	const [isActive, setIsActive] = useState(1);
	return (
		<div className='w-full h-full md:h-[426px] mb-12 gap-x-4 grid grid-cols-1 lg:grid-cols-5'>
			<div className='col-span-1 md:col-span-2 flex flex-col justify-center items-center w-full md:w-[90%]'>
				<span className='text-[25px] md:text-[39px] leading-[30px] md:leading-[47px] font-[400] mb-4 font-orbitron text-white'>
					we can help your project succeed
				</span>
				<span className='font-DMSans text-[12.8px]  md:text-[16px] text-[#A4A4A4] mb-6 md:mb-0 leading-[16.7px] md:leading-[21px] font-[400]'>
					Join the Defipronto community and take part in a Bright, Unique, and Engaging IDO platform on
					Cardano to empower the most innovative projects.
				</span>
			</div>
			<Card
				id={1}
				isActive={isActive}
				onClicked={() => setIsActive(1)}
				icon='ri-rocket-line'
				header='Cardano IDO Launchpad'
				content='Apply to launch on DefiPronto IDO launchpad.'
			/>
			<Card
				id={2}
				isActive={isActive}
				onClicked={() => setIsActive(2)}
				icon='ri-heart-line'
				header='Project Endorsement'
				content='Our community will decide on the validity of your project by endorsing in favor or against the project.'
			/>
			<Card
				id={3}
				isActive={isActive}
				onClicked={() => setIsActive(3)}
				icon='ri-bit-coin-line'
				header='Private/Public Sale Options'
				content='$DFP Token holders will be given priority access to the token sale before the public.'
			/>
		</div>
	);
}

export default Section1;
