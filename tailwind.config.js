/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],  theme: {
    	extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
				sniglet: ['Sniglet', 'cursive'],
			  }
			,
			boxShadow: {
				'small-custom': '2px 2px 0px black',
				'custom': '4px 4px 0px black',
				'custom-hover': '8px 8px 0px black',
				'custom-pink': '4px 4px 0px #d1548e',
				'custom-pink-hover': '8px 8px 0px #d1548e',
				'custom-blue': '4px 4px 0px #4ecdc4',
				'custom-blue-hover': '8px 8px 0px #4ecdc4',
				'custom-beige': '4px 4px 0px #f0ead6',
				'custom-beige-hover': '8px 8px 0px #f0ead6',
			  }
			,
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
          'beige-custom': '#f0ead6',
          'blue-custom': '#4ecdc4',
		  'black-custom': "#1a1a1a",
		  'pink-custom': '#d1548e',
		  

    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
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
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
  plugins: [require("tailwindcss-animate")],
}

