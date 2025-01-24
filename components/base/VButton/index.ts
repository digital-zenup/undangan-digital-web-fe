import type { NuxtLink } from '#components';
import type { HTMLAttributes } from 'vue';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    {
        variants: {
            variant: {
                default: 'bg-slate-900 text-gray-50 hover:bg-slate-900/90',
                destructive: 'bg-red-500 text-gray-50 hover:bg-red-500/80',
                outline: 'border border-input bg-background hover:bg-accent hover:text-gray-50',
                secondary: 'bg-gray-400 text-gray-100 hover:text-gray-900 hover:bg-gray-400/80',
                ghost: 'hover:bg-accent hover:text-gray-100',
                link: 'text-primary underline-offset-4 hover:underline',
                success: 'bg-green-500 text-gray-50 hover:bg-green-500/80',
                unstyled: 'all-[unset] w-fit h-fit !p-0',
                gradation: 'bg-gradient-to-br from-[#18B26B] to-[#3A94E8] text-gold-50 hover:bg-red-500',
            },
            size: {
                sm: 'h-8 px-3 text-sm',
                md: 'h-10 px-4 text-base',
                lg: 'h-12 px-6 text-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'md',
        },
    },
);

export type Props = {
    variant: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    type?: HTMLButtonElement['type'];
    class?: HTMLAttributes['class'];
    as?: 'button' | typeof NuxtLink;
};

export type ButtonVariants = VariantProps<typeof buttonVariants>;
