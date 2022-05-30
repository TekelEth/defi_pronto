import Icon from 'components/general/Icons';
import React from 'react';

const WalletCard = ({ title, amount }) => (
	<div className='flex flex-col h-[155px] border-[#E74141] border-2 py-4 py-2 items-center text-center justify-center rounded-[20px] bg-transparent hover:shadow-shadow-card'>
		<span className='text-[#E74141] font-[400] text-[12px] leading-[14.4px] text-center'>{title} </span>
		<span className='text-white text-center font-[400] text-[31.25px] md:text-[39px] leading-[37.5px] md:leading-[47px] font-monument '>
			{amount}
		</span>
	</div>
);

function WalletDetails() {
	return (
		<div className='flex my-16 space-x-4 md:flex-row'>
			<div className='w-[45%]'>
				<div className='w-full flex flex-col'>
					<div className=' mb-4   p-8  bg-[#E74141]  rounded-[10px]'>
						<span className='font-[400]  font-monument  text-[20px] leading-[24px] text-white'>
							Wallet Address
						</span>
						<div className='flex  inline-block mt-4 max-w-[400px]'>
							<p className='font-[400] inline-block overflow-ellipsis whitespace-normal  font-DMSans text-[#DFDFDF]'>
								addr1q8v0dn97r26tsx4jp5z7nha8avag5px 6xn76t4q22akx8fs3v6eec3upcskrhmup6vpk
								hzvxz99we07x42t9mnprkrpqmlp5tk
							</p>
							<Icon
								icon='ri-file-copy-line'
								className='text-lg self-center h-full text-white justify-self-center'
							/>
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

			<div className='w-[55%] '>
				<div className='grid pl-12  grid-cols-2 gap-4'>
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
