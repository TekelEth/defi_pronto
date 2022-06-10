export default function Icon({ icon, className, Clicked = () => {} }) {
	return <i className={`${icon} ${className}`} onClick={Clicked}></i>;
}
