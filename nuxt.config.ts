// // https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/google-fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
    ],

    devtools: {
        enabled: true,
    },

    devServer: {
        port: 8000,
    },

    typescript: {
        typeCheck: true,
    },

    eslint: {
        config: {
            standalone: false,
        },
    },

    icon: {
        customCollections: [
            {
                prefix: 'zenup',
                dir: './assets/icons',
            },
        ],
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['.vue'],
        },
    ],

    tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
        configPath: '~/tailwind.config.js',
        viewer: false,
    },

    googleFonts: {
        download: true,
        families: {
            'Lato': [100, 300, 400, 700, 900],

            'Libre Baskerville': {
                wght: [400, 700],
                ital: [400],
            },

            'Montserrat': {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
                ital: [100, 200, 300, 400, 500, 600, 700, 800, 900],
            },
        },
    },

    experimental: { appManifest: false },
});
