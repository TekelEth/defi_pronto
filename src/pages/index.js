import Head from 'next/head';
import Image from 'next/image';
import PageLaout from '../components/layout';
export default function Home() {
	return (
		<>
			<PageLaout />
			<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 home-bg'>
				<div className='grid gap-10 lg:grid-cols-2'>
					<div className='lg:pr-10'>
						<hr className='mb-5 border-gray-300' />
						<div className='flex items-center space-x-4'></div>
					</div>
					<div>{/* eslint-disable-next-line @next/next/no-img-element */}</div>
				</div>
			</div>
			<h1 className='font-monument'>Hello World</h1>
		</>
	);
}
