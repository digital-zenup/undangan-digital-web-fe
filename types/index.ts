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

export type TutorialStep = {
    title: string;
    description: string;
    iconName: string;
};
