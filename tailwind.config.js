/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blue: {
          100: '#cce4f6',
          200: '#99c9ed',
          // ... dan seterusnya
        },
        indigo: {
          100: '#a9a9d3',
          200: '#7a7aaf',
          // ... dan seterusnya
        },
    },
    },  
  plugins: [],
    
  },
}
