import type { Config } from 'tailwindcss'
import svgToDataUri from 'mini-svg-data-uri'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px', // Default for extra-large screens
        '2k': '2560px', // 2560x1440 – 2K WQHD resolution
        '4k': '3840px', // 3840x2160 – 4K UHD resolution
        fullhd: '1920px', // 1920x1080 – Full HD resolution
        macbook14: '3456px', // MacBook Pro 14" (3456x2234 Retina)
        macbook16: '3072px', // MacBook Pro 16" (3072x1920 Retina)
      },
    },
    extend: {
      screens: {
        '2xl': '1400px', // Default for extra-large screens
        '2k': '2560px', // 2560x1440 – 2K WQHD resolution
        '4k': '3840px', // 3840x2160 – 4K UHD resolution
        fullhd: '1920px', // 1920x1080 – Full HD resolution
        macbook14: '3456px', // MacBook Pro 14" (3456x2234 Retina)
        macbook16: '3072px', // MacBook Pro 16" (3072x1920 Retina)
      },
      fontSize: {
        base: ['16px', { lineHeight: '1.5' }],
        lg: ['18px', { lineHeight: '1.5' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.5' }],
        '3xl': ['30px', { lineHeight: '1.5' }],
        '4xl': ['36px', { lineHeight: '1.2' }],
        '5xl': ['48px', { lineHeight: '1.2' }],
        '6xl': ['60px', { lineHeight: '1.2' }],
        '7xl': ['72px', { lineHeight: '1.2' }],
      },
      spacing: {
        '128': '32rem', // Larger spacing for large screens
        '144': '36rem',
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319',
          200: 'rgba(17, 25, 40, 0.75)',
          300: 'rgba(255, 255, 255, 0.125)',
        },
        white: {
          DEFAULT: '#FFF',
          100: '#BEC1DD',
          200: '#C1C2D3',
        },
        blue: {
          '100': '#E4ECFF',
        },
        purple: '#CBACF9',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
      },
      animation: {
        spotlight: 'spotlight 2s ease .75s 1 forwards',
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { matchUtilities, theme } = api

      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')) as Record<
            string,
            string
          >,
          type: ['color'],
          respectPrefix: true,
          respectImportant: true,
        }
      )
    },
  ],
}

export default config
