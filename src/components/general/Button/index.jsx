export default function Button({ variant, color, text, ...rest }) {
	// const colors = {
	// 	primary: 'theme-main',
	// 	secondary: 'theme-dark',
	// 	success: 'theme-success',
	// 	error: 'theme-error',
	// };

	const colors =
		color === 'primary'
			? 'theme-main'
			: color === 'secondary'
			? 'theme-dark'
			: color === 'success'
			? 'theme-success'
			: color === 'error' && 'theme-error';

	const variants = {
		contained: `bg-${colors}`,
		outlined: `border border-${colors}`,
	};
	return (
		<button
			{...rest}
			className={`flex flex-row justify-center items-center py-[15px] px-[32px] gap-[10px] text-base font-DMSans font-bold leading-[21px] rounded-[5px] ${variants[variant]}`}
		>
			{text}
		</button>
	);
}
