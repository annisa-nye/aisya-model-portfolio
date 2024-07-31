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

			fontSize: {
				'xxs': '0.625rem',
				'xxl': '10rem',
			},
		},
		screens: {
			xs: { max: '480px' },
			sm: { max: '830px' },
		},
	},
	plugins: [],
};
