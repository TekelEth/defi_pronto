import Home from 'pages';

export const projects = [
	{
		id: 1,
		image: '/assets/projects/project-1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 2,
		image: '/assets/projects/project-2.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 3,
		image: '/assets/projects/project-6.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 4,
		image: '/assets/projects/project-7.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 500,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 5,
		image: '/assets/projects/project-8.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 700,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 6,
		image: '/assets/projects/project-6.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 800,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 7,
		image: '/assets/projects/project-3.png',
		heading: 'DefiPronto',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Launchpad & Accelerator to launch the most promising projects on the Cardano blockchain.',
		type: 'upcoming',
	},
	{
		id: 8,
		image: '/assets/projects/project-4.png',
		heading: 'Solar Nodes',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Decentralizing Electricity through solar meshes that will also act as nodes that can generate and validate blocks on an 3rd generation POS blockchain.		',
		type: 'upcoming',
	},
	{
		id: 9,
		image: '/assets/projects/project-5.png',
		heading: 'Cryptogenie',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Programatically Smart NFTs that you can breed and mutate into new and smart genie NFTs',
		type: 'upcoming',
	},
	// {
	// 	id: 10,
	// 	image: '//assets/projects/project1.png',
	// 	heading: 'Hyper Drive Metaverse',
	// 	totalRaised: 0,
	// 	targetAmount: 1000,
	// 	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
	// 	type: 'upcoming',
	// },
	// {
	// 	id: 11,
	// 	image: '//assets/projects/project1.png',
	// 	heading: 'Hyper Drive Metaverse',
	// 	totalRaised: 0,
	// 	targetAmount: 1000,
	// 	desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
	// 	type: 'upcoming',
	// },
];

export const getFunctionByType = (type) => {
	const project = projects.filter((x) => x.type === type);
	return project;
};

export const getAll = () => {
	return projects;
};

export const getFunctionById = async (id) => {
	const project = await projects.find((x) => x.id === parseInt(id));
	return project;
};
