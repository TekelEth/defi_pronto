module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ['DM Sans', 'sans-serif'],
				monument: ['Monument Extended', 'cursive'],
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
