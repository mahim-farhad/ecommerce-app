import { fontFamily } from "tailwindcss/defaultTheme";

import { white, gray, black } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./app/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./styles/**/*.{js,jsx}",
	],
	theme: {
		screens: {
			sm: "40rem",
			md: "48rem",
			lg: "64rem",
			xl: "80rem"
		},
		fontFamily: {
			sans: ["var(--font-poppins)", ...fontFamily.sans],
			serif: ["var(--font-roboto-condensed)", ...fontFamily.serif],
			mono: ["var(--font-firaCode)", ...fontFamily.mono]
		},
		colors: {
			inherit: "inherit",
			current: "currentColor",
			transparent: "transparent",
			white: white,
			gray: gray,
			black: black,
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},
			google: "#3c7ff1",
			github: "#2B3137",
			facebook: "#0165e1",
			whatsapp: "#25D366",
			twitter: "#000000",
			instagram: "#125688",
			pinterest: "#cc2127",
			dribbble: "#ea4c89",
			behance: "#1769ff",
			fiverr: "#1dbf73",
		},
		extend: {
			minWidth: {
				screen: ["100dvw"],
			},
			minHeight: {
				screen: ["100dvh"],
			},
			keyframes: {
				"gradient": {
					to: {
						backgroundPosition: "200% center"
					}
				},
				"bouncy": {
					"10%": {
						transform: "translate3d(-1px, 0, 0)",
					},
					"20%": {
						transform: "translate3d(2px, 0, 0)",
					},
					"30%": {
						transform: "translate3d(-4px, 0, 0)",
					},
					"40%": {
						transform: "translate3d(4px, 0, 0)",
					},
					"50%": {
						transform: "translate3d(-4px, 0, 0)",
					},
					"60%": {
						transform: "translate3d(4px, 0, 0)",
					},
					"70%": {
						transform: "translate3d(-4px, 0, 0)",
					},
					"80%": {
						transform: "translate3d(2px, 0, 0)",
					},
					"90%": {
						transform: "translate3d(-1px, 0, 0)",
					}
				},
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" }
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
			},
			animation: {
				"gradient": "gradient 2s linear infinite",
				"bouncy": "bouncy 0.3s cubic-bezier(.36,.07,.19,.97) both",
				"infinite-scroll": "infinite-scroll 25s linear infinite",
				"accordion-up": "accordion-up 0.2s ease-out",
				"accordion-down": "accordion-down 0.2s ease-out",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
