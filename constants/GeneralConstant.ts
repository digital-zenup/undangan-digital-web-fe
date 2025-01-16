import type { NavigationLink } from '~/types';

export const NAVIGATION_LINKS: NavigationLink[] = [
    {
        name: 'Home',
        hrefName: 'index',
    },
    {
        name: 'Tema',
        hrefName: 'theme',
    },
    {
        name: 'Fitur',
        hrefName: 'feature',
    },
    {
        name: 'Harga',
        hrefName: 'pricing',
    },
    {
        name: 'Tutorial',
        hrefName: 'tutorial',
    },
] as const;
