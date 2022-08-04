module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      mono: ['Electrolize', 'Courier New', 'monospace'],
      // sans: ['sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {

      height: {
        80: '80vh',
        85: '85vh',
        90: '90vh',
        100: '100vh',
      },
      lineClamp: {
        3: '3',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require("@tailwindcss/aspect-ratio"),
  ],
}
