import type { CarouselBreakpoint } from '~/types';

export const CAROUSEL_BREAKPOINTS: CarouselBreakpoint = {
    320: { itemsToShow: 2, snapAlign: 'start', gap: 16 },
    768: { itemsToShow: 3, snapAlign: 'center', gap: 24 },
    1024: { itemsToShow: 4, snapAlign: 'center', gap: 32 },
} as const;

export const CATALOGUE_CAROUSEL_MAX_ITEMS: number = 5;
export const CATALOGUE_CAROUSEL_CONFIG = {
    itemsToShow: 3.5,
    wrapAround: true,
    autoplay: 2000,
    breakpointMode: 'carousel',
    mouseDrag: false,
    touchDrag: false,
    transition: 1000,
    gap: 20,
} as const;
