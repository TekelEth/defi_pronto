module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ['DM Sans', 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif'],
			},
			backgroundImage: {
				'presale': "url('/assets/backgrounds/presale.svg')"
			},
			colors: {
				theme: {
					100: '#A4A4A4',
					main: '#E74141',
					dark: '#1A1A1A',
					light: '#FFFFFF',
					success: '#5BA422',
					error: '#A42222',
					card: '#241B23',
					border: 'rgba(231, 65, 65, 0.2)',
				},
			},
			boxShadow: {
				'shadow-main': '0px 4px 40px rgba(231, 65, 65, 0.4)',
				'shadow-dark': '0px 4px 40px rgba(26, 26, 26, 0.4)',
				'shadow-error': '0px 4px 40px rgba(32, 21, 54, 0.4)',
				'shadow-success': '0px 4px 40px rgba(32, 21, 54, 0.4)',
				'shadow-card': '-8px 6px 20px rgba(231, 65, 65, 0.4)',
				'shadow-icon': '0px 4px 24px rgba(231, 65, 65, 1)',
			},
		},
	},
	plugins: [],
};
