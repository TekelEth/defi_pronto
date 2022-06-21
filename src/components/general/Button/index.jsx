import Icon from 'components/general/Icons';
import CustomLink from '../CustomLink';

export const ButtonWithText = ({ text, link, linkTitle }) => {
	return (
		<span className='text-[12px] text-theme-100 font-DMSans font-medium md:text-sm leading-[18px]'>
			{text && link ? `${text}, ` : text}
			{link && (
				<CustomLink href={link} className='text-theme-main underline'>
					{linkTitle}
				</CustomLink>
			)}
		</span>
	);
};

export default function Button({ title, icon, variant, color, className, order, ...rest }) {
	const contained =
		color === 'primary'
			? 'bg-theme-main text-white duration-300 hover:shadow-shadow-main'
			: color === 'secondary'
			? 'bg-theme-dark text-white duration-300 hover:shadow-shadow-dark'
			: color === 'success'
			? 'bg-theme-success duration-300 hover:shadow-shadow-success'
			: color === 'error'
			? 'bg-theme-error duration-300 hover:shadow-shadow-error'
			: color === 'plain'
			? 'bg-theme-light text-theme-main duration-300 hover:shadow-shadow-main'
			: color === 'disable' && 'bg-theme-100 text-theme-[#CBCBCB]';

	const outlined =
		color === 'primary'
			? 'border lg:border-2 border-theme-main text-white hover:text-theme-main duration-300 hover:shadow-shadow-main'
			: color === 'secondary'
			? 'border lg:border-2 border-theme-dark text-white hover:text-theme-main duration-300 hover:shadow-shadow-dark'
			: color === 'success'
			? 'border lg:border-2 border-theme-success text-white hover:text-theme-main duration-300 hover:shadow-shadow-success'
			: color === 'error'
			? 'border lg:border-2 border-theme-error text-white hover:text-theme-main duration-300 hover:shadow-shadow-error'
			: color === 'plain'
			? 'border-2 border-theme-light text-white hover:text-theme-main duration-300 hover:shadow-shadow-main'
			: color === 'disable' && 'border-2 border-[#454545] text-[#454545]';

	return (
		<>
			{variant === 'contained' && (
				<button
					{...rest}
					className={`${
						contained || className
					} w-full text-[14px] md:text-base flex flex-row justify-center items-center py-[10px] px-[24px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className='font-orbitron font-bold leading-[21px]'>{title}</span>
					{icon && <Icon icon={icon} className='text-[25px] text-white' />}
				</button>
			)}
			{variant === 'outlined' && (
				<button
					{...rest}
					className={`${
						outlined || className
					} w-full text-[14px] md:text-base flex flex-row justify-center items-center py-[10px] px-[30px] lg:py-[15px] lg:px-[32px] gap-[8px] rounded-[5px]`}
				>
					<span className={`font-orbitron font-bold leading-[21px] ${order && 'order-1'}`}>{title}</span>
					{icon && <Icon icon={icon} className={`mr-1  ${order && '-ml-2'}`} />}
				</button>
			)}
		</>
	);
}
