const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
        // './views/**/*.{.ejs}',
        './views/*.ejs',
        './views/components/*.ejs',
        './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'phone':{"max":"430px"},
      'tablet': {'max':'640px'},
      'tablet1': {'max' : '768px'},
      'tablet2':  {'max' : '990px'},
      'laptop':  {'max' : '1024px'},
      'laptop1': {'max' : '1135px'},
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'merry': ['Merriweather', 'sans-serif']
      },
      colors: {
        'krrunch': '#0E0D0C',
        'krrunch2': '#171819',
        'krrunch3': '#E4C590',
        'krrunch4':"rgb(0 0 0 / 30%)",
        'krrunch5':"#a7a7a7"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}