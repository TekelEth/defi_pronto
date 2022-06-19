export const projects = [
	{
		id: 1,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 2,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 3,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 1000,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'completed',
	},
	{
		id: 4,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 500,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 5,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 700,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 6,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 800,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'ongoing',
	},
	{
		id: 7,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'upcoming',
	},
	{
		id: 8,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'upcoming',
	},
	{
		id: 9,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'upcoming',
	},
	{
		id: 10,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'upcoming',
	},
	{
		id: 11,
		image: '/assets/projects/project1.png',
		heading: 'Hyper Drive Metaverse',
		totalRaised: 0,
		targetAmount: 1000,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque.',
		type: 'upcoming',
	},
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
