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
        /* ── Brand tokens (mapped to CSS vars from globals.css) ── */
        primary: {
          DEFAULT: 'var(--color-primary)',       /* #16335A */
          dark:    'var(--color-primary-dark)',   /* #0E2746 */
          light:   'var(--color-primary-light)',  /* #1E4E8C */
        },
        accent: {
          DEFAULT: 'var(--color-accent)',         /* #4C9A2A */
          dark:    'var(--color-accent-dark)',    /* #3C7A1E */
          light:   'var(--color-accent-light)',   /* #EAF3E2 */
          muted:   'var(--color-accent-muted)',   /* #7FB04E — on dark bg */
        },
        cream: {
          DEFAULT: 'var(--color-cream)',          /* #FBFAF6 */
          2:       'var(--color-cream-2)',         /* #F4EEE2 */
        },
        border:  'var(--color-border)',           /* #EFE7D7 */
        muted:   'var(--color-muted)',            /* #6B6456 */
        tan:     'var(--color-tan)',              /* #9C8B6E */

        /* ── Shadcn semantic tokens ── */
        background:   'var(--background)',
        foreground:   'var(--foreground)',
        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT:    'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        input: 'var(--input)',
        ring:  'var(--ring)',
      },

      fontFamily: {
        sans:    ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },

      maxWidth: {
        container: '1200px',   /* matches mockup max-width */
      },

      borderRadius: {
        brand:  'var(--radius-md)',
        lg:     'var(--radius-lg)',
        md:     'var(--radius-md)',
        sm:     'var(--radius-sm)',
      },

      boxShadow: {
        brand:    'var(--shadow-md)',
        'brand-sm': 'var(--shadow-sm)',
        'brand-lg': 'var(--shadow-lg)',
        'book':   '0 14px 28px -12px rgba(76,154,42,0.85)',
        'card':   '0 18px 40px -30px rgba(22,51,90,0.4)',
        'hero':   '0 36px 70px -34px rgba(22,51,90,0.5)',
        'wa':     '0 14px 30px -8px rgba(37,211,102,0.7)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
