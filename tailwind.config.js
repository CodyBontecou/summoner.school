module.exports = {
  theme: {
    extend: {
      borderWidth: {},
      borderRadius: {},
      colors: {
        primary: {
          100: '#201d2b',
          200: '#403D51',
        },
        secondary: {
          1: '#B2B1BD',
          200: '#6C5ECF',
          300: 'rgba(196, 190, 235, .80)',
          4: 'rgba(178, 177, 189, .60)',
          500: '#DADADA',
        },
        form: {
          background: 'rgba(178, 177, 189, .10)',
          placeholder: 'rgba(178, 177, 189, .35)',
        },

        notification: '#EB5252',
      },
      maxWidth: {
        1480: '1480px',
      },
      lineHeight: {
        '80px': '80px',
      },
    },
    variants: {},
    plugins: [],
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      // enabled: false,
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
        // TypeScript
        'plugins/**/*.ts',
        'nuxt.config.ts',
        // Validators
        'validators/*.js',
      ],
    },
  },
}
