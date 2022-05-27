import Button from 'components/general/Button';
import Icon from 'components/Icons';

const Info = ({ keys, value, icon }) => (
	<div
		className={`w-full border-[1px] mb-3 ${
			icon ? 'border-theme-main' : 'border-[#515050]'
		} rounded-[3px] py-3 px-3 flex justify-between items-center`}
	>
		<span className='text-[#515050] capitalize text-[16px] leading-[20.83px] font-DMSans font-[700]'>{keys}</span>
		<div className=' items-center justify-center space-x-4'>
			<span className='text-white text-[16px] font-DMSans leading-[20.83px] text-right font-[700]'>{value}</span>
			{icon && (
				<span className='text-theme-main text-[16px] font-DMSans leading-[20.83px] text-right font-[700]'>
					<Icon icon={icon} />
				</span>
			)}
		</div>
	</div>
);

export const StakeContent = () => {
	return (
		<div className='p-5 md:p-10 flex mt-10 justify-center flex-col border-2 w-full border-theme-main rounded-[18px]'>
			<h5 className='font-monument text-left text-[25px] leading-[30px] text-white'>Lock Duration</h5>

			<div className='w-full text-center mt-10 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>

			<div className='w-full mt-6 flex-col flex md:flex-row items-center gap-6'>
				<div className='w-full md:w-2/5'>
					<Info keys='APY Rate' value='5%' />
				</div>
				<div className='w-full md:w-3/5'>
					<Info keys='Maturity Date' value='10 May, 2022' />
				</div>
			</div>
			<Info keys='APY Rate' value='5%' />
			<Info keys='Your Staked Amount' value='25,000 DFP' />
			<Info keys='Pending Withdrawal Amount' value='5,000 DFP' />
			<Info keys='Balance' value='6,000 DFP' icon='ri-calculator-line' />

			<div className='flex items-start justify-start my-6'>
				<input
					id='link-checkbox'
					type='checkbox'
					value=''
					className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
				/>
				<label htmlFor='link-checkbox' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
					I have read and accept the terms described above.
				</label>
			</div>

			<Button title={'Aprove'} variant={'contained'} color='primary' icon={'ri-arrow-right-up-line'} />
		</div>
	);
};

export default function Stake() {
	return (
		<div className='items-start mt-10'>
			<div>
				<h5 className='font-monument text-[25px] leading-[30px] text-white'>Staking Info</h5>
				<div className='lg:w-[606px] mt-4'>
					<p className='text-theme-100 font-DMSans text-base leading-[21px]'>
						Staking your tokens will generate new tokens daily based on the APY percentage above. If you
						stake in one of the tiers, it also makes you eligible for early contribution rounds to IDOs of
						projects launched on Defipronto.
					</p>
					<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
						Be aware of the unstaking fees, as outlined in the table. These fees are in place to prevent
						someone from staking right before a tier snapshot, then unstaking immediately after. Unstaking
						fees are burned and will no longer be in circulation, reducing the total supply of DFP tokens.
					</p>
					<p className='mt-8 text-white font-DMSans'>
						<span className='text-theme-main'>Note:</span> Please stake a minimum of 100 DFP tokens, fewer
						will not work.
					</p>
				</div>
				<h5 className='font-monument text-[25px] leading-[30px] text-white mt-8'>Terms & Conditions</h5>
				<p className='text-theme-100 font-DMSans text-base leading-[21px] mt-4'>
					By using this website to stake tokens on the Cardano blockchain, you accept that you are interacting
					with a smart contract that this website has no control over. The operators of this website accept no
					liability whatsoever in relation to your use of these smart contracts. By using this website to
					stake, you also have read and agree to the Terms and Conditions.
				</p>
			</div>
		</div>
	);
}
