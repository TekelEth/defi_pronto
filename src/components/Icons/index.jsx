export const ArrowRightUpIcon = (props) => (
	<svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'>
		<path fill='none' d='M0 0h24v24H0z' />
		<path d='M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z' />
	</svg>
);

export default function Icon({ icon, className }) {
	return <i className={`${icon} ${className}`}></i>;
}