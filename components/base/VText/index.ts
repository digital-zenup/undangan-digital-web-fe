import type { HTMLAttributes } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';

export const textVariants = cva('font-normal font-Montserrat', {
    variants: {
        variant: {
            h1: 'text-4xl',
            h2: 'text-3xl',
            h3: 'text-2xl',
            h4: 'text-xl',
            h5: 'text-lg',
            body: 'text-base',
            subbody: 'text-sm',
        },
        leading: {
            none: 'leading-none',
            tight: 'leading-tight',
            snug: 'leading-snug',
            normal: 'leading-normal',
            relaxed: 'leading-relaxed',
            loose: 'leading-loose',
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
        leading: 'normal',
    },
});

export type Props = {
    as: keyof HTMLElementTagNameMap;
    variant: TextVariants['variant'];
    color?: TextVariants['color'];
    leading?: TextVariants['leading'];
    weight?: TextVariants['weight'];
    class?: HTMLAttributes['class'];
};

export type TextVariants = VariantProps<typeof textVariants>;
