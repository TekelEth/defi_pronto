import Nav from './Nav';

export default function PageLaout({ children }) {
	return (
		<>
			<Nav />
			<main>{children}</main>
		</>
	);
}
