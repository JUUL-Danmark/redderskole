/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundColor: ({
        'secondary': '#f3f4f6'
      }),
      backgroundImage: theme => ({
        'link': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"%23ae3338\"%3E%3Cpath d=\"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z\" /%3E%3Cpath d=\"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z\" /%3E%3C/svg%3E')",
      }),
      colors: {
        'stiletto': {
          50: '#E8B1B3',
          100: '#E3A1A4',
          200: '#DA8185',
          300: '#D16266',
          400: '#C84248',
          500: '#AE3338',
          600: '#8E2A2E',
          700: '#6F2124',
          800: '#4F171A',
          900: '#300E0F'
        },
        'rhino': {
          50: '#f5f5f8',
          100: '#ebecf0',
          200: '#cccfda',
          300: '#adb2c3',
          400: '#707996',
          500: '#323f69',
          600: '#2d395f',
          700: '#262f4f',
          800: '#1e263f',
          900: '#191f33'
        },
        'outer-space': {
          50: '#f5f5f5',
          100: '#ebebeb',
          200: '#cccdce',
          300: '#adafb1',
          400: '#707476',
          500: '#33383b',
          600: '#2e3235',
          700: '#262a2c',
          800: '#1f2223',
          900: '#191b1d'
        }
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'cairo': ['Cairo'],
      },
    },
  },
  plugins: [],
}