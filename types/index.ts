export type NavigationLink = {
    name: string;
    hrefName: string;
};

export type CarouselBreakpoint = {
    [key: number]: {
        itemsToShow: number;
        snapAlign: string;
        gap: number;
    };
};

export type Feature = {
    title: string;
    description: string;
    iconName: string;
};

export type PricingPlan = {
    label: 'basic' | 'popular choice';
    plan: 'lite' | 'premium';
    description: string;
    price: string;
    features: string[];
};
