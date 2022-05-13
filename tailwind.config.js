module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				monument: ['Monument Extended', 'sans-serif'],
			},
			colors: {
				theme: {
					100: 'matrix(-1, 0, 0, 1, 0, 0)',
					200: 'matrix(-1, 0, 0, 1, 0, 0)',
					300: 'matrix(-1, 0, 0, 1, 0, 0)',
					main: '#E74141',
					dark: '#1A1A1A',
					light: '#FFFFFF',
				},
			},
		},
	},
	plugins: [],
};
