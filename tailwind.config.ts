import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand tokens */
        primary: {
          DEFAULT: 'var(--color-primary)',       /* #10327f */
          dark:    'var(--color-primary-dark)',   /* #0a2160 */
          light:   'var(--color-primary-light)',  /* #1a3f94 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)',         /* #5AB22E */
          dark:    'var(--color-accent-dark)',    /* #3A8010 */
          light:   'var(--color-accent-light)',   /* #EBF7E1 */
        },
        cream: {
          DEFAULT: 'var(--color-cream)',          /* #F4F6FC */
          2:       'var(--color-cream-2)',         /* #edf0f8 */
        },
        border:  'var(--color-border)',
        muted:   'var(--color-muted)',

        /* Shadcn semantic tokens */
        background:         'var(--background)',
        foreground:         'var(--foreground)',
        card: {
          DEFAULT:          'var(--card)',
          foreground:       'var(--card-foreground)',
        },
        popover: {
          DEFAULT:          'var(--popover)',
          foreground:       'var(--popover-foreground)',
        },
        secondary: {
          DEFAULT:          'var(--secondary)',
          foreground:       'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT:          'var(--destructive)',
          foreground:       'var(--destructive-foreground)',
        },
        input:              'var(--input)',
        ring:               'var(--ring)',
      },
      fontFamily: {
        sans:    ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      borderRadius: {
        brand:  'var(--radius-md)',
        lg:     'var(--radius-lg)',
        md:     'var(--radius-md)',
        sm:     'var(--radius-sm)',
      },
      boxShadow: {
        brand:      'var(--shadow-md)',
        'brand-sm': 'var(--shadow-sm)',
        'brand-lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config