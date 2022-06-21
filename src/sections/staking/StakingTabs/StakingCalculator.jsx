import { useState } from 'react';

const { default: InputField } = require('components/general/InputField');

export default function StakingCalculator() {
	const [value, setValue] = useState(0);
	return (
		<div>
			<h5 className='font-orbitron text-[20px] leading-[30px] text-white'>Stake Calculator</h5>
			<p className='font-DmSams text-[12px] leading-[17px] text-theme-100 mt-1'>
				Calculate the amount of DFP you will earn
			</p>

			<div className='my-8'>
				<InputField
					name={'amount'}
					placeholder={'Enter amount'}
					balance='10,000 DFP'
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			<hr className='w-full broder-2 border-[#606060]  mt-10 mx-auto' />

			<div className='w-full mt-6 flex-col flex md:flex-row items-center gap-6'>
				<div className='w-full md:w-2/5'>
					<div className='first-letter:w-full border-2 mb-3  border-[#515050] rounded-[5px] py-2 px-3 flex justify-between items-center'>
						<span className='text-[#515050] capitalize text-[10.24px] md:text-base leading-[13px] mc:leading-[20.83px] font-DMSans font-bold'>
							APY Rate
						</span>
						<div className='items-center justify-center space-x-4'>
							<span className='text-white text-sm md:text-base font-DMSans leading-[18px] md:leading-[20.83px] text-right font-bold'>
								5%
							</span>
						</div>
					</div>
				</div>
				<div className='w-full md:w-3/5'>
					<div className='first-letter:w-full border-2 mb-3  border-[#515050] rounded-[5px] py-2 px-3 flex justify-between items-center'>
						<span className='text-[#515050] capitalize text-[10.24px] md:text-base leading-[13px] mc:leading-[20.83px] font-DMSans font-bold'>
							Earnings
						</span>
						<div className='items-center justify-center space-x-4'>
							<span className='text-white text-sm md:text-base font-DMSans leading-[18px] md:leading-[20.83px] text-right font-bold'>
								{value * 2} DFP
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
