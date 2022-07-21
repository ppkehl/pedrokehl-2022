/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
    extend: {
			fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
      }
    },
  },
	plugins: [],
}

