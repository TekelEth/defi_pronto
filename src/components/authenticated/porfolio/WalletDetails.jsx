import Icon from 'components/general/Icons';
import React from 'react';

const WalletCard = ({ title, amount }) => (
	<div className='flex flex-col h-[155px] border-[#E74141] border-2 py-4 py-2 items-center text-center justify-center rounded-[20px] bg-transparent hover:shadow-shadow-card'>
		<span className='text-[#E74141] mb-2 font-[400] text-[12px] leading-[14.4px] text-center'>{title} </span>
		<span className='text-white text-center font-[400] text-[31.25px] md:text-[39px] leading-[37.5px] md:leading-[47px] font-monument '>
			{amount}
		</span>
	</div>
);

function WalletDetails() {
	return (
		<div className='flex flex-col md:flex-row my-16 md:space-x-4 md:flex-row'>
			<div className='w-full md:w-[45%]'>
				<div className='w-full flex flex-col'>
					<div className=' mb-4 px-6 md:px-8 py-6 md:px-8  bg-[#E74141] w-full rounded-[10px]'>
						<span className='font-[400] block  font-monument  text-[20px] leading-[24px] text-white'>
							Wallet Address
						</span>

						<div className='flex flex-row items-center inline-block mt-4 max-w-[400px]'>
							<span className='font-[400]  md:mt-0 text-[12.8px] font-DMSans text-[#DFDFDF]'>
								addr1q8v0dn97r26tsx4jp5z7nha8avag5px 6xn76t4q22akx8fs3v6eec3upcskrhmup6vpk
								hzvxz99we07x42t9mnprkrpqmlp5tk
							</span>
							<Icon icon='ri-file-copy-line' className='text-lg h-full text-white ' />
						</div>
					</div>
					<div className='bg-[#2F282E] px-8 h-[120px] flex items-center justify-between rounded-[10px]'>
						<span className='capitalize text-white font-[400] text-[20px] leading-[24px] font-monument'>
							current tier
						</span>
						<span className='capitalize text-white font-[400] text-[20px] leading-[24px] font-monument'>
							-
						</span>
					</div>
				</div>
			</div>

			<div className='md:w-[55%] mt-4 md:mt-0 w-full '>
				<div className='grid md:pl-12 grid-cols-1 md:grid-cols-2  gap-4'>
					<WalletCard title='Available Balance ($DFP)' amount='0' />
					<WalletCard title='Total Staked ($DFP)' amount='0' />
					<WalletCard title='DFP Price' amount='$0.00107' />
					<WalletCard title='Available For WIthdrawal ($DFP)' amount='0' />
				</div>
			</div>
		</div>
	);
}

export default WalletDetails;
