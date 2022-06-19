import DefiPronto from 'components/subcomponents/DefiPronto';
import Hero from 'sections/about/Hero';
import SectionOne from 'sections/about/SectionOne';
import SectionTwo from 'sections/about/SectionTwo';
import SectionThree from 'sections/about/SectionThree';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>DefiPronto | About</title>
			</Head>
			<div className='container px-4 h-full py-8 w-full mx-auto'>
				<Hero />
				<DefiPronto />
				<SectionOne />
				<SectionTwo />
				<SectionThree />
			</div>
		</>
	);
}
