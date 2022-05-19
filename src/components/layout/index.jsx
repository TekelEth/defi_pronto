import Footer from './Footer';
import Nav from './Nav';

export default function PageLaout({ children }) {
	return (
		<div className='bg-[#241B23] w-full'>
			<Nav />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
