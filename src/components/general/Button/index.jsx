import Icon from 'components/Icons';

export default function Button({ title, icon, variant, color, className, order, ...rest }) {
	const contained =
		color === 'primary'
			? 'bg-theme-main text-white'
			: color === 'secondary'
			? 'bg-theme-dark text-white'
			: color === 'success'
			? 'bg-theme-success'
			: color === 'error'
			? 'bg-theme-error'
			: color === 'plain' && 'bg-theme-light text-theme-main';

	const outlined =
		color === 'primary'
			? 'border lg:border-2 border-theme-main text-white'
			: color === 'secondary'
			? 'border lg:border-2 border-theme-dark text-white'
			: color === 'success'
			? 'border lg:border-2 border-theme-success text-white'
			: color === 'error'
			? 'border lg:border-2 border-theme-error text-white'
			: color === 'plain' && 'border-2 border-theme-light text-white';

	return (
		<>
			{variant === 'contained' && (
				<button
					{...rest}
					className={`${
						contained || className
					} flex flex-row justify-center items-center py-[10px] px-[24px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className='text-base font-DMSans font-bold leading-[21px]'>{title}</span>
					{icon && <Icon icon={icon} className='w-[24px] h-[24px] text-white' />}
				</button>
			)}
			{variant === 'outlined' && (
				<button
					{...rest}
					className={`${
						outlined || className
					} flex flex-row justify-center items-center py-[10px] px-[24px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className={`text-base font-DMSans font-bold leading-[21px] ${order && 'order-1'}`}>
						{title}
					</span>
					{icon && <Icon icon={icon} className={`w-[24px] h-[24px] ${order && '-ml-2'}`} />}
				</button>
			)}
		</>
	);
}

// const variants = {
//     contained: `bg-${colors}`,
//     outlined: `border border-${colors}`,
// };

// const colors = {
// 	primary: 'theme-main',
// 	secondary: 'theme-dark',
// 	success: 'theme-success',
// 	error: 'theme-error',
// };
