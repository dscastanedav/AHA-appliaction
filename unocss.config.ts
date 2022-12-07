import { defineConfig, presetUno, transformerDirectives } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  shortcuts: {
    center: 'flex justify-center items-center',
    between: 'flex justify-between items-center',
    around: 'flex justify-around items-center',
    btn: 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'center-col': 'flex flex-col justify-center items-center',
    'between-col': 'flex flex-col justify-between items-center',
    'start-col': 'flex flex-col items-center',
    'sidebar-icon': 'block text-xl mr-4',
    'sidebar-item': 'flex items-center py-4 px-8 block hover:bg-hubster-orange-900 dark:hover:bg-hubster-orange-600 transition duration-200 no-underline text-lg text-white bg-transparent border-0 w-full text-left',
    'icon-btn': 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Montserrat', 
        
      },
    }),
  ],
  rules: [

  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      fosfecOrange: {
        100: "#ffccc1",
        200: "#ffaa98",
        300: "#ff886f",
        400: "#ff6f50",
        500: "#ff5531",
        600: "#ff4e2c",
        700: "#ff4425",
        800: "#ff3b1f",
        900: "#ff2a13",
      },
    },
  },
})
