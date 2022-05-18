import Link from 'next/link';

export default function CustomLink({ href, children, ...rest }) {
	return (
		<Link href={href} passHref>
			<a {...rest}>{children}</a>
		</Link>
	);
}
