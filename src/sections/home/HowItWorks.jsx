/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

const Step = ({ step, stepTitle, subText }) => (
	<div className='text-center relative mb-16 md:mb-0'>
		{step !== 4 && (
			<div className=' hidden lg:block before:absolute before:w-40 before:h-[2px] before:mt-4 before:left-[80%] before:top-[8%] before:bg-theme-main' />
		)}
		<div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-theme-main sm:w-20 sm:h-20'>
			<span className='font-orbitron font-normal text-[25px] text-theme-light leading-[32px]'>{step}</span>
		</div>

		<div className='mx-auto mt-4 md:mt-8'>
			<h6 className='mb-2 text-white text-[20px] font-orbitron font-medium leading-[24px] text-center'>
				{stepTitle}
			</h6>
			<p className='mb-2 text-theme-100 text-base font-DMSans leading-[32px]'>{subText}</p>
		</div>
	</div>
);

export default function HowItWorks() {
	return (
		<section id='howitworks'>
			<div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl '>
				<div className='lg:w-[620px] mx-auto mt-20'>
					<h2 className='mb-6 font-orbitron font-medium text-[32px] md:text-[42px] md:leading-[52px] text-center text-white'>
						How It Works
					</h2>
				</div>
			</div>
			<div className='px-4 mx-auto max-w-full md:max-w-screen-2xl lg:px-4'>
				<div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12'>
					<div className='grid md:gap-x-12   lg:grid-cols-4'>
						<Step
							step={1}
							stepTitle='Apply for incubation'
							subText='Fill our application form and upload your project'
						/>
						<Step
							step={2}
							stepTitle='Project Vetting'
							subText='The project is thoroughly vetted by the team'
						/>

						<Step
							step={3}
							stepTitle='Support System'
							subText='We provide the necessary support to ensure the project is launch ready'
						/>
						<Step step={4} stepTitle='IDO Launched' subText='Your project is launched on our platform' />
					</div>
				</div>
			</div>
		</section>
	);
}
