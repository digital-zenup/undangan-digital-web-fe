import type { NuxtLinkProps } from '#app';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '../VButton';

export type Props = {
    class?: HTMLAttributes['class'];
    variant: ButtonVariants['variant'];
} & NuxtLinkProps;
