/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				lora: ['Lora', 'serif'],
			},
			padding: {
				header: '4rem',
			},
		},
		screens: {
			'xs': {'max': '699px'},
		},
	},
	plugins: [],
};
