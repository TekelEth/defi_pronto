/* eslint-disable @next/next/no-img-element */

import Button from 'components/general/Button';
import CustomLink from 'components/general/CustomLink';

export default function MoreProjects() {
	return (
		<section id='features'>
			{/* <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'> */}
			<div className='max-w-screen-sm sm:text-center sm:mx-auto'>
				<CustomLink href='/projects' className='w-full px-4 flex'>
					<Button variant='outlined' color='primary' title='More projects' />
				</CustomLink>

				<div className='w-full lg:max-w-[630px] mx-auto my-20 text-center'>
					<h2 className='mb-6 font-orbitron text-[25px] lg:text-[48.83px] leading-[30px] lg:leading-[59px] tracking-wide text-center text-white'>
						The Future of Cardano Projects
					</h2>
					<p className='text-base text-theme-100 w-full font-DMSans leading-[21px] tracking-wide text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed
						adipiscing risus aenean neque imperdiet amet fermentum.
					</p>
				</div>
				{/* <div className='w-full lg:w-[620px] mx-auto my-20'>
					<h2 className='mb-6 font-orbitron text-[25px] lg:text-[48.83px] leading-[30px] lg:leading-[59px] text-center text-white'>
						The Future of Cardano Projects
					</h2>
					<p className='text-base text-theme-100 w-full font-DMSans leading-[21px] tracking-wide text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed
						adipiscing risus aenean neque imperdiet amet fermentum.
					</p>
				</div> */}
			</div>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
				<div className='text-center'>
					<img
						src='/assets/future/Projects.svg'
						alt='projects'
						className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
					/>

					<div className='w-[278px] h-[88px] mx-auto'>
						<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
							Vetted Projects
						</h6>
						<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className='text-center'>
					<img
						src='/assets/future/Community.svg'
						alt='projects'
						className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
					/>

					<div className='w-[278px] h-[88px] mx-auto'>
						<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
							Community
						</h6>
						<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className='text-center'>
					<img
						src='/assets/future/Launch Pad.svg'
						alt='projects'
						className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
					/>

					<div className='w-[278px] h-[88px] mx-auto'>
						<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
							Launch Pad
						</h6>
						<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className='text-center'>
					<img
						src='/assets/future/Vector.svg'
						alt='projects'
						className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
					/>

					<div className='w-[278px] h-[88px] mx-auto'>
						<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
							Marketing
						</h6>
						<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
			</div>
			<div className='w-full px-8 lg:max-w-screen-sm text-center mt-24 mx-auto'>
				<hr className='w-full broder-2 border-[#606060]' />
			</div>
			{/* </div> */}
			{/* <div className='max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
				<p className='flex flex-row items-center justify-center box-border py-[15px] px-[32px] gap-[10px] w-[313px] lg:w-[696px] h-[33px] lg:h-[51px] border-2 border-theme-main rounded-[5px] font-DmSans font-bold text-base leading-[21px] text-white'>
					More Projects
				</p>

				<div className='lg:w-[620px] mx-auto my-20'>
					<h2 className='mb-6 font-orbitron text-[48.83px] leading-[59px] text-center text-white'>
						The Future of Cardano Projects
					</h2>
					<p className='text-base text-theme-100 w-full font-DMSans leading-[21px] tracking-wide text-center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed
						adipiscing risus aenean neque imperdiet amet fermentum.
					</p>
				</div>
			</div> */}
			{/* <div className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-4'>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='px-12 text-center sm:px-0'>
						<img
							src='/assets/future/Projects.svg'
							alt='projects'
							className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
						/>

						<div className='w-[278px] h-[88px] mx-auto'>
							<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
								Vetted Projects
							</h6>
							<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className='px-12 text-center sm:px-0'>
						<img
							src='/assets/future/Community.svg'
							alt='projects'
							className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
						/>

						<div className='w-[278px] h-[88px] mx-auto'>
							<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
								Community
							</h6>
							<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className='px-12 text-center sm:px-0'>
						<img
							src='/assets/future/Launch Pad.svg'
							alt='projects'
							className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
						/>

						<div className='w-[278px] h-[88px] mx-auto'>
							<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
								Launch Pad
							</h6>
							<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className='px-12 text-center sm:px-0'>
						<img
							src='/assets/future/Vector.svg'
							alt='projects'
							className='w-[100px] h-[100px] flex items-center justify-center mx-auto mb-4'
						/>

						<div className='w-[278px] h-[88px] mx-auto'>
							<h6 className='mb-2 text-white text-[25px] font-orbitron leading-[30px] text-center'>
								Marketing
							</h6>
							<p className='mb-2 text-theme-100 text-base font-DMSans leading-[21px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
				<hr className='broder border-[#606060] flex items-start w-[578px] mx-auto mt-20' />
			</div> */}
		</section>
	);
}
