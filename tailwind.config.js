/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    darkMode: 'class',
    safelist: 'dark',
    prefix: '',

    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            boxShadow: {
                navbar: '0px 5px 40px rgba(10, 10, 10, 0.1)',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                libre: ['Libre Baskerville', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            textColor: {
                DEFAULT: '#D0D0D0',
            },
            colors: {
                'gray': {
                    DEFAULT: 'var(--color-gray-500)',
                    50: 'var(--color-gray-50)',
                    100: 'var(--color-gray-100)',
                    150: 'var(--color-gray-150)',
                    200: 'var(--color-gray-200)',
                    300: 'var(--color-gray-300)',
                    400: 'var(--color-gray-400)',
                    500: 'var(--color-gray-500)',
                    600: 'var(--color-gray-600)',
                    700: 'var(--color-gray-700)',
                    800: 'var(--color-gray-800)',
                    850: 'var(--color-gray-850)',
                    900: 'var(--color-gray-900)',
                    950: 'var(--color-gray-950)',
                },
                'light-green': {
                    DEFAULT: 'var(--color-light-green-500)',
                    50: 'var(--color-light-green-50)',
                    100: 'var(--color-light-green-100)',
                    150: 'var(--color-light-green-150)',
                    200: 'var(--color-light-green-200)',
                    300: 'var(--color-light-green-300)',
                    400: 'var(--color-light-green-400)',
                    500: 'var(--color-light-green-500)',
                    600: 'var(--color-light-green-600)',
                    700: 'var(--color-light-green-700)',
                    800: 'var(--color-light-green-800)',
                    850: 'var(--color-light-green-850)',
                    900: 'var(--color-light-green-900)',
                    950: 'var(--color-light-green-950)',
                },
                'gold': {
                    DEFAULT: 'var(--color-gold-500)',
                    50: 'var(--color-gold-50)',
                    100: 'var(--color-gold-100)',
                    150: 'var(--color-gold-150)',
                    200: 'var(--color-gold-200)',
                    300: 'var(--color-gold-300)',
                    400: 'var(--color-gold-400)',
                    500: 'var(--color-gold-500)',
                    600: 'var(--color-gold-600)',
                    700: 'var(--color-gold-700)',
                    800: 'var(--color-gold-800)',
                    850: 'var(--color-gold-850)',
                    900: 'var(--color-gold-900)',
                    950: 'var(--color-gold-950)',
                },
                'border': 'var(--color-border)',
                'input': 'var(--color-input)',
                'ring': 'var(--color-ring)',
                'background': 'var(--color-background)',
                'foreground': 'var(--color-foreground)',
                'success': 'var(--color-success)',
                'primary': {
                    DEFAULT: 'var(--color-primary)',
                    foreground: 'var(--color-primary-foreground)',
                },
                'secondary': {
                    DEFAULT: 'var(--color-secondary)',
                    foreground: 'var(--color-secondary-foreground)',
                },
                'destructive': {
                    DEFAULT: 'var(--color-destructive)',
                    foreground: 'var(--color-destructive-foreground)',
                },
                'muted': {
                    DEFAULT: 'var(--color-muted)',
                    foreground: 'var(--color-muted-foreground)',
                },
                'accent': {
                    DEFAULT: 'var(--color-accent)',
                    foreground: 'var(--color-accent-foreground)',
                },
                'popover': {
                    DEFAULT: 'var(--color-popover)',
                    foreground: 'var(--color-popover-foreground)',
                },
                'card': {
                    DEFAULT: 'var(--color-card)',
                    foreground: 'var(--color-card-foreground)',
                },
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
                'collapsible-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
        require('tailwindcss-animate'),
    ],
};
