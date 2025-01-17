import type { HTMLAttributes } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva('font-normal font-Montserrat', {
    variants: {
        variant: {
            h1: 'text-[2.5rem] md:text-[3.056rem] leading-tight',
            h2: 'text-[2rem] md:text-[2.444rem] leading-tight',
            h3: 'text-[1.5rem] md:text-[1.944rem] leading-tight',
            h4: 'text-[1.25rem] md:text-[1.556rem] leading-tight',
            h5: 'text-[1rem] md:text-[1.278rem] leading-tight',
            body: 'text-[1rem] leading-relaxed',
            subbody: 'text-[0.778rem] leading-relaxed',
        },
        color: {
            primary: 'text-primary',
            secondary: 'text-secondary',
            danger: 'text-red-500',
            success: 'text-green-500',
            warning: 'text-yellow-500',
            info: 'text-blue-500',
            light: 'text-gray-300',
            dark: 'text-gray-900',
        },
        weight: {
            thin: 'font-thin',
            extralight: 'font-extralight',
            light: 'font-light',
            normal: 'font-normal',
            medium: 'font-medium',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
            black: 'font-black',
        },
    },
    defaultVariants: {
        color: 'primary',
    },
});

export type Props = {
    as: keyof HTMLElementTagNameMap;
    variant: TextVariants['variant'];
    color?: TextVariants['color'];
    weight?: TextVariants['weight'];
    class?: HTMLAttributes['class'];
};

export type TextVariants = VariantProps<typeof textVariants>;
