import React from 'react';
import Progress from 'components/subcomponents/Progress';
import Icon from 'components/general/Icons';

const Timing = ({ days, hours, minutes, seconds }) => {
	return (
		<div className='flex mb-6 w-full items-center justify-between'>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				{days}
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				:
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				{hours}
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				:
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				{minutes}
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				:
			</span>
			<span className='font-monument md:text-[31px]  text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				{seconds}
			</span>
		</div>
	);
};

const Info = ({ keys, value, type }) => (
	<div className='w-full border-[1px] mb-3 border-[#515050]  rounded-[3px] bg-transparent py-3 px-3 flex justify-between items-center '>
		<span className='text-[#515050] capitalize text-[16px] leading-[20.83px] font-DMSans font-[700]'>{keys}</span>
		<span className='text-white text-[16px] font-DMSans leading-[20.83px] text-right font-[700]'>{value}</span>
	</div>
);

function Duration({ total_raised, allocated, type }) {
	return (
		<div className={`bg-transparent justify-center px-6 md:px-10 flex border-2 ${type === "completed" ? "h-[395px]" : "h-[613px]"} border-[#E74141] bg-[#241B23] rounded-[10px]  flex-col items-center  box-border`}>
			{type === "completed" ? <div className='font-monument md:text-[28px] mb-4 w-full flex items-start justify-start text-[20px] md:leading-[37.5px]  leading-[24px] text-white font-[400]'>
				ICO CLOSED
			</div> : <Timing days='24D' hours='12H' minutes='20M' seconds='60S' />}
			<Progress base_color='#2F282E' maxCompleted={allocated} completed={total_raised} />
			<div className='flex w-full self-start items-start mb-6 justify-between'>
				<div className='flex items-start flex-col justify-start'>
					<span className=' tracking-wide text-[#E74141] font-monument font-[400] text-[10px] md:text-[13px] leading-[12px] md:leading-[15.6px] mb-1'>
						Total Raised
					</span>
					<span className='font-monument font-[400] text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white'>
						{total_raised}
					</span>
				</div>
				<div className='flex items-start flex-col justify-start'>
					<span className='text-[#E74141]  mb-1 tracking-wide font-monument font-[400] text-[10px] md:text-[13px] leading-[12px] md:leading-[15.6px]'>
						Total Allocated
					</span>
					<span className='font-monument font-[400] text-[14px] md:text-[19px] leading-[17px] md:leading-[22px] text-white'>
						{allocated}
					</span>
				</div>
			</div>
			<Info keys='Max. Allocation' value='2,000 ADA' />
			<Info keys='Price Per Token' value='0.00005 ADA' />
			{
				type !== "completed" && <div className='mt-6 w-full flex-col '>
					<button className='flex bg-[#E74141] border-0 items-center mb-4 rounded-[5px] justify-center text-center w-full py-[10px] text-white font-DmSans text-[16px] font-bold  '>
						{' '}
						<span className='mr-3 flex items-center'>
							{' '}
							Participate <Icon icon='ri-arrow-right-up-line' className='text-white ml-3 text-[16px]' />{' '}
						</span>{' '}
					</button>
					<button className='flex items-center bg-transparent border-[2px] border-[#E74141] mb-2 rounded-[5px] font-DMSans justify-center w-full py-[10px] text-white font-DmSans text-[16px] font-bold '>
						{' '}
						<span className='flex items-center'>
							{' '}
							Join Whitelist <Icon
								icon='ri-arrow-right-up-line ml-3'
								className='text-white text-[16px]'
							/>{' '}
						</span>{' '}
					</button>
					<span className='text-[16px] flex w-full items-center justify-center mt-8 leading-[20.83px] text-white font-DMSans'>
						{' '}
						<Icon icon='ri-question-line' className='tezt-white text-[16px] mr-3' /> How to join whitelist{' '}
					</span>
				</div>
			}
		</div>
	);
}

export default Duration;
