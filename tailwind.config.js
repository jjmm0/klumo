/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		extend: {
			
		},
		screens: {
      'xs': {'min': '0px', 'max': '450px'},

      'sm': {'min': '451px', 'max': '880px'},
      // => @media (min-width: 0px and max-width: 880px) { ... }

      'md': {'min': '881px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px'},
      // => @media (min-width: 1280px and max-width: 1632px) { ... }
    },
	},
	plugins: [],
};
