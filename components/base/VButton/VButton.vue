<script lang="ts" setup>
import { buttonVariants, type Props } from '.';

const {
    as = 'button',
    type = 'button',
    ...props
} = defineProps<Props>();

const variant = computed(() =>
    cn(
        buttonVariants({
            variant: props.variant,
            size: props.size,
        }),
        'font-semibold',
    ),
);

const buttonType = computed(() =>
    as === 'button'
        ? type
        : undefined,
);
</script>

<template>
    <component
        :is="as"
        :type="buttonType"
        :class="variant"
    >
        <slot />
    </component>
</template>
