/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3B82F6',
				primaryDisabled: '#93C5FD',
				primaryText: '#1E293B'
			}
		}
	},
	plugins: []
};
