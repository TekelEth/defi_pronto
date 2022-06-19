/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

const Workings = () => (
	<div className='text-center relative mb-16 md:mb-0'>
		<div className='timeline absolute'></div>
		<div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-theme-main sm:w-20 sm:h-20'>
			<span className='font-orbitron text-xl text-theme-main leading-[24px]'>1</span>
		</div>

		<div className='mx-auto mt-4 md:mt-8'>
			<h6 className='mb-2 text-white text-[17px] font-orbitron leading-[24px] text-center'>
				Apply for incubation
			</h6>
			<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
		</div>
	</div>
);

export default function HowItWorks() {
	return (
		<section id='howitworks'>
			<div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl '>
				<div className='lg:w-[620px] mx-auto mt-20'>
					<h2 className='mb-6 font-orbitron text-[25px] leading-[30px] md:text-[48.83px] md:leading-[59px] text-center text-white'>
						How It Works
					</h2>
				</div>
			</div>
			<div className='px-4 mx-auto max-w-full md:max-w-screen-2xl lg:px-4'>
				<div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
					<div className='grid md:gap-x-12   lg:grid-cols-4'>
						<Workings />
						<Workings />
						<Workings />
						<Workings />
					</div>
				</div>
			</div>
		</section>
	);
}
