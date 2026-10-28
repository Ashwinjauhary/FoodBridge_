/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bridge: {
          950: '#0F2A20',
          900: '#1B4332',
          800: '#245A42',
          700: '#2F7355',
        },
        harvest: {
          400: '#EDBE5E',
          500: '#E0A72C',
          600: '#C48F1F',
        },
        berry: {
          500: '#A23E48',
          600: '#8A2F3A',
        },
        sand: {
          50: '#FBF9F4',
          100: '#F5F1E8',
          200: '#EAE3D3',
        },
        ink: {
          900: '#1C1B1A',
          600: '#4A453F',
          400: '#6B6560',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      borderRadius: {
        bridge: '2rem 2rem 0 0',
      },
    },
  },
  plugins: [],
}
