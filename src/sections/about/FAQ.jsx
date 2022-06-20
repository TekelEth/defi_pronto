import Icon from 'components/general/Icons';
import React, { useState } from 'react';

const faqs = [
	{
		question: 'Governance',
		desc: '$DFP token holders can create and vote on proposals',
	},
	{
		question: 'Staking',
		desc: 'Token holders can stake their tokens to get priority access to IDOs on Defipronto launchpad and also earn rewards in more $DFP tokens',
	},
	// {
	// 	question: 'Deflationary Mechanics',
	// 	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium diam dui ut tellus tortor tristique tellus egestas. Nullam nullam ullamcorper tortor mus. Donec quis vulputate congue malesuada urna arcu quis. Mauris elit leo quis rhoncus in vestibulum maecenas.',
	// },
	// {
	// 	question: 'Liquidity Farming',
	// 	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium diam dui ut tellus tortor tristique tellus egestas. Nullam nullam ullamcorper tortor mus. Donec quis vulputate congue malesuada urna arcu quis. Mauris elit leo quis rhoncus in vestibulum maecenas.',
	// },
];

const Question = ({ question, description }) => {
	const [show, setShow] = useState(false);
	return (
		<div
			className={`py-3 border-t-[1px]  leading-3 hover:cursor-pointer border-[##606060] px-2 mb-3`}
			onClick={() => setShow(!show)}
		>
			<div className={`flex justify-between ${show && 'mt-8'} duration-300 items-center`}>
				<h1
					className={`font-[400] font-orbitron leading-[22px] text-[15.5px] md:text-[19.3px] ${
						show && 'mb-3'
					} capitalize ${'text-white'}`}
				>
					{question}
				</h1>
				<Icon
					Clicked={() => setShow(!show)}
					icon='ri-arrow-down-s-line'
					className={`text-lg text-theme-100 ${show && 'rotate-180 text-theme-main duration-300'}`}
				/>
			</div>
			{show && <div className={`text-[16px] text-[#A4A4A4] font-DMSans leading-[21px]`}>{description}</div>}
		</div>
	);
};

function FAQ() {
	return (
		<div className='md:max-w-[65%] max-w-[100%] mx-auto py-10'>
			<div className='max-w-[100%] relative md:mt-16 mx-auto'>
				{faqs && faqs.map((x, i) => <Question key={i} question={x.question} description={x.desc} />)}
			</div>
		</div>
	);
}

export default FAQ;
