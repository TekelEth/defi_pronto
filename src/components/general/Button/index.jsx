import Icon from 'components/Icons';

export default function Button({ title, icon, variant, color, className, order, ...rest }) {
	const contained =
		color === 'primary'
			? 'bg-theme-main text-white hover:shadow-shadow-main'
			: color === 'secondary'
			? 'bg-theme-dark text-white hover:shadow-shadow-dark'
			: color === 'success'
			? 'bg-theme-success hover:shadow-shadow-success'
			: color === 'error'
			? 'bg-theme-error hover:shadow-shadow-error'
			: color === 'plain' && 'bg-theme-light text-theme-main hover:shadow-shadow-main';

	const outlined =
		color === 'primary'
			? 'border lg:border-2 border-theme-main text-white hover:shadow-shadow-main'
			: color === 'secondary'
			? 'border lg:border-2 border-theme-dark text-white hover:shadow-shadow-dark'
			: color === 'success'
			? 'border lg:border-2 border-theme-success text-white hover:shadow-shadow-success'
			: color === 'error'
			? 'border lg:border-2 border-theme-error text-white hover:shadow-shadow-error'
			: color === 'plain' && 'border-2 border-theme-light text-white hover:shadow-shadow-main';

	return (
		<>
			{variant === 'contained' && (
				<button
					{...rest}
					className={`${
						contained || className
					} flex flex-row justify-center items-center py-[10px] px-[24px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className='text-[11px] md:text-base font-DMSans font-bold leading-[21px]'>{title}</span>
					{icon && <Icon icon={icon} className='w-[12px] md:w-[24px] w-[12px] md:h-[24px] text-white' />}
				</button>
			)}
			{variant === 'outlined' && (
				<button
					{...rest}
					className={`${
						outlined || className
					} flex flex-row justify-center items-center py-[10px] px-[30px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className={`text-[11px] md:text-base font-DMSans font-bold leading-[21px] ${order && 'order-1'}`}>
						{title}
					</span>
					{icon && <Icon icon={icon} className={`w-[12px] md:w-[24px] w-[12px] mr-1 md:h-[24px] ${order && '-ml-2'}`} />}
				</button>
			)}
		</>
	);
}
