import Icon from '../Icons';

export default function InputField({ balance, icon, onClickIcon, actionLink, subBalance, ...rest }) {
	return (
		<div className='relative w-full font-DMSans text-base text-white leading-[21px] font-bold'>
			<input
				{...rest}
				autoComplete='off'
				className='w-full p-4 py-3 outline-none pr-32 bg-theme-card border-2 border-theme-main rounded-[5px]'
			/>
			<div className='absolute pointer-events-none top-3 right-5 h-24 tems-center justify-center space-x-4'>
				{balance && (
					<span className='font-DMSans text-base text-white leading-[21px] text-right font-bold pr-2'>
						{balance}
					</span>
				)}
				{icon && (
					<button
						className='font-DMSans text-base text-white hover:text-theme-main leading-[21px] text-right font-bold pr-2 cursor-pointer'
						onClick={onClickIcon}
					>
						<Icon icon={icon} />
					</button>
				)}
			</div>

			<p className='flex items-center justify-between pt-4'>
				{actionLink && actionLink}
				{subBalance && subBalance}
			</p>
		</div>
	);
}
