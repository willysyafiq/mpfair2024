/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				cabin: ['Cabin', 'sans-serif'],
			},
			colors: {
				'pertamina-red': {
					500: '#EB1B31',
					600: '#D31327',
					700: '#C01123',
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
