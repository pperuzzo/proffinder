module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        main: '#F05340',
        blackalt: '#191919',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      },
    }
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [],
}