import Icon from 'components/general/Icons';
import Duration from 'sections/projects/Duration';
import Pool_Info from 'sections/projects/Pool_Info';
import Projectcard from 'sections/projects/Projectcard';
import ProjectInfo from 'sections/projects/ProjectInfo';
import Token_Info from 'sections/projects/Token_Info';
import React from 'react';
import { useRouter } from 'next/router';
import { getAll, getFunctionById } from '../../../utils/projects';

function Oneproject(props) {
	const router = useRouter();
	return (
		<div className='md:max-w-[90%] px-4 md:px-5 h-full mb-8 w-full mx-auto'>
			<div className='flex items-center my-8'>
				<button onClick={() => router.back()}>
					<Icon icon='ri-arrow-left-line' className='text-xl text-[#E74141] mr-3' />{' '}
					<span className='text-white font-orbitron font-[400] text-[20px] leading-[24px]'>Back</span>
				</button>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-6 my-12 items-start justify-between'>
				<Projectcard
					sub_text='$HDM'
					heading={props.heading}
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis dignissim quisque scelerisque vitae tempor ante. Elementum, augue iaculis condimentum quis. Quis tortor ultricies placerat nam urna.'
					img={props.image}
					img_2='/assets/projects/Ellipse.png'
				/>
				<Duration total_raised={props.totalRaised} allocated={props.targetAmount} type = {props.type} />
			</div>
			<ProjectInfo />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 items-start my-12 justify-between'>
				<Pool_Info />
				<Token_Info />
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const projects = await getAll();
	const paths = projects.map((x) => ({
		params: { id: x.id.toString() },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const project = await getFunctionById(params.id);
	return { props: project };
}

export default Oneproject;
