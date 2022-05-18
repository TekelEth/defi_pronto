export default function SectionHeader({ align, title, subtitle, image, button }) {
	return (
		<div className='relative'>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src='/assets/backgrounds/home-bg.png'
				className='absolute w-full h-screen bg-cover bg-no-repeat bg-center bg-fixed'
				alt='home'
			/>
			<div className='relative w-full'>
				<div className='px-8 py-32 mx-auto'>
					<div className='items-center lg:flex'>
						<div className='w-full h-full top-[258px] left-[129px] lg:w-1/2'>
							<h1 className='font-monument font-normal text-5xl text-white leading-[73px]'>
								Decentralized Incubation and launchpad for{' '}
								<span className='text-theme-main'>cardano</span>
							</h1>
							<p className='max-w-[542px] mt-2 text-theme-100 text-base font-DMSans leading-[21px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et
								neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis
								dignissim quisque scelerisque vitae tempor ante. Elementum, augue iaculis condimentum
								quis. Quis tortor{' '}
							</p>
							{/* <CustomLink href={'/'}>
                            <Button variant={'contained'} color={'error'} text='Get it Now'></Button>
                        </CustomLink> */}
						</div>
						<div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
							{/* <img
                            className='hidden md:block w-full h-full lg:max-w-2xl'
                            src='/assets/backgrounds/Looper-3.png'
                            alt='illustration'
                        /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

//  {/* <div
//         className='absolute w-full h-screen bg-no-repeat bg-cover bg-left bg-fixed'
//         style={{
//             backgroundImage: "url('/assets/backgrounds/home-bg.png')",
//         }}
//     /> */}
