import React from 'react';
import Icon from '../general/Icons';
import Progress from './Progress';
import { useRouter } from 'next/router';
import CustomLink from 'components/general/CustomLink';

const SocialLink = ({ linkRef, socialIcon }) => (
	<CustomLink
		href={linkRef}
		rel='noreferrer'
		target='_blank'
		className='text-white hover:text-theme-main text-[25px] lg:text-[32px] duration-300'
	>
		<Icon icon={socialIcon} />
	</CustomLink>
);

function Card({ id, image, heading, totalRaised, targetAmount, desc }) {
	const router = useRouter();
	const setProject = () => {
		router.push(`/projects/${id}`);
	};
	return (
		<div className='rounded-xl w-full shadow-lg hover:shadow-shadow-card duration-[300ms]'>
			{/* <div className='w-full md:h-[223px] h-[37.7%] object-fit flex flex-col items-center' onClick={setProject}> */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img src={image} alt={heading} className='w-full h-[37.7%] object-cover rounded-t-[10px] bg-cover' />
			{/* </div> */}
			<div className='bg-[#2F282E] w-full max-h-[385px] rounded-b-lg overflow-hidden flex p-8 flex-col items-center  text-left'>
				<div className='mb-12'>
					<h1 className=' font-semibold text-white text-[20px] md:text-[25px] leading-[24px] md:leading-[30px] font-orbitron  mb-2'>
						{heading}
					</h1>
					<span className='font-[400] text-base text-theme-100 font-DMSans leading-[24px]'>{desc}</span>
				</div>
				{(totalRaised > 0 ) && (
					<Progress base_color='#000000' completed={totalRaised} maxCompleted={targetAmount} />
				)}
				<div className='flex w-full self-start items-start mb-8 justify-between'>
					<div className='flex items-start flex-col justify-start'>
						<span className='tracking-wide text-[#E74141] font-orbitron font-medium text-[10px] md:text-base leading-[24px] mb-1'>
							Target Amount
						</span>
						<span className='font-orbitron font-medium text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white'>
							{targetAmount ? targetAmount : 'TBA'}
						</span>
					</div>
					<div className='flex items-start flex-col justify-start'>
						<span className='text-[#E74141]  mb-1 tracking-wide font-orbitron font-[400] text-[10px] md:text-base leading-[24px]'>
							Total Raised
						</span>
						<span className='font-orbitron font-[400] text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white'>
							{totalRaised}
						</span>
					</div>
				</div>
				<div className='border-t-[2px] w-full pt-4 border-[#525252]'>
					<div className='flex items-center space-x-4'>
						<SocialLink linkRef='https://t.me/defipronto' socialIcon='ri-telegram-fill' />
						<SocialLink linkRef='https://medium.com/@defipronto' socialIcon='ri-medium-fill' />
						<SocialLink linkRef='https://twitter.com/defipronto' socialIcon='ri-twitter-fill' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
