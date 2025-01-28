import type { HTMLAttributes } from 'vue';
import type { PricingPlan } from '~/types';
import { cva, type VariantProps } from 'class-variance-authority';

export const pricingVariants = cva(
    'bg-gradient-to-bl rounded-2xl overflow-hidden max-w-sm flex flex-col',
    {
        variants: {
            variant: {
                lite: 'from-green-100 to-gray-50',
                premium: 'from-slate-800 to-slate-900 text-gray-50',
            },
        },
    },
);

export const borderVariant = cva(
    'w-fit border rounded-xl px-4 py-1',
    {
        variants: {
            variant: {
                lite: 'border-slate-600',
                premium: 'border-white',
            },
        },
    },
);

export const textColorVariant = cva(
    '',
    {
        variants: {
            variant: {
                lite: 'text-gray-900',
                premium: 'text-gray-50',
            },
        },
    },
);

export type Props = {
    class?: HTMLAttributes['class'];
    variant: PricingVariants['variant'];
} & PricingPlan;

export type PricingVariants = VariantProps<typeof pricingVariants>;
